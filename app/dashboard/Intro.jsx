"use client"
import React, { useEffect, useState } from "react";
import {Button} from "@/components/ui/button.tsx"
import {ReaderIcon} from "@radix-ui/react-icons"
import dynamic from 'next/dynamic';
// Dynamically import the Player component
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
    ssr: false
  });
  

export default function Intro(){
    const [isClient, setIsClient] = useState(false);

    // Ensure the component only runs on the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);
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

                {/* Lottie Animation - only rendered client-side */}
                {isClient && (
                <div className="w-full max-w-md">
                    <Player
                    autoplay
                    loop
                    src="https://lottie.host/1756b570-c79c-46eb-89d4-b7f1d98f079e/Dj1EDz0yjZ.json"
                    style={{ height: '300px', width: '300px' }} // Adjust the size as needed
                    />
                </div>
                )}

            </div>
            
        </>
    )
}