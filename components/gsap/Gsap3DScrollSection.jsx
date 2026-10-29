"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap3DScrollSection = ({
  children,
  id,
  className = "",
  intensity = 1,
  startOffset = "top 90%",
  endOffset = "bottom 10%",
}) => {
  const wrapperRef = useRef(null);
  const card3dRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const card = card3dRef.current;
    if (!wrapper || !card) return;

    const ctx = gsap.context(() => {
      // Create continuous 3D timeline scrubbed to scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: startOffset,
          end: endOffset,
          scrub: 1.2,
        },
      });

      // Entry phase: Comes from 3D depth into front focus
      tl.fromTo(
        card,
        {
          rotateX: 12 * intensity,
          rotateY: 0,
          scale: 0.92,
          translateZ: -100 * intensity,
          y: 70,
          opacity: 0.35,
          filter: "blur(4px)",
          transformOrigin: "50% 0%",
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          translateZ: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 1,
        }
      );

      // Exit phase: Folds back slightly as next 3D page approaches
      tl.to(card, {
        rotateX: -8 * intensity,
        scale: 0.94,
        translateZ: -60 * intensity,
        y: -40,
        opacity: 0.45,
        filter: "blur(2px)",
        transformOrigin: "50% 100%",
        ease: "power2.in",
        duration: 1,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [intensity, startOffset, endOffset]);

  return (
    <div
      ref={wrapperRef}
      id={id}
      className={`relative w-full [perspective:1400px] [perspective-origin:50%_50%] ${className}`}
    >
      <div
        ref={card3dRef}
        className='w-full [transform-style:preserve-3d] will-change-transform'
      >
        {children}
      </div>
    </div>
  );
};

export default Gsap3DScrollSection;

