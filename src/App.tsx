import { Experience } from './pages/experience'
import { Footer } from './pages/footer'
import { Hero } from './pages/hero'
import { Nav } from './pages/nav'
import { Projects } from './pages/Projects'
import Skills from './pages/skills';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText,ScrollTrigger);
function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
