"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapReveal = ({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 0.8,
  stagger = 0,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (stagger > 0 && el.children.length > 0) {
        gsap.from(el.children, {
          y: y,
          opacity: 0,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.from(el, {
          y: y,
          opacity: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, y, duration, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GsapReveal;

