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
                    <Button>
                        <ReaderIcon className="mr-2 h-4 w-4" /> Download Resume
                    </Button>
                </div>
                {/* New DotLottie animation implementation */}
                <DotLottieReact
                    src="https://lottie.host/faa9004e-c6ab-4d25-9cda-65f392df45ea/hW09IBOedm.lottie"
                    loop
                    autoplay
                    style={{ height: '300px', width: '300px' }}
                    className=''
                />

            </div>
            
        </>
    )
}
