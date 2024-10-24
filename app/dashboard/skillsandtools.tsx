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
            <div className='text-center relative z-5 '>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-t-2 border-b-2 border-accent-border">Skills</h3>
                <div className='sm:ml-14 sm:mr-14 md:ml-28 md:mr-28 md-1:ml-40 md-1:mr-40 lg:ml-56 lg:mr-56'>
                    <div className='grid grid-cols-8 justify-items-center gap-x-0 gap-y-4 mb-10 mt-10'>
                        {/* html5 icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaHtml5 className='h-[2.6rem] w-[2.6rem] text-red-500 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">HTML5</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* CSS3 icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaCss3Alt className='h-[2.6rem] w-[2.6rem] text-cyan-500 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">CSS3</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* React icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaReact className='h-[2.6rem] w-[2.6rem] text-cyan-400 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">React.js</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Python icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaPython className='h-[2.6rem] w-[2.6rem] text-amber-300 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Python</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Java icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaJava className='h-[2.6rem] w-[2.6rem] text-red-800 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Java</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Node icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaNode className='h-[2.6rem] w-[2.6rem] text-lime-500 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Node.js</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Windows icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaWindows className='h-[2.6rem] w-[2.6rem] text-sky-400 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Windows</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Linux icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaLinux className='h-[2.6rem] w-[2.6rem] text-slate-500 hover:scale-125'/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Linux</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Git icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <FaGitAlt className='h-[2.6rem] w-[2.6rem] text-orange-600 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Git</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* TailwindCSS icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <RiTailwindCssFill className='h-[2.6rem] w-[2.6rem] text-sky-300 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">TailwindCSS</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Nextjs icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <RiNextjsFill className='h-[2.6rem] w-[2.6rem] text-gray-800 dark:text-slate-100 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Next.js</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Supabase icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <RiSupabaseFill className='h-[2.6rem] w-[2.6rem] text-green-500 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Supabase</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* JavaScript icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <IoLogoJavascript className='h-[2.6rem] w-[2.6rem] text-yellow-400 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">JavaScript</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Github icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <IoLogoGithub className='h-[2.6rem] w-[2.6rem] dark:text-gray-200 text-slate-900 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Express icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiExpress className='h-[2.6rem] w-[2.6rem] dark:text-gray-50 text-slate-800 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Express.js</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Flask icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiFlask className='h-[2.6rem] w-[2.6rem] text-slate-500 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Flask</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* SQLite icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiSqlite className='h-[2.6rem] w-[2.6rem] text-blue-400 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">SQLite</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Vite icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiVite className='h-[2.6rem] w-[2.6rem] text-violet-400 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Vite</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Chakra UI icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiChakraui className='h-[2.6rem] w-[2.6rem] text-teal-400 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Chakra UI</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Postman icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiPostman className='h-[2.6rem] w-[2.6rem] text-orange-500 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Postman</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* ShadCN UI icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <SiShadcnui className='h-[2.6rem] w-[2.6rem] text-gray-700 dark:text-slate-200 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">ShadCN</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* PostgreSQL icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <BiLogoPostgresql className='h-[2.6rem] w-[2.6rem] text-sky-800 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">PostgreSQL</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* MongoDB icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <DiMongodb className='h-[2.6rem] w-[2.6rem] text-green-600 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">MongoDB</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {/* Docker icon/tooltip */}
                        <TooltipProvider>
                            <Tooltip delayDuration={30}>
                                <TooltipTrigger asChild>
                                    <GrDocker className='h-[2.6rem] w-[2.6rem] text-sky-400 hover:scale-125' />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Docker</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                
            </div>
        </>
    )
}
