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
            <div className=''>

            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>

        </>
    )
}