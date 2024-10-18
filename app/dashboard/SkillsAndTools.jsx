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
            <div className='text-center relative pt-44'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Skills</h3>
                <div className='grid grid-cols-4 justify-items-center gap-x-2 gap-y-8 mb-10 mt-10 mr-20 ml-20'>
                    <FaHtml5 className='h-[2.6rem] w-[2.6rem] text-red-500'/>
                    <FaCss3Alt className='h-[2.6rem] w-[2.6rem] text-cyan-500'/>
                    <FaReact />
                    <FaPython />
                    <FaJava />
                    <FaNode />
                    <FaWindows />
                    <FaLinux />
                </div>
            </div>
        </>
    )
}