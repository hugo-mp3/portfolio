"use client"
import React, {useState,useEffect,useRef} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { IoGlobeOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import { motion } from "framer-motion"

const itemVariants = {
    hidden: { opacity:0, x: 50 },
    visible: { opacity:1, x:0 }
}

// YouTubeEmbed component for responsive iframe
const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
    <div className="player-wrapper base:w-full relative overflow-hidden" style={{ aspectRatio: '16 / 9', height: 'auto' }}>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-accent-border border-2"
            style={{ position: 'relative' }}
        ></iframe>
    </div>
);


export default function Projects(){

    return(
        <>
            <div className='w-full text-center z-10'>
                <motion.h3
                    className='scroll-m-20 text-2xl font-semibold tracking-tight border-b-2 border-t-2 border-accent-border'
                    initial='hidden'
                    whileInView='visible'
                    viewport = {{ amount: 0.2 }}
                    transition= {{ duration: 0.3 }}
                    variants={itemVariants}
                >
                    Projects
                </motion.h3>
                {/* manipulate ai card */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3}}
                    variants={itemVariants}
                    className='flex items-center content-center justify-center w-full text-center z-10'
                >
                    <Card className='base:w-10/12 sm:w-3/4 lg:w-1/2 base:m-0 base:mb-7 base:mt-10 sm:m-10 sm:mb-0 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:-translate-y-3 transition-translate duration-300 ease-in-out will-change-transform'>
                        <CardContent className='flex base:pb-3 sm:pb-6 pt-6 pr-6 pl-6 content-center justify-center'>
                        <div className="img-wrapper base:w-full relative overflow-hidden" style={{ aspectRatio: '16 / 9', height: 'auto' }}>
                            <img 
                                src='/images/manipulateai.png'
                                alt="Manipulate AI"
                                className='w-full h-full object-cover border-accent-border border-2'
                            />
                        </div>
                        </CardContent>
                        <CardHeader className='flex pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle className='flex justify-center text-center text-2xl text-accent-hover underline'><a href="https://www.manipulate.app/" className='flex  ml-[2.2rem]'>Manipulate AI<IoGlobeOutline className='h-[1.8rem] w-[1.8rem] ml-[0.4rem]'/></a></CardTitle>
                            <CardDescription className='text-primary base:text-xs sm:text-sm'>A platform and SaaS solution that provides users with a personalized AI mentor for guidance and manipulation.</CardDescription>
                            <div className="flex flex-wrap h-7 items-center justify-center space-x-4 base:text-xxs sm:text-xs text-accent-border">
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
                </motion.div>
                {/* hugobot card */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3}}
                    variants={itemVariants}
                    className='flex items-center content-center justify-center w-full text-center z-10'
                >
                    <Card className='base:w-10/12 sm:w-3/4 lg:w-1/2 base:m-0 base:mb-10 sm:m-10 sm:mt-6 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:-translate-y-3 transition-translate duration-300 ease-in-out will-change-transform'>
                        <CardContent className='flex base:pb-3 sm:pb-6 pt-6 pr-6 pl-6 content-center justify-center'>
                            <YouTubeEmbed videoId="6mUZqZc3WWk" />
                        </CardContent>
                        <CardHeader className='flex flex-col items-center pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle className='flex justify-center text-center -mb-1 text-2xl text-accent-hover underline'><a href="https://github.com/hugo-mp3/HugoBot-frontend" className='flex ml-[2.2rem]'>HugoBot<VscGithub className='h-[1.8rem] w-[1.8rem] ml-[0.4rem]'/></a></CardTitle>
                            <div className="flex flex-col justify-center items-center h-full">
                                <CardDescription className='text-primary mb-1 base:text-xs sm:text-sm'>An interactive 3D virtual companion app</CardDescription>
                                <div className="flex flex-wrap h-7 items-center justify-center space-x-4 base:text-xxs sm:text-xs text-accent-border">
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
                </motion.div>

            </div>
        </>
    )
}
