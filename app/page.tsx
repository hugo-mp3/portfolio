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
      <section id='home'>
        <Intro />
      </section>      
      <Waves1Down />
      <section id='about'>
        <div className='bg-abovebackgroundsvg lg:bg-contain sm:bg-cover'>
          <AboutMe />
        </div>
      </section>
      <SkillsAndTools />
      <div className='bg-backgroundsvg' style={{ backgroundPosition: 'center 20px' }}>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <div className='h-5'></div>
      </div>
    </>
  );
}
