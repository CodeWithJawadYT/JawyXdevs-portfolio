import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MessageCircle, Instagram, ArrowUpRight, Loader2 } from "lucide-react";
import { CONTACT } from "@/data/content";
import { FadeIn, SectionLabel, RevealLines } from "@/components/RevealText";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHANNELS = [
  { id: "whatsapp", label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappUrl, icon: MessageCircle },
  { id: "email", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: Mail },
  { id: "instagram", label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramUrl, icon: Instagram },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — we'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#0E0F14] px-5 py-4 text-sm text-[#F8FAFC] placeholder:text-[#475569] focus:border-[rgba(0,102,255,0.5)] focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel chapter="07" label="Contact" />
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-metal">
              <RevealLines lines={["Start the", "conversation."]} />
            </h2>
            <div className="mt-12 space-y-4">
              {CHANNELS.map((c, i) => (
                <FadeIn key={c.id} delay={0.15 + i * 0.1}>
                  <a
                    data-testid={`contact-channel-${c.id}`}
                    href={c.href}
                    target={c.id === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0E0F14] px-6 py-5 hover:border-[rgba(0,102,255,0.4)] hover:bg-[#12141C] transition-colors duration-400"
                  >
                    <span className="flex items-center gap-4">
                      <c.icon size={18} className="text-[#64748B] transition-colors duration-300 group-hover:text-[#4d94ff]" strokeWidth={1.6} />
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[#64748B]">
                          {c.label}
                        </span>
                        <span className="block mt-1 text-sm text-[#F8FAFC]">{c.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#334155] transition-all duration-300 group-hover:text-[#4d94ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.25}>
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#12141C] p-8 sm:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block mb-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#64748B]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      data-testid="contact-input-name"
                      className={inputCls}
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                      maxLength={120}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block mb-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#64748B]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      data-testid="contact-input-email"
                      type="email"
                      className={inputCls}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      maxLength={254}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block mb-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#64748B]">
                    Project details
                  </label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-input-message"
                    rows={6}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={set("message")}
                    maxLength={5000}
                  />
                </div>
                <button
                  data-testid="contact-submit-button"
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-3 rounded-full bg-[#0066FF] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-white hover:bg-[#1a75ff] disabled:opacity-60 transition-colors duration-300"
                >
                  {sending && <Loader2 size={14} className="animate-spin" />}
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
