"use client";
import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleButtonPress = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 30) {
        // Scrolling down and past a threshold
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

    // Function to scroll to a specific section with id as a string
    const scrollToSection = (id:string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
      

  return (
    <>
      <div
        className={`fixed w-screen ml-[1rem] flex justify-self-center items-center content-center text-center bg-background space-x-4 justify-center z-50 pt-2 transition-transform duration-300 ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <h4
          className="inline scroll-m-20 base:text-base sm:text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          home
        </h4>
        <h4
          className="inline scroll-m-20 base:text-base sm:text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          about me
        </h4>
        <h4
          className="inline scroll-m-20 base:text-base sm:text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          projects
        </h4>
        <h4
          className="inline scroll-m-20 base:text-base sm:text-xl font-semibold tracking-tight hover:text-accent-hover cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          contact
        </h4>
        <Button variant="outline" className='items-center justify-center base:h-7 base:w-7 sm:h-9 sm:w-9 ' onClick={() => handleButtonPress()}>
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  );
}
