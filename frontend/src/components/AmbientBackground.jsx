import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export const AmbientBackground = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.55]);

  if (reduced) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#070709]">
        <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.07),transparent_60%)]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 bg-[#070709] overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-[-25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.08),transparent_62%)] blur-3xl will-change-transform"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-30%] left-[-20%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.05),transparent_60%)] blur-3xl will-change-transform"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(14,15,20,0.4)_100%)]" />
    </div>
  );
};
