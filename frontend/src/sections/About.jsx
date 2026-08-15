import { ABOUT, STATS } from "@/data/content";
import { RevealLines, FadeIn, SectionLabel } from "@/components/RevealText";

export const About = () => (
  <section id="about" data-testid="about-section" className="relative py-28 sm:py-40">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <SectionLabel chapter={ABOUT.chapter} label={ABOUT.label} />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal">
            <RevealLines lines={["Quality through", "restraint."]} />
          </h2>
          <FadeIn delay={0.2} className="mt-8 max-w-xl">
            <p data-testid="about-placeholder-copy" className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              {ABOUT.body}
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10 border-l border-[rgba(255,255,255,0.08)] pl-6 lg:pl-10">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={0.15 + i * 0.12}>
                <div data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-metal">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#64748B]">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
