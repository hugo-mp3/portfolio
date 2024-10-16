"use client"
import { Button } from "./ui/button";
import React, {useState,useEffect} from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

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
            <Button variant="outline" size="icon" onClick={() => handleButtonPress()}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    )
}