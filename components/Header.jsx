"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { FiSearch } from "react-icons/fi";
import Magnetic from "./gsap/Magnetic";

const Header = () => {
  const handleOpenSearch = () => {
    window.dispatchEvent(new Event("open-command-palette"));
  };

  return (
    <header className='py-2.5 xl:py-3 text-white sticky top-0 z-50 backdrop-blur-xl bg-[#121216]/85 border-b border-white/10 transition-all shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo  */}
        <Magnetic strength={0.2}>
          <Link href='/'>
            <h1 className='text-2xl sm:text-3xl font-extrabold tracking-tight'>
              Rakibur<span className='text-accent'>.</span>
            </h1>
          </Link>
        </Magnetic>

        {/* Desktop Nav  */}
        <div className='hidden xl:flex items-center gap-6'>
          <Nav />

          {/* Quick Command Palette Button */}
          <Magnetic strength={0.25}>
            <button
              onClick={handleOpenSearch}
              className='flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-accent hover:text-white transition-all text-xs font-mono group'
              title='Search or press Ctrl+K'
            >
              <FiSearch className='text-accent group-hover:scale-110 transition-transform' />
              <span>Search</span>
              <kbd className='px-1.5 py-0.2 rounded bg-white/10 text-[10px] text-white/50 group-hover:text-white'>
                Ctrl+K
              </kbd>
            </button>
          </Magnetic>

          <Magnetic strength={0.35}>
            <Link href='/contact'>
              <Button className='h-[38px] rounded-full px-5 font-bold text-xs tracking-wide shadow-md shadow-accent/20 hover:scale-105 active:scale-95 transition-all'>
                Hire Me
              </Button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Nav & Quick Search */}
        <div className='xl:hidden flex items-center gap-3'>
          <button
            onClick={handleOpenSearch}
            className='w-8 h-8 rounded-full bg-white/5 border border-white/10 text-accent flex items-center justify-center text-xs'
            aria-label='Open Search'
          >
            <FiSearch />
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
