import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [mode, setMode] = useState("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    let x = -100, y = -100, rx = -100, ry = -100, raf;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      if (t.closest('[data-cursor="view"]')) setMode("view");
      else if (t.closest('a, button, input, textarea, [role="button"], [data-cursor="link"]'))
        setMode("link");
      else setMode("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;

  const ringSize = mode === "view" ? 72 : mode === "link" ? 44 : 32;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-[#F8FAFC]"
        style={{ transform: "translate(-100px, -100px)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border flex items-center justify-center transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          transform: "translate(-100px, -100px)",
          borderColor: mode === "view" ? "rgba(0,102,255,0.7)" : "rgba(203,213,225,0.4)",
          backgroundColor: mode === "view" ? "rgba(7,7,9,0.7)" : "transparent",
          backdropFilter: mode === "view" ? "blur(2px)" : "none",
        }}
      >
        {mode === "view" && (
          <span className="font-mono text-[10px] tracking-[0.2em] text-white">VIEW</span>
        )}
      </div>
    </>
  );
};
