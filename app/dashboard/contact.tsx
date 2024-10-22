import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Contact(){
    return(
        <>
            <div className='w-full text-center z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contact</h3>
                <div className='w-full max-w-md mx-auto'>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">Email Me</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@gmail.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Hey there!" className="min-h-[100px]" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button type="submit" className="w-3/4">Submit</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}