import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster } from "sonner";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Work } from "@/sections/Work";
import { Skills } from "@/sections/Skills";
import { Process } from "@/sections/Process";
import { Pricing } from "@/sections/Pricing";
import { FinalCTA } from "@/sections/FinalCTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      if (ready) window.__lenis.start();
      else window.__lenis.stop();
    }
    document.body.style.overflow = ready ? "" : "hidden";
  }, [ready]);

  return (
    <div className="App grain relative">
      <Preloader onDone={() => setReady(true)} />
      <CustomCursor />
      <AmbientBackground />
      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Skills />
        <Process />
        <Pricing />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
