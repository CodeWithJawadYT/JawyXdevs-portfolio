import { MARQUEE_ITEMS } from "@/data/content";

export const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative border-y border-[rgba(255,255,255,0.07)] py-5 sm:py-6 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center shrink-0">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display text-lg sm:text-xl font-medium uppercase tracking-[0.2em] text-[#64748B] whitespace-nowrap px-8">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
