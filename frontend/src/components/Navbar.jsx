import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Navbar = ({ ready }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        data-testid="main-navbar"
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 sm:px-6"
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <nav
          className={`w-full max-w-6xl flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "mt-3 px-4 sm:px-5 py-2 bg-[rgba(7,7,9,0.82)] border-[rgba(255,255,255,0.1)] backdrop-blur-xl"
              : "mt-5 px-5 sm:px-7 py-3 bg-[rgba(7,7,9,0.35)] border-[rgba(255,255,255,0.06)] backdrop-blur-md"
          }`}
        >
          <button
            data-testid="nav-logo"
            onClick={() => go("#home")}
            className="flex items-center shrink-0"
            aria-label="JAWYX DEVS — home"
          >
            <img
              src={BRAND.logo}
              alt="JAWYX DEVS"
              className={`transition-all duration-500 ${scrolled ? "h-8" : "h-9"} w-auto rounded`}
            />
          </button>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#94A3B8] hover:text-white transition-colors duration-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-cta-start-project"
              onClick={() => go("#contact")}
              className="hidden sm:inline-flex items-center rounded-full border border-[rgba(0,102,255,0.5)] bg-[rgba(0,102,255,0.08)] px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white hover:bg-[#0066FF] hover:border-[#0066FF] transition-colors duration-300"
            >
              Start a Project
            </button>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-1.5"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[99] bg-[rgba(7,7,9,0.97)] backdrop-blur-xl flex flex-col justify-center px-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ul className="space-y-6">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    onClick={() => go(l.href)}
                    className="font-display text-3xl font-bold text-metal uppercase tracking-tight"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.button
              data-testid="mobile-nav-cta"
              onClick={() => go("#contact")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 self-start rounded-full bg-[#0066FF] px-8 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white"
            >
              Start a Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
