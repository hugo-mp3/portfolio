import React from 'react';


export default function AboutMe(){
    return(
        <>
            
            <div className='z-10 relative text-center pt-14 '>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
                <div className='flex justify-center items-center'>
                    <img src='/images/newheadshot.png' className='inline ml-3 w-1/6 h-1/6'/>
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
