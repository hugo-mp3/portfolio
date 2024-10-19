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
                <div className='flex items-center justify-center w-full text-center z-10'>
                    <Card className='flex w-3/4 m-10'>
                        <CardHeader>
                            <CardTitle>Manipulate AI</CardTitle>
                            <CardDescription>A platform and SaaS solution that provides users with a personalized AI mentor for guidance and manipulation.</CardDescription>
                        </CardHeader>
                        <CardContent className='p-6 content-center'>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
