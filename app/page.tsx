import Navbar from "@/components/Navbar";
import Waves1Down from "@/assets/Waves1Down.jsx"
import Intro from "@/app/dashboard/Intro.jsx"
import AboutMe from "@/app/dashboard/AboutMe.jsx"
export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Waves1Down />
      <AboutMe />
    </>
  );
}
