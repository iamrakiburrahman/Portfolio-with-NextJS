"use client";

import React, { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

const pages = [
  { id: "hero", label: "Hero" },
  { id: "stats", label: "Metrics" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Projects" },
  { id: "resume", label: "Tech Stack" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Gsap3DPageNavigator = () => {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const p of pages) {
        const el = document.getElementById(p.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(p.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-2.5 rounded-full shadow-2xl'>
      <div className='text-[10px] font-mono text-accent/80 font-bold'>3D</div>
      <div className='w-4 h-[1px] bg-white/10' />
      {pages.map((p, idx) => {
        const isActive = activeId === p.id;
        const num = String(idx + 1).padStart(2, "0");
        return (
          <Magnetic key={p.id} strength={0.3}>
            <button
              onClick={() => scrollTo(p.id)}
              className='group relative flex items-center justify-center'
              aria-label={`Jump to 3D section ${p.label}`}
            >
              {/* Tooltip on hover */}
              <span className='pointer-events-none absolute right-8 px-2 py-1 rounded bg-[#18181f] border border-white/10 text-white text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl'>
                {num} - {p.label}
              </span>

              {/* Indicator Dot / Pill */}
              <div
                className={`transition-all duration-300 rounded-full flex items-center justify-center font-mono text-[9px] ${
                  isActive
                    ? "w-6 h-6 bg-accent text-primary font-bold shadow-md shadow-accent/40"
                    : "w-2.5 h-2.5 bg-white/20 group-hover:bg-accent/70 text-transparent"
                }`}
              >
                {isActive && num}
              </div>
            </button>
          </Magnetic>
        );
      })}
    </div>
  );
};

export default Gsap3DPageNavigator;

