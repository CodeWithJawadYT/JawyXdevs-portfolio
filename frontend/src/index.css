@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --bg: #070709;
    --bg-2: #0e0f14;
    --card: #12141c;
    --card-hover: #171a24;
    --line: rgba(255, 255, 255, 0.08);
    --line-blue: rgba(0, 102, 255, 0.3);
    --text: #f8fafc;
    --text-2: #94a3b8;
    --muted: #64748b;
    --silver: #cbd5e1;
    --blue: #0066ff;
    --cyan: #00f0ff;
    --glow: rgba(0, 102, 255, 0.25);
}

html {
    scroll-behavior: auto;
}

body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: "Plus Jakarta Sans", -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

::selection {
    background: rgba(0, 102, 255, 0.35);
    color: #fff;
}

::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: var(--bg);
}
::-webkit-scrollbar-thumb {
    background: #1d2230;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
    background: #2a3145;
}

.font-display {
    font-family: "Outfit", sans-serif;
}
.font-mono {
    font-family: "JetBrains Mono", monospace;
}

/* Metallic gradient text */
.text-metal {
    background: linear-gradient(180deg, #f8fafc 0%, #c3cad6 52%, #7e8797 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

/* Custom cursor */
.has-cursor,
.has-cursor * {
    cursor: none !important;
}

/* Grain overlay */
.grain::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Marquee */
@keyframes marquee-x {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-x 48s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
    .marquee-track {
        animation: none;
    }
}

/* Logo sweep (preloader) */
@keyframes logo-sweep {
    0% {
        transform: translateX(-120%) skewX(-18deg);
    }
    100% {
        transform: translateX(320%) skewX(-18deg);
    }
}
.sweep-bar {
    animation: logo-sweep 1.4s cubic-bezier(0.65, 0, 0.35, 1) 0.5s both;
}

/* Slow spin for metallic ring accent */
@keyframes slow-spin {
    to {
        transform: rotate(360deg);
    }
}
.spin-slow {
    animation: slow-spin 24s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
    .spin-slow {
        animation: none;
    }
}

/* Service block light-follow */
.light-follow {
    position: relative;
}
.light-follow::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.4s ease;
    background: radial-gradient(
        480px circle at var(--mx, 50%) var(--my, 50%),
        rgba(0, 102, 255, 0.09),
        transparent 42%
    );
    pointer-events: none;
}
.light-follow:hover::before {
    opacity: 1;
}

/* Focus visibility for accessibility */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 2px solid var(--blue);
    outline-offset: 3px;
    border-radius: 2px;
}

@layer base {
    :root {
        --background: 228 13% 3%;
        --foreground: 210 40% 98%;
        --card: 225 22% 9%;
        --card-foreground: 210 40% 98%;
        --popover: 225 22% 9%;
        --popover-foreground: 210 40% 98%;
        --primary: 216 100% 50%;
        --primary-foreground: 210 40% 98%;
        --secondary: 225 22% 12%;
        --secondary-foreground: 210 40% 98%;
        --muted: 225 22% 12%;
        --muted-foreground: 215 20% 55%;
        --accent: 225 22% 12%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 100% / 0.08;
        --input: 0 0% 100% / 0.08;
        --ring: 216 100% 50%;
        --radius: 0.5rem;
    }
}

@layer base {
    * {
        @apply border-border;
    }
}

@layer base {
    [data-debug-wrapper="true"] {
        display: contents !important;
    }

    [data-debug-wrapper="true"] > * {
        margin-left: inherit;
        margin-right: inherit;
        margin-top: inherit;
        margin-bottom: inherit;
        padding-left: inherit;
        padding-right: inherit;
        padding-top: inherit;
        padding-bottom: inherit;
        column-gap: inherit;
        row-gap: inherit;
        gap: inherit;
        border-left-width: inherit;
        border-right-width: inherit;
        border-top-width: inherit;
        border-bottom-width: inherit;
        border-left-style: inherit;
        border-right-style: inherit;
        border-top-style: inherit;
        border-bottom-style: inherit;
        border-left-color: inherit;
        border-right-color: inherit;
        border-top-color: inherit;
        border-bottom-color: inherit;
    }
}
