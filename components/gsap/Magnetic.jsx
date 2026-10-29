"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Magnetic = ({ children, strength = 0.35, className = "" }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    // Only run on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = magneticRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: "elastic.out(1.1, 0.35)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={magneticRef}
      data-magnetic
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default Magnetic;

