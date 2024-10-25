"use client"
import React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function AboutMe() {
    return (
        <div className='z-10 relative text-center pt-12 sm:text-lg lg:text-xl base:hidden md-1:block'>
            <motion.h3
                className="scroll-m-20 text-2xl font-semibold tracking-tight bg-background"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={headerVariants}
            >
                About Me
            </motion.h3>
            <div className='flex justify-center items-center'>
                <motion.img
                    src='/images/newheadshot.png'
                    className='inline ml-3 w-1/6 h-1/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={imageVariants}
                />
                <motion.p
                    className="leading-7 [&:not(:first-child)]:mt-6 inline m-5 mr-28"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    variants={paragraphVariants}
                >
                    Software Engineer and Web Developer with experience at 
                    <a href="https://www.medstarhealth.org/innovation-and-research/medstar-health-research-institute">
                        <span className="leading-7 [&:not(:first-child)]:mt-6 inline text-accent-hover font-bold"> Medstar Health Research Institute</span>
                    </a>. 
                    I have a strong focus on continuous learning and hands-on project development. Currently pursuing academic excellence while 
                    actively building a solid foundation in software engineering principles. Eager to contribute to innovative teams, solve 
                    complex problems, and grow into a role where I can make a meaningful impact on product development and people.
                </motion.p>
            </div>
        </div>
    );
}
