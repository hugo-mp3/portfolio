"use client"
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
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

// Define the props type for SkillItem
interface SkillItemProps {
    icon: React.ElementType; // This allows passing a React component as an icon
    tooltipText: string;      // Tooltip text
    color: string;
}

// Skill item component using forwardRef for ref handling
const SkillItem = React.forwardRef<HTMLDivElement, SkillItemProps>(({ icon: Icon, tooltipText, color }, ref) => (
    <TooltipProvider>
        <Tooltip delayDuration={30}>
            <TooltipTrigger asChild>
                <div ref={ref}>
                    <Icon className={`h-[2.6rem] w-[2.6rem] ${color} hover:scale-125`} />
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">{tooltipText}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
));

SkillItem.displayName = 'SkillItem'; // Set display name for debugging


export default function SkillsAndTools(){

    return(
        <>
            <div className='text-center relative'>
                <motion.h3
                    className='scroll-m-20 text-2xl font-semibold tracking-tight border-t-2 border-b-2 border-accent-border'
                    initial='hidden'
                    whileInView='visible'
                    viewport = {{ amount: 0.2 }}
                    transition= {{ duration: 0.3 }}
                    variants={itemVariants}
                >
                    Skills
                </motion.h3>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3}}
                    variants={itemVariants}
                    className='base:ml-8 base:mr-8 sm:ml-14 sm:mr-14 md:ml-28 md:mr-28 md-1:ml-40 md-1:mr-40 lg:ml-56 lg:mr-56'
                >
                    <div className='grid base:grid-cols-4 base-1:grid-cols-6 sm:grid-cols-8 justify-items-center gap-x-0 gap-y-4 mb-10 mt-10'>
                        {/* html5 icon/tooltip */}
                        <SkillItem icon={FaHtml5} tooltipText="HTML5" color="text-red-500" />
                        {/* CSS3 icon/tooltip */}
                        <SkillItem icon={FaCss3Alt} tooltipText="CSS3" color="text-cyan-500" />
                        
                        {/* React icon/tooltip */}
                        <SkillItem icon={FaReact} tooltipText="React.js" color="text-cyan-400" />
                        
                        {/* Python icon/tooltip */}
                        <SkillItem icon={FaPython} tooltipText="Python" color="text-amber-300" />
                        
                        {/* Java icon/tooltip */}
                        <SkillItem icon={FaJava} tooltipText="Java" color="text-red-800" />
                        
                        {/* Node icon/tooltip */}
                        <SkillItem icon={FaNode} tooltipText="Node.js" color="text-lime-500" />
                        
                        {/* Windows icon/tooltip */}
                        <SkillItem icon={FaWindows} tooltipText="Windows" color="text-sky-400" />
                        
                        {/* Linux icon/tooltip */}
                        <SkillItem icon={FaLinux} tooltipText="Linux" color="text-slate-500" />
                        
                        {/* Git icon/tooltip */}
                        <SkillItem icon={FaGitAlt} tooltipText="Git" color="text-orange-600" />
                        
                        {/* TailwindCSS icon/tooltip */}
                        <SkillItem icon={RiTailwindCssFill} tooltipText="TailwindCSS" color="text-sky-300" />
                        
                        {/* Next.js icon/tooltip */}
                        <SkillItem icon={RiNextjsFill} tooltipText="Next.js" color="text-gray-800 dark:text-slate-100" />
                        
                        {/* Supabase icon/tooltip */}
                        <SkillItem icon={RiSupabaseFill} tooltipText="Supabase" color="text-green-500" />
                        
                        {/* JavaScript icon/tooltip */}
                        <SkillItem icon={IoLogoJavascript} tooltipText="JavaScript" color="text-yellow-400" />
                        
                        {/* GitHub icon/tooltip */}
                        <SkillItem icon={IoLogoGithub} tooltipText="GitHub" color="text-slate-900 dark:text-gray-200" />
                        
                        {/* Express icon/tooltip */}
                        <SkillItem icon={SiExpress} tooltipText="Express.js" color="text-slate-800 dark:text-gray-50" />
                        
                        {/* Flask icon/tooltip */}
                        <SkillItem icon={SiFlask} tooltipText="Flask" color="text-slate-500" />
                        
                        {/* SQLite icon/tooltip */}
                        <SkillItem icon={SiSqlite} tooltipText="SQLite" color="text-blue-400" />
                        
                        {/* Vite icon/tooltip */}
                        <SkillItem icon={SiVite} tooltipText="Vite" color="text-violet-400" />
                        
                        {/* Chakra UI icon/tooltip */}
                        <SkillItem icon={SiChakraui} tooltipText="Chakra UI" color="text-teal-400" />
                        
                        {/* Postman icon/tooltip */}
                        <SkillItem icon={SiPostman} tooltipText="Postman" color="text-orange-500" />
                        
                        {/* ShadCN UI icon/tooltip */}
                        <SkillItem icon={SiShadcnui} tooltipText="ShadCN" color="text-gray-700 dark:text-slate-200" />
                        
                        {/* PostgreSQL icon/tooltip */}
                        <SkillItem icon={BiLogoPostgresql} tooltipText="PostgreSQL" color="text-sky-800" />
                        
                        {/* MongoDB icon/tooltip */}
                        <SkillItem icon={DiMongodb} tooltipText="MongoDB" color="text-green-600" />
                        
                        {/* Docker icon/tooltip */}
                        <SkillItem icon={GrDocker} tooltipText="Docker" color="text-sky-400" />
                    </div>
                </motion.div>                
            </div>
        </>
    )
}
