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
            {isClient && (
                <div className='w-full absolute'>
                    <Player
                    autoplay
                    loop
                    src="https://lottie.host/57eedb65-da8a-49c7-a64a-4c56748a74ce/BVUH8QwboT.json"
                    style={{ height: '400px', width: '100%'}}
                    className="z-0 object-cover"
                    />
                </div>
            )}
            <div className='z-10 relative text-center pt-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
                <div className='flex'>
                    <img src='/images/headshot.png'width={200} className='ml-10'/>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 inline m-6">
                        Aspiring software engineer and web developer with experience as a 
                        <span className="leading-7 [&:not(:first-child)]:mt-6 inline text-accent-hover"> Research Intern </span>
                        at 
                        <span className="leading-7 [&:not(:first-child)]:mt-6 inline text-accent-hover"> Medstar Health Research Institute</span>, 
                        with a strong focus on continuous learning and hands-on project development. Currently pursuing academic excellence while 
                        actively building a solid foundation in software engineering principles. Eager to contribute to innovative teams, solve 
                        complex problems, and grow into a role where I can make a meaningful impact on product development and people.
                    </p>
                </div>
            </div>

        </>
    )
}