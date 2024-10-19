import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
  

export default function Projects(){
    return(
        <>
            <div className='w-full text-center pt-10 z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Projects</h3>
                <div className='flex items-center content-center justify-center w-full text-center z-10'>
                    <Card className='w-1/2 m-10 justify-between border-accent-border hover:drop-shadow-xs hover:scale-105'>
                        <CardHeader className='flex justify-center text-center'>
                            <CardTitle>Manipulate AI</CardTitle>
                            <CardDescription className='text-primary'>A platform and SaaS solution that provides users with a personalized AI mentor for guidance and manipulation.</CardDescription>
                            <div className="flex flex-wrap h-5 items-center justify-center space-x-4 text-sm text-muted-foreground">
                                <div>Next.js</div>
                                <Separator orientation="vertical" />
                                <div>React.js</div>
                                <Separator orientation="vertical" />
                                <div>Shadcn</div>
                                <Separator orientation="vertical" />
                                <div>Vercel</div>
                                <Separator orientation="vertical" />
                                <div>TailwindCSS</div>
                                <Separator orientation="vertical" />
                                <div>FastAPI</div>
                                <Separator orientation="vertical" />
                                <div>MongoDB</div>
                                <Separator orientation="vertical" />
                                <div>OpenAI</div>
                                <Separator orientation="vertical" />
                                <div>AWS</div>
                            </div>
                        </CardHeader>
                        <CardContent className='flex pb-6 pl-6 pr-6 content-center justify-center'>
                            <a href="https://www.manipulate.app/"><img src='/images/manipulateai.png'width={600}/></a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
