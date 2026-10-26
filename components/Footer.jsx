import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className='py-8 border-t border-white/10 text-white/60 text-sm mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left'>
        <div>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className='text-accent font-semibold'>Md. Rakibur Rahman</span>. All rights reserved.
          </p>
          <p className='text-xs text-white/40 mt-1'>
            Crafted with Next.js, Framer Motion & Tailwind CSS.
          </p>
        </div>
        <div className='flex items-center gap-6'>
          <Social
            containerStyles='flex gap-4'
            iconStyles='w-8 h-8 border border-white/20 rounded-full flex justify-center items-center text-white/80 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
