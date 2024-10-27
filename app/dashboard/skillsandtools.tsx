"use client"
import React, { useState } from 'react';
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
    onClick: () => void;      // Function to handle click
    open: boolean;            // Tooltip visibility state
    setOpen: (open: boolean) => void; // Function to set tooltip visibility
}

// Skill item component using forwardRef for ref handling
const SkillItem = React.forwardRef<HTMLDivElement, SkillItemProps>(({ icon: Icon, tooltipText, color, onClick, open, setOpen }, ref) => (
    <TooltipProvider>
        <Tooltip open={open} onOpenChange={setOpen} delayDuration={30}>
            <TooltipTrigger asChild>
                <div
                    ref={ref}
                    onClick={onClick}
                    onMouseLeave={() => setOpen(false)} // Hide tooltip on mouse leave
                >
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

    // Array to manage tooltip visibility for each skill
    const [tooltipOpen, setTooltipOpen] = useState<boolean[]>(Array(24).fill(false));

    // Function to handle the icon click
    const handleIconClick = (index: number) => {
        // Close other tooltips and toggle the clicked one
        setTooltipOpen((prev) => prev.map((open, i) => (i === index ? !open : false)));
    };

    const skills = [
        { icon: FaHtml5, tooltipText: "HTML5", color: "text-red-500" },
        { icon: FaCss3Alt, tooltipText: "CSS3", color: "text-cyan-500" },
        { icon: FaReact, tooltipText: "React.js", color: "text-cyan-400" },
        { icon: FaPython, tooltipText: "Python", color: "text-amber-300" },
        { icon: FaJava, tooltipText: "Java", color: "text-red-800" },
        { icon: FaNode, tooltipText: "Node.js", color: "text-lime-500" },
        { icon: FaWindows, tooltipText: "Windows", color: "text-sky-400" },
        { icon: FaLinux, tooltipText: "Linux", color: "text-slate-500" },
        { icon: FaGitAlt, tooltipText: "Git", color: "text-orange-600" },
        { icon: RiTailwindCssFill, tooltipText: "TailwindCSS", color: "text-sky-300" },
        { icon: RiNextjsFill, tooltipText: "Next.js", color: "text-gray-800 dark:text-slate-100" },
        { icon: RiSupabaseFill, tooltipText: "Supabase", color: "text-green-500" },
        { icon: IoLogoJavascript, tooltipText: "JavaScript", color: "text-yellow-400" },
        { icon: IoLogoGithub, tooltipText: "GitHub", color: "text-slate-900 dark:text-gray-200" },
        { icon: SiExpress, tooltipText: "Express.js", color: "text-slate-800 dark:text-gray-50" },
        { icon: SiFlask, tooltipText: "Flask", color: "text-slate-500" },
        { icon: SiSqlite, tooltipText: "SQLite", color: "text-blue-400" },
        { icon: SiVite, tooltipText: "Vite", color: "text-violet-400" },
        { icon: SiChakraui, tooltipText: "Chakra UI", color: "text-teal-400" },
        { icon: SiPostman, tooltipText: "Postman", color: "text-orange-500" },
        { icon: SiShadcnui, tooltipText: "ShadCN", color: "text-gray-700 dark:text-slate-200" },
        { icon: BiLogoPostgresql, tooltipText: "PostgreSQL", color: "text-sky-800" },
        { icon: DiMongodb, tooltipText: "MongoDB", color: "text-green-600" },
        { icon: GrDocker, tooltipText: "Docker", color: "text-sky-400" },
    ];

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
                        {skills.map((skill, index) => (
                            <SkillItem
                                key={index}
                                icon={skill.icon}
                                tooltipText={skill.tooltipText}
                                color={skill.color}
                                onClick={() => handleIconClick(index)} // Pass index to handleIconClick
                                open={tooltipOpen[index]} // Use individual state
                                setOpen={(open) => setTooltipOpen(prev => prev.map((o, i) => (i === index ? open : o)))} // Update individual state
                            />
                        ))}
                    </div>
                </motion.div>                
            </div>
        </>
    )
}
