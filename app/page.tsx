import Navbar from "@/components/Navbar";
import Waves1Down from "@/assets/Waves1Down.jsx"
import Intro from "@/app/dashboard/intro.jsx"
import AboutMe from "@/app/dashboard/aboutme.jsx"
import SkillsAndTools from "@/app/dashboard/skillsandtools.jsx"
import Projects from "@/app/dashboard/projects.jsx"
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
