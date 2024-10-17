"use client"
import { Button } from "./ui/button";
import React, {useState,useEffect} from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import Link from "next/link";

export default function Navbar(){

    const { theme,setTheme } = useTheme();

    const handleButtonPress = () => {
        if (theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    };

    return(
        <>
            <div className='flex space-x-4 justify-center pt-3'>
                <h4 className="inline scroll-m-20 text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer">home</h4>
                <h4 className="inline scroll-m-20 text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer">about me</h4>
                <h4 className="inline scroll-m-20 text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer">projects</h4>
                <h4 className="inline scroll-m-20 text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer">contact</h4>
                <Button variant="outline" size="icon" onClick={() => handleButtonPress()}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </>
    )
}