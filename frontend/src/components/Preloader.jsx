import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/data/content";

export const Preloader = ({ onDone }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 2100);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="preloader"
          className="fixed inset-0 z-[10000] bg-[#070709] flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={BRAND.logo}
              alt="JAWYX DEVS logo"
              className="w-56 sm:w-72 select-none"
              draggable="false"
            />
            <span className="sweep-bar absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-screen" />
          </motion.div>
          <motion.div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 h-px w-32 bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="block h-full bg-[#0066FF]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
