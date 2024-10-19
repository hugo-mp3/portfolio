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





export default function SkillsAndTools(){

    return(
        <>
            <div className='text-center relative pt-20 z-10'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Skills</h3>
                <div className='grid grid-cols-4 justify-items-center gap-x-1 gap-y-1 mb-10 mt-10 mr-32'>
                    <FaHtml5 className='h-[2.6rem] w-[2.6rem] text-red-500 hover:scale-150'/>
                    <FaCss3Alt className='h-[2.6rem] w-[2.6rem] text-cyan-500 hover:scale-150'/>
                    <FaReact className='h-[2.6rem] w-[2.6rem] text-cyan-400 hover:scale-150'/>
                    <FaPython className='h-[2.6rem] w-[2.6rem] text-amber-300 hover:scale-150'/>
                    <FaJava className='h-[2.6rem] w-[2.6rem] text-red-800 justify-self-end hover:scale-150'/>
                    <FaNode className='h-[2.6rem] w-[2.6rem] text-lime-500 justify-self-end hover:scale-150'/>
                    <FaWindows className='h-[2.6rem] w-[2.6rem] text-sky-400 justify-self-end hover:scale-150'/>
                    <FaLinux className='h-[2.6rem] w-[2.6rem] text-slate-500 justify-self-end hover:scale-150'/>
                    <FaGitAlt className='h-[2.6rem] w-[2.6rem] text-orange-600 hover:scale-150' />
                    <RiTailwindCssFill className='h-[2.6rem] w-[2.6rem] text-sky-300 hover:scale-150' />
                    <RiNextjsFill className='h-[2.6rem] w-[2.6rem] text-gray-800 dark:text-slate-100 hover:scale-150' />
                    <RiSupabaseFill className='h-[2.6rem] w-[2.6rem] text-green-500 hover:scale-150' />
                    <IoLogoJavascript className='h-[2.6rem] w-[2.6rem] text-yellow-400 justify-self-end hover:scale-150' />
                    <IoLogoGithub className='h-[2.6rem] w-[2.6rem] dark:text-gray-200 text-slate-900 justify-self-end hover:scale-150' />
                    <SiExpress className='h-[2.6rem] w-[2.6rem] dark:text-gray-50 text-slate-800 justify-self-end hover:scale-150' />
                    <SiFlask className='h-[2.6rem] w-[2.6rem] text-slate-500 justify-self-end hover:scale-150' />
                    <SiSqlite className='h-[2.6rem] w-[2.6rem] text-blue-400 hover:scale-150' />
                    <SiVite className='h-[2.6rem] w-[2.6rem] text-indigo-500 hover:scale-150' />
                    <SiChakraui className='h-[2.6rem] w-[2.6rem] text-green-300 hover:scale-150' />
                    <SiPostman className='h-[2.6rem] w-[2.6rem] text-orange-500 hover:scale-150' />
                    <SiShadcnui className='h-[2.6rem] w-[2.6rem] dark:text-gray-100 text-slate-950 justify-self-end hover:scale-150' />
                    <BiLogoPostgresql className='h-[2.6rem] w-[2.6rem] text-cyan-800 justify-self-end hover:scale-150' />
                    <DiMongodb className='h-[2.6rem] w-[2.6rem] text-green-500 justify-self-end hover:scale-150' />
                    <GrDocker className='h-[2.6rem] w-[2.6rem] text-cyan-400 justify-self-end hover:scale-150' />
                </div>
            </div>
        </>
    )
}