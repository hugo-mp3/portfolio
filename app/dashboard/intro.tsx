"use client"
import React from "react";
import {Button} from "@/components/ui/button"
import {ReaderIcon} from "@radix-ui/react-icons"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function Intro(){
    return(
        <>
            <div className="flex items-center justify-start space-x-10">
                <div className='ml-10 pb-10'>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">Howdy! I am </p>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">Hugo Manrique-Pinell</h1>
                    <h2 className="scroll-m-20 w-30 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Full Stack Developer</h2>
                    <a href="/HugompCV.pdf" download="Hugo_Resume.pdf">
                        <Button>
                            <ReaderIcon className="mr-2 h-4 w-4" /> Download Resume
                        </Button>
                    </a>
                </div>
                {/* New DotLottie animation implementation */}
                <DotLottieReact
                    src="https://lottie.host/3bc940a1-acb5-4560-8cd5-c6ed3809eaa3/T8tlf8WyPI.json"
                    loop
                    autoplay
                    style={{ height: '300px', width: '300px' }}
                    className=''
                />

            </div>
            
        </>
    )
}
