"use client"
import React,{useEffect, useState} from 'react';
import dynamic from 'next/dynamic'

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),{
    ssr: false
})

export default function AboutMe(){
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    return(
        <>
            <div className='w-full absolute'>
                <Player
                autoplay
                loop
                src="https://lottie.host/57eedb65-da8a-49c7-a64a-4c56748a74ce/BVUH8QwboT.json"
                style={{ height: '400px', width: '100%'}}
                className="z-0 object-cover"
                />
            </div>
            <div className='z-10 relative text-center pt-10'>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
            </div>

        </>
    )
}