import Navbar from "@/components/Navbar";
import Waves1Down from "@/assets/Waves1Down.jsx"
import Intro from "@/app/dashboard/Intro.jsx"
import AboutMe from "@/app/dashboard/AboutMe.jsx"
import SkillsAndTools from "@/app/dashboard/SkillsAndTools.jsx"
import Projects from "@/app/dashboard/Projects.jsx"
export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Waves1Down />
      <AboutMe />
      <SkillsAndTools />
      <Projects />
    </>
  );
}
