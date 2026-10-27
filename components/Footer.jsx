import Link from "next/link";
import Social from "./Social";
import { FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-8 border-t border-white/10 text-white/60 text-sm mt-auto bg-[#141418]/60'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
        <div>
          <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-accent'></span>
            </span>
            <span className='font-mono text-xs text-accent font-semibold tracking-wider uppercase'>
              All Systems Operational • Available for Hire
            </span>
          </div>

          <p className='text-white/80'>
            &copy; {new Date().getFullYear()}{" "}
            <span className='text-accent font-semibold'>Md. Rakibur Rahman</span>. All rights reserved.
          </p>
          <p className='text-xs text-white/40 mt-0.5'>
            Engineered with Next.js 14, Framer Motion, Radix UI &amp; Tailwind CSS.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
          <a
            href='mailto:rakiburrahman307@gmail.com'
            className='inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-accent transition-colors'
          >
            <FaEnvelope className='text-accent' />
            <span>rakiburrahman307@gmail.com</span>
          </a>

          <Social
            containerStyles='flex gap-3'
            iconStyles='w-8 h-8 border border-white/10 rounded-full flex justify-center items-center text-white/80 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
