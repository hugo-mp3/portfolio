"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ReaderIcon } from "@radix-ui/react-icons";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

const popUpVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export default function Intro() {
    return (
        <>
            <div className="flex items-center justify-start space-x-10 pt-12">
                <div className="ml-10 pb-10">
                    <motion.p
                        className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground ml-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.3 }}
                        variants={itemVariants}
                    >
                        Howdy! I am
                    </motion.p>
                    <motion.h1
                        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        variants={itemVariants}
                    >
                        Hugo Manrique-Pinell
                    </motion.h1>
                    <motion.h2
                        className="scroll-m-20 w-30 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        variants={itemVariants}
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.a
                        href="/HugompCV.pdf"
                        download="Hugo_Resume.pdf"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        variants={itemVariants}
                    >
                        <Button>
                            <ReaderIcon className="mr-2 h-4 w-4" /> Download Resume
                        </Button>
                    </motion.a>
                </div>
                {/* New DotLottie animation implementation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    variants={popUpVariants}
                >
                    <DotLottieReact
                        src="https://lottie.host/3bc940a1-acb5-4560-8cd5-c6ed3809eaa3/T8tlf8WyPI.json"
                        loop
                        autoplay
                        style={{ height: '300px', width: '300px' }}
                    />
                </motion.div>
            </div>
        </>
    );
}
