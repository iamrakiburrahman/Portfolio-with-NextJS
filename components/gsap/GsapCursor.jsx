"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Quick setters for smooth performance
    const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
    const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });
    const setFollowerX = gsap.quickTo(follower, "x", { duration: 0.5, ease: "power2.out" });
    const setFollowerY = gsap.quickTo(follower, "y", { duration: 0.5, ease: "power2.out" });

    let isHovering = false;

    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("button, a, input, textarea, [data-magnetic], .cursor-hover");
      if (target && !isHovering) {
        isHovering = true;
        gsap.to(cursor, { scale: 0.5, opacity: 0.6, duration: 0.3 });
        gsap.to(follower, {
          scale: 2.2,
          backgroundColor: "rgba(0, 255, 153, 0.12)",
          borderColor: "rgba(0, 255, 153, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (!target && isHovering) {
        isHovering = false;
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "rgba(0, 255, 153, 0.04)",
          borderColor: "rgba(0, 255, 153, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Ambient Spotlight Glow / Large Follower */}
      <div
        ref={followerRef}
        className='pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block w-12 h-12 rounded-full border border-accent/25 bg-accent/5 backdrop-blur-[1px] transition-opacity duration-300'
        style={{ willChange: "transform" }}
      />
      {/* Center Pinpoint Dot */}
      <div
        ref={cursorRef}
        className='pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_#00ff99]'
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default GsapCursor;

