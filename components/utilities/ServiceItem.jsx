"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import GsapTiltCard from "../gsap/GsapTiltCard";
import Magnetic from "../gsap/Magnetic";

const ServiceItem = ({ num, title, description, url = "/contact" }) => {
  const targetUrl = url || "/contact";
  return (
    <GsapTiltCard maxTilt={8} className='rounded-2xl h-full'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
        }}
        className='flex flex-col flex-1 justify-between gap-6 group p-8 rounded-2xl bg-[#232329]/40 border border-white/5 hover:border-accent/40 transition-colors duration-500 h-full'
      >
        <div className='w-full flex justify-between items-center'>
          <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
            {num}
          </div>
          <Magnetic strength={0.4}>
            <Link
              href={targetUrl}
              aria-label={`Inquire about ${title}`}
              className='w-[64px] h-[64px] rounded-full bg-white/10 group-hover:bg-accent text-white group-hover:text-primary transition-all duration-500 flex justify-center items-center group-hover:-rotate-45'
            >
              <BsArrowDownRight className='text-2xl' />
            </Link>
          </Magnetic>
        </div>
        <h2 className='text-[28px] sm:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500'>
          {title}
        </h2>
        <p className='text-white/70 text-base leading-relaxed'>{description}</p>
        <div className='border-b border-white/10 group-hover:border-accent/30 w-full transition-all duration-500'></div>
      </motion.div>
    </GsapTiltCard>
  );
};

export default ServiceItem;
