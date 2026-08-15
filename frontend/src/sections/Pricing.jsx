import { Check } from "lucide-react";
import { pricing } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";
import { scrollToId } from "@/lib/scroll";

const PricingCard = ({ tier, index }) => (
  <FadeIn delay={index * 0.12} className="h-full">
    <div
      data-testid={`pricing-card-${tier.id}`}
      className={`relative h-full flex flex-col rounded-2xl border p-8 sm:p-10 transition-all duration-500 ${
        tier.recommended
          ? "border-[rgba(0,102,255,0.45)] bg-[#12141C] shadow-[0_0_60px_rgba(0,102,255,0.12)] lg:-translate-y-4"
          : "border-[rgba(255,255,255,0.08)] bg-[#0E0F14] hover:border-[rgba(255,255,255,0.16)]"
      }`}
    >
      {tier.recommended && (
        <span
          data-testid="pricing-recommended-badge"
          className="absolute -top-3.5 left-8 rounded-full bg-[#0066FF] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white font-semibold"
        >
          Recommended
        </span>
      )}
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]">{tier.name}</span>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-5xl sm:text-6xl font-extrabold text-metal">{tier.price}</span>
        <span className="font-mono text-xs text-[#64748B]">/ project</span>
      </div>
      <p className="mt-5 text-sm text-[#94A3B8] leading-relaxed">{tier.description}</p>
      <span className="my-8 h-px w-full bg-[rgba(255,255,255,0.07)]" />
      <ul className="space-y-4 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[#94A3B8]">
            <Check size={15} className={`mt-0.5 shrink-0 ${tier.recommended ? "text-[#4d94ff]" : "text-[#475569]"}`} />
            {f}
          </li>
        ))}
      </ul>
      <button
        data-testid={`pricing-cta-${tier.id}`}
        onClick={() => scrollToId("#contact")}
        className={`mt-10 w-full rounded-full py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 ${
          tier.recommended
            ? "bg-[#0066FF] text-white hover:bg-[#1a75ff]"
            : "border border-[rgba(255,255,255,0.18)] text-white hover:border-[#0066FF] hover:bg-[rgba(0,102,255,0.08)]"
        }`}
      >
        Start a Project
      </button>
    </div>
  </FadeIn>
);

export const Pricing = () => (
  <section id="pricing" data-testid="pricing-section" className="relative py-28 sm:py-40">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <SectionLabel chapter="06" label="Pricing" />
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-24">
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal">
          <RevealLines lines={["Transparent", "investment."]} />
        </h2>
        <FadeIn delay={0.2}>
          <p className="max-w-xs text-sm text-[#64748B] leading-relaxed">
            Feature lists are editable placeholders — prices are exact.
          </p>
        </FadeIn>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 lg:pt-4">
        {pricing.map((t, i) => (
          <PricingCard key={t.id} tier={t} index={i} />
        ))}
      </div>
    </div>
  </section>
);
