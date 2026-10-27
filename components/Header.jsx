"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const handleOpenSearch = () => {
    window.dispatchEvent(new Event("open-command-palette"));
  };

  return (
    <header className='py-6 xl:py-10 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo  */}
        <Link href='/'>
          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>
            Rakibur<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav  */}
        <div className='hidden xl:flex items-center gap-6'>
          <Nav />

          {/* Quick Command Palette Button */}
          <button
            onClick={handleOpenSearch}
            className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#232329] border border-white/10 text-white/70 hover:border-accent hover:text-white transition-all text-xs font-mono group'
            title='Search or press Ctrl+K'
          >
            <FiSearch className='text-accent group-hover:scale-110 transition-transform' />
            <span>Search</span>
            <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50 group-hover:text-white'>
              Ctrl+K
            </kbd>
          </button>

          <Link href='/contact'>
            <Button className='h-[46px] rounded-full px-7 font-bold text-sm tracking-wide shadow-md shadow-accent/20 hover:scale-105 active:scale-95 transition-all'>
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav & Quick Search */}
        <div className='xl:hidden flex items-center gap-3'>
          <button
            onClick={handleOpenSearch}
            className='w-9 h-9 rounded-full bg-[#232329] border border-white/10 text-accent flex items-center justify-center text-sm'
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
