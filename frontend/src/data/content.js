/* ============================================================
   JAWYX DEVS — ALL EDITABLE CONTENT LIVES HERE.
   Placeholder entries are clearly marked. Edit values below;
   layouts adapt automatically — no component changes needed.
   ============================================================ */

export const BRAND = {
  name: "JAWYX DEVS",
  tagline: "Elite Web Engineering Studio",
  logo: "/assets/jawyx-logo-crop.png",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headlineLines: [
    "Crafting High-Performance",
    "Digital Experiences That",
    "Scale Brands Worldwide.",
  ],
  supportLine:
    "We build 3D, responsive, SEO-optimized, ultra-fast web platforms that turn visitors into loyal clients.",
};

export const STATS = [
  { label: "Projects Completed", value: "20+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Support", value: "24/7" },
];

/* PLACEHOLDER — replace with the real JAWYX DEVS story */
export const ABOUT = {
  chapter: "01",
  label: "About",
  heading: "Quality through restraint.",
  body: "[ Editable placeholder — replace with the real JAWYX DEVS story. ] This paragraph is intentionally a placeholder. Drop the studio's About copy here in src/data/content.js and the editorial layout will adapt automatically.",
};

/* PLACEHOLDER SERVICES — edit titles, descriptions & icons here.
   Icons: "code" | "layers" | "gauge" | "sparkles" | "globe" | "cpu" */
export const services = [
  {
    id: "service-1",
    title: "Placeholder Service 01",
    description:
      "Editable placeholder — a short one-to-two sentence description of this service goes here.",
    icon: "code",
  },
  {
    id: "service-2",
    title: "Placeholder Service 02",
    description:
      "Editable placeholder — a short one-to-two sentence description of this service goes here.",
    icon: "layers",
  },
  {
    id: "service-3",
    title: "Placeholder Service 03",
    description:
      "Editable placeholder — a short one-to-two sentence description of this service goes here.",
    icon: "gauge",
  },
  {
    id: "service-4",
    title: "Placeholder Service 04",
    description:
      "Editable placeholder — a short one-to-two sentence description of this service goes here.",
    icon: "sparkles",
  },
];

/* PLACEHOLDER PROJECTS — edit titles, copy, images & links here. */
export const projects = [
  {
    id: "project-1",
    title: "Placeholder Project 01",
    description:
      "Editable placeholder — replace with a real case-study summary describing the challenge, the build and the result.",
    image:
      "https://images.unsplash.com/photo-1707567019592-a05a41cc0b52?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    technologies: ["Placeholder Tech", "Placeholder Tech", "Placeholder Tech"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "project-2",
    title: "Placeholder Project 02",
    description:
      "Editable placeholder — replace with a real case-study summary describing the challenge, the build and the result.",
    image:
      "https://images.unsplash.com/photo-1709625862266-014ef072fd93?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    technologies: ["Placeholder Tech", "Placeholder Tech"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "project-3",
    title: "Placeholder Project 03",
    description:
      "Editable placeholder — replace with a real case-study summary describing the challenge, the build and the result.",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    technologies: ["Placeholder Tech", "Placeholder Tech", "Placeholder Tech"],
    liveUrl: "",
    githubUrl: "",
  },
];

/* PLACEHOLDER SKILLS — names drawn from the studio's stated stack.
   Edit names & blurbs here until the final list is supplied. */
export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "React Three Fiber",
  "GSAP",
  "Framer Motion",
  "Tailwind CSS",
].map((name, i) => ({
  id: `skill-${i + 1}`,
  name,
  blurb: `Editable placeholder blurb for ${name} — describe how JAWYX DEVS applies it, in src/data/content.js.`,
}));

export const PROCESS_STEPS = [
  { num: "01", title: "DISCOVER" },
  { num: "02", title: "PLAN" },
  { num: "03", title: "DESIGN" },
  { num: "04", title: "DEVELOP" },
  { num: "05", title: "TEST" },
  { num: "06", title: "LAUNCH" },
];

/* Prices & descriptions are confirmed and non-negotiable.
   Feature bullets are PLACEHOLDERS — edit the arrays below. */
export const pricing = [
  {
    id: "starter",
    name: "Starter",
    price: "$149",
    recommended: false,
    description: "For simple professional websites and landing pages.",
    features: [
      "Single landing page or up to 3 pages",
      "Clean, responsive mobile-first design",
      "Basic SEO setup & fast loading",
      "WhatsApp & email contact integration",
      "1 round of revisions",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$299",
    recommended: true,
    description:
      "For businesses that need a polished, responsive and modern website.",
    features: [
      "Up to 6 custom-designed pages",
      "Smooth animations & modern motion design",
      "Full SEO optimization & speed tuning",
      "Working contact form with database storage",
      "3 rounds of revisions",
      "2 weeks of post-launch support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$499",
    recommended: false,
    description:
      "For clients who want a premium, highly interactive and advanced website experience.",
    features: [
      "Fully bespoke design, unlimited sections",
      "Interactive 3D experiences & cinematic motion",
      "Advanced performance, SEO & accessibility",
      "Custom features — dashboards, CMS, integrations",
      "Priority delivery & direct collaboration",
      "30 days of post-launch support & maintenance",
    ],
  },
];

export const CONTACT = {
  email: "jawyxdevs@gmail.com",
  whatsapp: "+92 315 1082775",
  whatsappUrl: "https://wa.me/923151082775",
  instagram: "@jawyxdevs",
  instagramUrl: "https://instagram.com/jawyxdevs",
};

export const MARQUEE_ITEMS = [
  "3D Experiences",
  "Responsive",
  "SEO-Optimized",
  "Ultra-Fast",
  "Elite Web Engineering",
];
