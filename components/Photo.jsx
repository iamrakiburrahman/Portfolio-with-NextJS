"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../assets/profile/profile.webp";

const Photo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
        }}
        className='relative flex items-center justify-center'
      >
        {/* Profile Image with perfect circular framing, neon glow & loading state */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
          className='w-[250px] h-[250px] xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden absolute z-10 border-2 border-accent/40 shadow-[0_0_40px_rgba(0,255,153,0.2)] bg-[#1c1c22]'
        >
          {/* High-tech Loading Skeleton Spinner */}
          {!isLoaded && (
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-[#1c1c22] z-20'>
              <div className='relative w-14 h-14 flex items-center justify-center'>
                <div className='absolute inset-0 rounded-full border-2 border-accent/20'></div>
                <div className='absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin'></div>
              </div>
              <span className='text-[10px] uppercase font-mono tracking-widest text-accent mt-3 animate-pulse'>
                Loading...
              </span>
            </div>
          )}

          <Image
            src={photo}
            priority
            quality={95}
            alt='Md. Rakibur Rahman'
            fill
            sizes='(max-width: 1200px) 250px, 440px'
            onLoad={() => setIsLoaded(true)}
            className={`object-cover object-top transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
            }`}
          />
        </motion.div>

        {/* Animated Rotating Tech Circle */}
        <motion.svg
          className='w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
