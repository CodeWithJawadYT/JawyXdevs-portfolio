import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";

export const Skills = () => {
  const [active, setActive] = useState(skills[0]);

  return (
    <section id="skills" data-testid="skills-section" className="relative py-28 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel chapter="04" label="Technologies" />
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-6">
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal mb-12">
              <RevealLines lines={["The craft", "behind the work."]} />
            </h2>
            <ul className="divide-y divide-[rgba(255,255,255,0.06)]">
              {skills.map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.05}>
                  <li>
                    <button
                      data-testid={`skill-item-${s.id}`}
                      onMouseEnter={() => setActive(s)}
                      onFocus={() => setActive(s)}
                      onClick={() => setActive(s)}
                      className={`w-full flex items-center justify-between py-4 sm:py-5 text-left transition-all duration-300 ${
                        active?.id === s.id ? "translate-x-2" : "hover:translate-x-1"
                      }`}
                    >
                      <span
                        className={`font-display text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                          active?.id === s.id ? "text-[#4d94ff]" : "text-[#CBD5E1]"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span
                        className={`font-mono text-xs transition-colors duration-300 ${
                          active?.id === s.id ? "text-[#0066FF]" : "text-[#334155]"
                        }`}
                      >
                        {String(skills.indexOf(s) + 1).padStart(2, "0")}
                      </span>
                    </button>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-32 self-start hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 flex items-center justify-center">
              <span className="spin-slow absolute inset-0 rounded-full border border-[rgba(255,255,255,0.08)] [border-top-color:rgba(0,102,255,0.5)]" />
              <span className="spin-slow absolute inset-8 rounded-full border border-[rgba(255,255,255,0.06)] [border-bottom-color:rgba(203,213,225,0.4)] [animation-direction:reverse] [animation-duration:18s]" />
              <span className="absolute inset-24 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.12),transparent_70%)] blur-md" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={active?.id}
                  data-testid="skill-active-name"
                  className="relative font-display text-xl font-bold text-metal text-center px-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {active?.name}
                </motion.span>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={active?.id}
                data-testid="skill-active-blurb"
                className="mt-10 max-w-sm text-center text-sm text-[#64748B] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {active?.blurb}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
