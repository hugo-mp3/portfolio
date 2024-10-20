import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Projects(){
    return(
        <>
            <div className='w-full text-center z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Projects</h3>
                {/* manipulate ai card */}
                <div className='flex items-center content-center justify-center w-full text-center z-10'>
                    <Card className='w-1/2 m-10 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:scale-105'>
                        <CardContent className='flex pt-6 pr-6 pl-6 content-center justify-center'>
                            <a href="https://www.manipulate.app/"><img src='/images/manipulateai.png'width={600} className='border-accent-border border-2'/></a>
                        </CardContent>
                        <CardHeader className='flex pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle>Manipulate AI</CardTitle>
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
                    <Card className='w-1/2 m-10 mt-0 justify-between border-accent-border border-2 hover:drop-shadow-xs hover:scale-105'>
                        <CardContent className='flex pt-6 pr-6 pl-6 content-center justify-center'>
                            <a href="https://www.manipulate.app/"><img src='/images/manipulateai.png'width={600} className='border-accent-border border-2'/></a>
                        </CardContent>
                        <CardHeader className='flex pr-6 pl-6 pb-6 pt-0 justify-center text-center'>
                            <CardTitle>HugoBot</CardTitle>
                            <CardDescription className='text-primary'>An interactive 3D virtual companion app</CardDescription>
                            <div className="flex flex-wrap h-5 items-center justify-center space-x-4 text-xs text-accent-border">
                                <div>React.js</div>
                                <div>Node.js</div>
                                <div>Express.js</div>
                                <div>Chakra UI</div>
                                <div>Vite</div>
                                <div>TailwindCSS</div>
                                <div>OpenAI</div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </>
    )
}
