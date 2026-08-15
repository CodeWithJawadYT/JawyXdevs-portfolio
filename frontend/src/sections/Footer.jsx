import { BRAND, NAV_LINKS, CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Footer = () => (
  <footer data-testid="main-footer" className="relative border-t border-[rgba(255,255,255,0.07)] py-14">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
        <img src={BRAND.logo} alt="JAWYX DEVS" className="h-10 w-auto rounded self-start" />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                  onClick={() => scrollToId(l.href)}
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B] hover:text-white transition-colors duration-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-6">
          <a data-testid="footer-whatsapp" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] hover:text-[#4d94ff] transition-colors duration-300">
            WhatsApp
          </a>
          <a data-testid="footer-email" href={`mailto:${CONTACT.email}`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] hover:text-[#4d94ff] transition-colors duration-300">
            Email
          </a>
          <a data-testid="footer-instagram" href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] hover:text-[#4d94ff] transition-colors duration-300">
            Instagram
          </a>
        </div>
      </div>
      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-[#334155]">
        © 2026 JAWYX DEVS
      </p>
    </div>
  </footer>
);
