"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Magnetic from "../gsap/Magnetic";

const WorkSliderButton = ({
  currentIndex = 0,
  totalCount = 7,
  containerStyles = "",
}) => {
  const swiper = useSwiper();

  const handlePrev = (e) => {
    e.stopPropagation();
    if (swiper) swiper.slidePrev();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (swiper) swiper.slideNext();
  };

  const handleGoTo = (index, e) => {
    e.stopPropagation();
    if (swiper) swiper.slideTo(index);
  };

  // Pad number with leading zero
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalCount).padStart(2, "0");

  return (
    <div
      className={
        containerStyles ||
        "flex items-center gap-3 bg-[#18181e]/90 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl z-30"
      }
    >
      {/* Previous Button */}
      <Magnetic strength={0.3}>
        <button
          onClick={handlePrev}
          aria-label='Previous Project'
          className='w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/15 text-white/80 hover:text-accent flex items-center justify-center transition-all duration-300 group'
        >
          <PiCaretLeftBold className='text-lg group-hover:-translate-x-0.5 transition-transform' />
        </button>
      </Magnetic>

      {/* Slide Counter & Dots */}
      <div className='flex items-center gap-2 px-2'>
        <div className='flex items-center gap-1 font-mono text-xs'>
          <span className='text-accent font-bold text-sm'>{currentFormatted}</span>
          <span className='text-white/20'>/</span>
          <span className='text-white/50'>{totalFormatted}</span>
        </div>

        {/* Mini dot indicators */}
        <div className='hidden sm:flex items-center gap-1.5 ml-1'>
          {Array.from({ length: totalCount }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => handleGoTo(i, e)}
              aria-label={`Jump to project ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? "w-5 h-1.5 bg-accent"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <Magnetic strength={0.3}>
        <button
          onClick={handleNext}
          aria-label='Next Project'
          className='w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/15 text-white/80 hover:text-accent flex items-center justify-center transition-all duration-300 group'
        >
          <PiCaretRightBold className='text-lg group-hover:translate-x-0.5 transition-transform' />
        </button>
      </Magnetic>
    </div>
  );
};

export default WorkSliderButton;
