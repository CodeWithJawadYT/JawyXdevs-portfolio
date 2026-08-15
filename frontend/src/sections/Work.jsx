import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";

const ProjectRow = ({ project, index, onOpen }) => (
  <FadeIn delay={0.05}>
    <article
      data-testid={`project-card-${project.id}`}
      data-cursor="view"
      onClick={() => onOpen(project)}
      className={`group grid lg:grid-cols-12 gap-6 lg:gap-12 items-center py-12 sm:py-16 border-t border-[rgba(255,255,255,0.07)] ${
        index % 2 ? "lg:[&>div:first-child]:order-2" : ""
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
    >
      <div className="lg:col-span-7">
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] aspect-[16/10]"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,9,0.5)] to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-20" />
        </motion.div>
      </div>
      <div className="lg:col-span-5">
        <span className="font-mono text-xs text-[#334155]">/{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC] transition-colors duration-300 group-hover:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed max-w-md">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#94A3B8]"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748B] transition-colors duration-300 group-hover:text-[#4d94ff]">
          Open Case Study
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  </FadeIn>
);

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      data-testid="project-detail-overlay"
      className="fixed inset-0 z-[200] bg-[rgba(7,7,9,0.92)] backdrop-blur-xl overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="min-h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-4xl">
          <div className="flex justify-end mb-4">
            <button
              data-testid="project-detail-close"
              onClick={onClose}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[rgba(255,255,255,0.15)] text-white hover:border-[#0066FF] hover:bg-[rgba(0,102,255,0.1)] transition-colors duration-300"
              aria-label="Close project detail"
            >
              <X size={18} />
            </button>
          </div>
          <motion.div
            layoutId={`project-image-${project.id}`}
            className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] aspect-[16/9]"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-metal">
              {project.title}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#94A3B8]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl ? (
                <a
                  data-testid="project-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] text-[#070709] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold"
                >
                  Live Site <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.1)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                  Live link coming soon
                </span>
              )}
              {project.githubUrl && (
                <a
                  data-testid="project-github-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white"
                >
                  <Github size={14} /> Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Work = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="work" data-testid="work-section" className="relative py-28 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel chapter="03" label="Selected Work" />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal">
            <RevealLines lines={["Work that", "speaks quietly."]} />
          </h2>
          <FadeIn delay={0.2}>
            <p className="max-w-xs text-sm text-[#64748B] leading-relaxed">
              Editable placeholder projects — swap in real case studies in src/data/content.js.
            </p>
          </FadeIn>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectDetail project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
