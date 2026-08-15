import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const RevealLines = ({ lines, className = "", delay = 0, show }) => {
  const controlled = show !== undefined;
  return (
    <span>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block will-change-transform ${className}`}
            initial={{ y: "112%" }}
            {...(controlled
              ? { animate: show ? { y: 0 } : { y: "112%" } }
              : { whileInView: { y: 0 }, viewport: { once: true, margin: "-8%" } })}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const FadeIn = ({ children, className = "", delay = 0, y = 24, show }) => {
  const controlled = show !== undefined;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(controlled
        ? { animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-8%" } })}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

export const SectionLabel = ({ chapter, label }) => (
  <FadeIn className="flex items-center gap-4 mb-8 sm:mb-12">
    <span className="font-mono text-xs text-[#64748B] tracking-[0.3em]">{chapter}</span>
    <span className="h-px w-10 bg-[rgba(255,255,255,0.15)]" />
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
      {label}
    </span>
  </FadeIn>
);
