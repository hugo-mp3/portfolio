import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { recaptchaToken } = await req.json();
    
    if (!recaptchaToken) {
      console.log('No reCAPTCHA token provided');
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 400 }
      );
    }

    const projectID = process.env.PROJECT_ID;
    if (!projectID) {
      console.log('Project ID not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments`;
    
    const auth = await getGoogleAccessToken();
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: recaptchaToken,
          siteKey: process.env.RECAPTCHA_KEY,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('reCAPTCHA API error:', errorData);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('reCAPTCHA API response:', result); // Debug log

    if (!result.tokenProperties?.valid) {
      console.log('Invalid token properties:', result.tokenProperties);
      return NextResponse.json(
        { success: false, error: 'Invalid reCAPTCHA token' },
        { status: 403 }
      );
    }

    if (!result.riskAnalysis?.score || result.riskAnalysis.score < 0.5) {
      console.log('Failed risk analysis:', result.riskAnalysis);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 403 }
      );
    }

    // Only return success if we made it through all checks
    return NextResponse.json({
      success: true,
      message: 'reCAPTCHA verified successfully',
      score: result.riskAnalysis.score
    });

  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, error: 'Error verifying reCAPTCHA' },
      { status: 500 }
    );
  }
}

// Helper function to get Google access token
async function getGoogleAccessToken() {
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    
    if (!privateKey || !clientEmail) {
      throw new Error('Missing Google credentials');
    }

    const jwt = await createJWT(clientEmail, privateKey);
    
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    const { access_token } = await tokenResponse.json();
    return access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Helper function to create JWT
async function createJWT(clientEmail: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };
  
  const claim = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/cloud-platform',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedClaim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  
  const signatureInput = `${encodedHeader}.${encodedClaim}`;
  
  const crypto = require('crypto');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(privateKey, 'base64url');
  
  return `${signatureInput}.${signature}`;
}