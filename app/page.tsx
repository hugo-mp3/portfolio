import Navbar from "@/components/Navbar";
import Waves1Down from "@/assets/Waves1Down"
import Intro from "@/app/dashboard/intro"
import AboutMe from "@/app/dashboard/aboutme"
import SkillsAndTools from "@/app/dashboard/skillsandtools"
import Projects from "@/app/dashboard/projects"
import Contact from "@/app/dashboard/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Waves1Down />
      <AboutMe />
      <SkillsAndTools />
      <Projects />
      <Contact />
    </>
  );
}
