"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const GsapTiltCard = ({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  onClick,
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = cardRef.current;
    const glareEl = glareRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 900,
        transformOrigin: "center center",
        duration: 0.35,
        ease: "power2.out",
      });

      if (glareEl) {
        gsap.to(glareEl, {
          opacity: 1,
          x: x,
          y: y,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.75,
        ease: "power2.out",
      });

      if (glareEl) {
        gsap.to(glareEl, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, glare]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`relative overflow-hidden will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glare Sheen Layer */}
      {glare && (
        <div
          ref={glareRef}
          className='pointer-events-none absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent/15 blur-2xl opacity-0 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2'
          style={{ willChange: "transform, opacity" }}
        />
      )}
      {children}
    </div>
  );
};

export default GsapTiltCard;

