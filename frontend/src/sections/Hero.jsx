import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO, BRAND } from "@/data/content";
import { RevealLines, FadeIn } from "@/components/RevealText";
import { scrollToId } from "@/lib/scroll";

const Hero3D = lazy(() => import("@/components/Hero3D"));

export const Hero = ({ ready }) => {
  const [show3D, setShow3D] = useState(false);
  const [quality, setQuality] = useState("high");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const mobile = window.innerWidth < 768;
    setQuality(mobile ? "low" : "high");
    const t = setTimeout(() => setShow3D(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none opacity-40 md:opacity-100">
        {show3D && (
          <Suspense fallback={null}>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <Hero3D quality={quality} />
            </motion.div>
          </Suspense>
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="max-w-4xl">
          <FadeIn show={ready} delay={0.15} className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
              {BRAND.tagline}
            </span>
          </FadeIn>

          <h1 className="font-display font-extrabold tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-6xl">
            <RevealLines lines={HERO.headlineLines} show={ready} delay={0.3} className="text-metal" />
          </h1>

          <FadeIn show={ready} delay={0.8} className="mt-8 max-w-xl">
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              {HERO.supportLine}
            </p>
          </FadeIn>

          <FadeIn show={ready} delay={1} className="mt-12 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-cta-view-work"
              onClick={() => scrollToId("#work")}
              className="group inline-flex items-center gap-3 rounded-full bg-[#F8FAFC] text-[#070709] px-7 sm:px-8 py-3.5 font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#CBD5E1] transition-colors duration-300"
            >
              View My Work
              <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <button
              data-testid="hero-cta-work-together"
              onClick={() => scrollToId("#contact")}
              className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.2)] px-7 sm:px-8 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white hover:border-[#0066FF] hover:bg-[rgba(0,102,255,0.08)] transition-colors duration-300"
            >
              Let&apos;s Work Together
            </button>
          </FadeIn>
        </div>
      </div>

      <FadeIn
        show={ready}
        delay={1.4}
        className="absolute bottom-8 left-6 sm:left-10 lg:left-16 flex items-center gap-3"
      >
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-[#334155] to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748B]">
          Scroll
        </span>
      </FadeIn>
    </section>
  );
};
