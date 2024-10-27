"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";


declare global {
    interface Window {
        grecaptcha: {
            execute: (sitekey: string, options?: { action: string }) => Promise<string>;
        };
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const emailjsServiceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || '';
const emailjsTemplateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || '';
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || '';
const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export default function Contact() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (typeof window !== 'undefined' && window.grecaptcha) {
            window.grecaptcha.execute(captchaKey, { action: 'submit' }).then((token) => {
                emailjs.send(
                    emailjsServiceID,     // Replace with your EmailJS service ID
                    emailjsTemplateID,    // Replace with your EmailJS template ID
                    {
                        from_name: formData.name,   // Maps to {{from_name}} in your template
                        message: formData.message,  // Maps to {{message}} in your template
                        reply_to: formData.email,   // Maps to {{reply_to}} in your template
                        'g-recaptcha-response': token // Add the token to your payload
                    },
                    emailjsPublicKey         // Replace with your EmailJS public key (from account settings)
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast({
                        title: "Message Successfully Sent",
                        description: "Thank you for reaching out! I'll get back to you shortly."
                    });
                    setFormData({ email: '', name: '', message: '' }); // Clear form
                }, (error) => {
                    console.error('FAILED...', error);
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request."
                    });
                });
            });
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${captchaKey}`; // Replace with your site key
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        script.onload = () => {
            if (typeof window.grecaptcha === "undefined") {
                console.error("grecaptcha is not defined");
            }
        };
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    

    return (
        <div className='w-full text-center z-10'>
            <motion.h3
                className="scroll-m-20 text-2xl font-semibold tracking-tight border-b-2 border-t-2 border-accent-border bg-background"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={itemVariants}
            >
                Contact
            </motion.h3>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3}}
                variants={itemVariants}
                className='w-full justify-items-center max-w-lg mx-auto m-10 mb-10 flex flex-col items-center'
            >
                <Card className="base:w-10/12 sm:w-full border-accent-border border-2">
                    <form onSubmit={handleSubmit}>
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">Email Me</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-left">
                            <div className="space-y-2">
                                <Label htmlFor="email" className='ml-1'>Email</Label>
                                <Input id="email" placeholder="example@gmail.com" type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name" className='ml-1'>Name</Label>
                                <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className='ml-1'>Message</Label>
                                <Textarea id="message" placeholder="Hey there!" className="min-h-[100px]" value={formData.message} onChange={handleChange} required />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button type="submit" className="w-3/4 hover:bg-accent-border">Submit</Button>
                        </CardFooter>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
}
