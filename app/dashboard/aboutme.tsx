"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function AboutMe(){
    return(
        <>
            {/* New DotLottie animation implementation */}
            <div className='flex -left-44 w-screen absolute -mt-16 overflow-hidden'>
                <DotLottieReact
                    src="https://lottie.host/871841d3-07bf-40cf-90bc-929e1d3f901d/BWxKrwmaJU.lottie"
                    loop
                    autoplay
                    style={{ height: '400px', width: '100%' }}
                    className='z-0 object-cover border-b-2 border-accent'
                />
            </div>
            <div className='z-10 relative text-center pt-14'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
                <div className='flex'>
                    <img src='/images/headshot.png'width={200} className='ml-10 -mt-11'/>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 inline m-5 mr-28">
                        Software Engineer and Web Developer with experience as a 
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
