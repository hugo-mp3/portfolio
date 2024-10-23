"use client"
import React, {useState,useEffect} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ReactPlayer from 'react-player'
import { WiDirectionUpRight } from "react-icons/wi";
import {Button} from "@/components/ui/button"

export default function Projects(){
    const [isClient,setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    });

    return(
        <>
            <div className='w-full text-center z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b-2 border-t-2 border-accent-border">Projects</h3>
                {/* manipulate ai card */}
                <div className='flex items-center content-center justify-center w-full text-center z-10'>
                    <Card className='w-1/2 m-10 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:-translate-y-4 transition-translate duration-300 ease-in-out'>
                        <CardContent className='flex pt-6 pr-6 pl-6 content-center justify-center'>
                            <img src='/images/manipulateai.png'width={600} className='border-accent-border border-2'/>
                        </CardContent>
                        <CardHeader className='flex pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle className='flex justify-center text-center'><a href="https://www.manipulate.app/" className='flex ml-24'>Manipulate AI<Button className='ml-4 -mt-2 w-20 h-7'><WiDirectionUpRight className='h-[2.6rem] w-[2.6rem]'/>Launch</Button></a></CardTitle>
                            <CardDescription className='text-primary'>A platform and SaaS solution that provides users with a personalized AI mentor for guidance and manipulation.</CardDescription>
                            <div className="flex flex-wrap h-5 items-center justify-center space-x-4 text-xs text-accent-border">
                                <div>Next.js</div>
                                <div>React.js</div>
                                <div>Shadcn</div>
                                <div>Vercel</div>
                                <div>TailwindCSS</div>
                                <div>FastAPI</div>
                                <div>MongoDB</div>
                                <div>OpenAI</div>
                                <div>AWS</div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
                {/* hugobot card */}
                <div className='flex items-center content-center justify-center w-full text-center z-10'>
                    <Card className='w-1/2 m-10 mt-0 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:-translate-y-4 transition-translate duration-300 ease-in-out will-change-transform'>
                        <CardContent className='flex pt-6 pr-6 pl-6 content-center justify-center'>
                            {isClient && <ReactPlayer url='https://youtu.be/6mUZqZc3WWk' width={600} className='border-accent-border border-2' />}
                        </CardContent>
                        <CardHeader className='flex flex-col items-center pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle className='flex justify-center text-center -mb-1'><a href="https://github.com/hugo-mp3/HugoBot-frontend" className='flex ml-[1.6rem]'>HugoBot<WiDirectionUpRight className='h-[1.6rem] w-[1.6rem] -mt-1'/></a></CardTitle>
                            <div className="flex flex-col justify-center items-center h-full">
                                <CardDescription className='text-primary mb-1'>An interactive 3D virtual companion app</CardDescription>
                                <div className="flex flex-wrap h-5 items-center justify-center space-x-4 text-xs text-accent-border">
                                    <div>React.js</div>
                                    <div>Node.js</div>
                                    <div>Express.js</div>
                                    <div>Chakra UI</div>
                                    <div>Vite</div>
                                    <div>TailwindCSS</div>
                                    <div>OpenAI</div>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>

            </div>
        </>
    )
}
