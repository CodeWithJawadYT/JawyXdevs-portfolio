import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" data-testid="process-section" className="relative py-28 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel chapter="05" label="Process" />
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal mb-16 sm:mb-24">
          <RevealLines lines={["Six deliberate", "stages."]} />
        </h2>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          <span className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.07)]" />
          <motion.span
            className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0066FF] to-[#00F0FF] origin-top"
            style={{ scaleY }}
          />
          <ul className="space-y-16 sm:space-y-24">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={0.05}>
                <li
                  data-testid={`process-step-${step.num}`}
                  className={`relative flex items-center gap-8 pl-14 sm:pl-0 ${
                    i % 2 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="absolute left-[13px] sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#0066FF] bg-[#070709]" />
                  <div className={`sm:w-1/2 ${i % 2 ? "sm:pl-0 sm:pr-14" : "sm:pl-14 sm:ml-auto"}`}>
                    <span className="font-mono text-xs text-[#0066FF] tracking-[0.3em]">{step.num}</span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-[0.08em] text-metal">
                      {step.title}
                    </h3>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
