# JAWYX DEVS — Portfolio Website PRD

## Original Problem Statement
Build a complete, production-ready premium portfolio website for JAWYX DEVS (Elite Web Engineering Studio). Dark/metallic/electric-blue brand identity from the official logo. Minimal interface + exceptional motion + purposeful 3D. Confirmed content only (hero copy, stats 0+/0%/24/7, contact channels, exact pricing $149/$299-RECOMMENDED/$499). Projects/Services/About/Skills/pricing-features are clearly-marked editable placeholders — never invented. Awwwards-level quality bar.

## User Choices
- React (CRA) stack accepted by default (Next.js not available in env)
- Contact: links + working contact form storing inquiries in MongoDB
- CTAs default to scrolling to Contact section

## Architecture
- **Frontend**: React 19 (CRA + craco), Tailwind, framer-motion, Lenis + GSAP ScrollTrigger, three.js + @react-three/fiber + @react-three/drei (installed with --ignore-engines due to node 20)
- **Backend**: FastAPI — POST /api/contact (validates name/email/message), GET /api/contact (list, newest first)
- **DB**: MongoDB `contact_messages` collection (uuid ids, ISO timestamps)
- **All editable content**: `/app/frontend/src/data/content.js` (single source — services, projects, skills, pricing features, about copy, contact, marquee)
- Logo assets: `/app/frontend/public/assets/jawyx-logo.jpg` (original, favicon/OG) and `jawyx-logo-crop.png` (auto-trimmed wordmark for nav/footer/preloader)

## Implemented (June 2026 — MVP)
- Preloader: logo + metallic light sweep + progress bar, curtain exit; page animations gated until done
- Floating pill navbar (compacts on scroll), mobile fullscreen menu with staggered reveal
- Kinetic hero: masked line-by-line headline reveal, metallic gradient type, ONE interactive R3F torus-knot (chrome material, Lightformer env, blue rim light, mouse-reactive rotation + light), two CTAs
- Editorial marquee (confirmed vocabulary only), numbered chapters 01–07 on all sections
- About (placeholder copy + confirmed stats), Services (tilt + light-follow blocks), Work (large-format rows, "VIEW" cursor, shared-element detail overlay with layoutId), Skills (interactive list + spinning metallic ring accent), Process (01–06 with scroll-progress blue tracer), Pricing (exact prices, Professional elevated + RECOMMENDED badge), Final CTA, Contact (3 channels + working form with sonner toasts), Footer (© 2026 JAWYX DEVS)
- Custom cursor (dot + lerped ring, VIEW mode, desktop pointer:fine only)
- Lenis smooth scroll synced with GSAP ticker; ambient scroll-reactive background + grain; prefers-reduced-motion respected (disables Lenis, 3D, marquee, ambient motion); 3D lazy-loaded with reduced quality on mobile
- SEO: exact meta title/description, OG tags, favicon from logo
- Verified: backend curl (POST/GET contact), desktop/mobile screenshots, form e2e submit, project overlay, mobile menu

## Backlog / Next
- P0: Replace placeholder content (services, projects, about, skills blurbs, pricing features) when user supplies it
- P1: Admin view for contact inquiries; real project images
- P2: Per-project detail pages/routes, blog, analytics
