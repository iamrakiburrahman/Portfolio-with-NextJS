"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../assets/profile/images.png"

const Photo = () => {
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
        {/* Profile Image with perfect circular framing and glowing border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
          className='w-[250px] h-[250px] xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden absolute z-10 border-2 border-accent/40 shadow-[0_0_40px_rgba(0,255,153,0.2)] bg-[#1c1c22]'
        >
          <Image
            src={photo}
            priority
            quality={100}
            alt='Md. Rakibur Rahman'
            fill
            sizes='(max-width: 1200px) 250px, 440px'
            className='object-cover object-top'
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
