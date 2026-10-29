"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapBackground = () => {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useEffect(() => {
    const orb1 = orb1Ref.current;
    const orb2 = orb2Ref.current;
    const orb3 = orb3Ref.current;

    if (!orb1 || !orb2 || !orb3) return;

    // Fluid floating timelines
    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    tl1.to(orb1, {
      x: 90,
      y: 60,
      scale: 1.15,
      duration: 12,
      ease: "sine.inOut",
    }).to(orb1, {
      x: -60,
      y: -40,
      scale: 0.9,
      duration: 14,
      ease: "sine.inOut",
    });

    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
    tl2.to(orb2, {
      x: -80,
      y: -70,
      scale: 1.2,
      duration: 15,
      ease: "sine.inOut",
    }).to(orb2, {
      x: 50,
      y: 50,
      scale: 0.85,
      duration: 11,
      ease: "sine.inOut",
    });

    const tl3 = gsap.timeline({ repeat: -1, yoyo: true });
    tl3.to(orb3, {
      x: 70,
      y: -50,
      scale: 1.1,
      duration: 16,
      ease: "sine.inOut",
    });

    return () => {
      tl1.kill();
      tl2.kill();
      tl3.kill();
    };
  }, []);

  return (
    <div className='pointer-events-none fixed inset-0 overflow-hidden z-0 select-none'>
      {/* Top Left Orb */}
      <div
        ref={orb1Ref}
        className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px] will-change-transform'
      />
      {/* Center Right Orb */}
      <div
        ref={orb2Ref}
        className='absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-accent/[0.04] blur-[140px] will-change-transform'
      />
      {/* Bottom Left Orb */}
      <div
        ref={orb3Ref}
        className='absolute -bottom-32 left-1/4 w-[380px] h-[380px] rounded-full bg-accent/[0.03] blur-[130px] will-change-transform'
      />
    </div>
  );
};

export default GsapBackground;

