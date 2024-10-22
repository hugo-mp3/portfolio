"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import emailjs from 'emailjs-com'

export default function Contact(){
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });
    
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_202o2em',     // Replace with your EmailJS service ID
            'template_cup0sts',    // Replace with your EmailJS template ID
            {
                from_name: formData.name,   // Maps to {{from_name}} in your template
                message: formData.message,  // Maps to {{message}} in your template
                reply_to: formData.email    // Maps to {{reply_to}} in your template
            },
            'DaQlAHUlZp4e8T5al'         // Replace with your EmailJS public key (from account settings)
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Email sent successfully!');
            setFormData({ email: '', name: '', message: '' }); // Clear form
        }, (error) => {
            console.error('FAILED...', error);
            setStatus('Failed to send email.');
        });
    };
    return(
        <>
            <div className='w-full text-center z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contact</h3>
                <div className='w-full max-w-lg mx-auto m-10'>
                    <Card className="w-full border-accent-border border-2 ">
                        <form onSubmit={handleSubmit}>
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">Email Me</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@gmail.com" type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Hey there!" className="min-h-[100px]" value={formData.message} onChange={handleChange} required />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button type="submit" className="w-3/4">Submit</Button>
                        </CardFooter>
                        </form>
                        {status && <p>{status}</p>}
                    </Card>
                </div>
            </div>
        </>
    )
}