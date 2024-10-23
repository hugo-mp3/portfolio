import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaNode, FaWindows, FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { SiExpress, SiFlask, SiSqlite, SiVite, SiChakraui, SiPostman, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import {Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,} from "@/components/ui/tooltip";





export default function SkillsAndTools(){

    return(
        <>
            <div className='text-center relative z-10 '>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-t-2 border-b-2 border-accent-border">Skills</h3>
                <div className='sm:ml-14 sm:mr-14 md:ml-28 md:mr-28 md-1:ml-40 md-1:mr-40 lg:ml-56 lg:mr-56'>
                    <div className='grid grid-cols-8 justify-items-center gap-x-0 gap-y-4 mb-10 mt-10'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <FaHtml5 className='h-[2.6rem] w-[2.6rem] text-red-500 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">HTML5</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <FaCss3Alt className='h-[2.6rem] w-[2.6rem] text-cyan-500 hover:scale-125'/>
                        <FaReact className='h-[2.6rem] w-[2.6rem] text-cyan-400 hover:scale-125'/>
                        <FaPython className='h-[2.6rem] w-[2.6rem] text-amber-300 hover:scale-125'/>
                        <FaJava className='h-[2.6rem] w-[2.6rem] text-red-800 hover:scale-125'/>
                        <FaNode className='h-[2.6rem] w-[2.6rem] text-lime-500 hover:scale-125'/>
                        <FaWindows className='h-[2.6rem] w-[2.6rem] text-sky-400 hover:scale-125'/>
                        <FaLinux className='h-[2.6rem] w-[2.6rem] text-slate-500 hover:scale-125'/>
                        <FaGitAlt className='h-[2.6rem] w-[2.6rem] text-orange-600 hover:scale-125' />
                        <RiTailwindCssFill className='h-[2.6rem] w-[2.6rem] text-sky-300 hover:scale-125' />
                        <RiNextjsFill className='h-[2.6rem] w-[2.6rem] text-gray-800 dark:text-slate-100 hover:scale-125' />
                        <RiSupabaseFill className='h-[2.6rem] w-[2.6rem] text-green-500 hover:scale-125' />
                        <IoLogoJavascript className='h-[2.6rem] w-[2.6rem] text-yellow-400 hover:scale-125' />
                        <IoLogoGithub className='h-[2.6rem] w-[2.6rem] dark:text-gray-200 text-slate-900 hover:scale-125' />
                        <SiExpress className='h-[2.6rem] w-[2.6rem] dark:text-gray-50 text-slate-800 hover:scale-125' />
                        <SiFlask className='h-[2.6rem] w-[2.6rem] text-slate-500 hover:scale-125' />
                        <SiSqlite className='h-[2.6rem] w-[2.6rem] text-blue-400 hover:scale-125' />
                        <SiVite className='h-[2.6rem] w-[2.6rem] text-indigo-500 hover:scale-125' />
                        <SiChakraui className='h-[2.6rem] w-[2.6rem] text-green-300 hover:scale-125' />
                        <SiPostman className='h-[2.6rem] w-[2.6rem] text-orange-500 hover:scale-125' />
                        <SiShadcnui className='h-[2.6rem] w-[2.6rem] dark:text-gray-100 text-slate-950 hover:scale-125' />
                        <BiLogoPostgresql className='h-[2.6rem] w-[2.6rem] text-cyan-800 hover:scale-125' />
                        <DiMongodb className='h-[2.6rem] w-[2.6rem] text-green-500 hover:scale-125' />
                        <GrDocker className='h-[2.6rem] w-[2.6rem] text-cyan-400 hover:scale-125' />
                    </div>
                </div>
                
            </div>
        </>
    )
}
