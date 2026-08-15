import { useRef } from "react";
import { Code2, Layers, Gauge, Sparkles, Globe, Cpu } from "lucide-react";
import { services } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";

const ICONS = { code: Code2, layers: Layers, gauge: Gauge, sparkles: Sparkles, globe: Globe, cpu: Cpu };

const ServiceBlock = ({ service, index }) => {
  const ref = useRef(null);
  const Icon = ICONS[service.icon] || Code2;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 4}deg) rotateY(${(px - 0.5) * 4}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <FadeIn delay={index * 0.08}>
      <div
        ref={ref}
        data-testid={`service-block-${service.id}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="light-follow group relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#12141C] p-8 sm:p-10 transition-[border-color,background-color,transform] duration-500 hover:border-[rgba(0,102,255,0.35)] hover:bg-[#171A24] will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[#CBD5E1] transition-all duration-500 group-hover:text-[#4d94ff] group-hover:border-[rgba(0,102,255,0.4)] group-hover:-translate-y-1">
            <Icon size={20} strokeWidth={1.6} />
          </span>
          <span className="font-mono text-xs text-[#334155]">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-8 font-display text-xl sm:text-2xl font-semibold text-[#F8FAFC] tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{service.description}</p>
        <span className="mt-6 block h-px w-0 bg-gradient-to-r from-[#0066FF] to-transparent transition-all duration-700 group-hover:w-2/3" />
      </div>
    </FadeIn>
  );
};

export const Services = () => (
  <section id="services" data-testid="services-section" className="relative py-28 sm:py-40">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <SectionLabel chapter="02" label="Services" />
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal">
          <RevealLines lines={["What we", "engineer."]} />
        </h2>
        <FadeIn delay={0.2}>
          <p className="max-w-xs text-sm text-[#64748B] leading-relaxed">
            Editable placeholder intro — real services will replace these blocks without touching the layout.
          </p>
        </FadeIn>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} service={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);
