import { HERO } from "@/data/content";
import { FadeIn, RevealLines } from "@/components/RevealText";
import { scrollToId } from "@/lib/scroll";

export const FinalCTA = () => (
  <section data-testid="final-cta-section" className="relative py-32 sm:py-48 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] rounded-full bg-[radial-gradient(ellipse,rgba(0,102,255,0.09),transparent_65%)] blur-2xl" />
    </div>
    <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
      <h2 className="font-display font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
        <RevealLines
          lines={["LET'S BUILD", "SOMETHING", "EXTRAORDINARY."]}
          className="text-metal"
        />
      </h2>
      <FadeIn delay={0.35} className="mt-8 max-w-xl mx-auto">
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">{HERO.supportLine}</p>
      </FadeIn>
      <FadeIn delay={0.5} className="mt-12">
        <button
          data-testid="final-cta-start-project"
          onClick={() => scrollToId("#contact")}
          className="inline-flex items-center rounded-full bg-[#F8FAFC] text-[#070709] px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#0066FF] hover:text-white transition-colors duration-400"
        >
          Start a Project
        </button>
      </FadeIn>
    </div>
  </section>
);
