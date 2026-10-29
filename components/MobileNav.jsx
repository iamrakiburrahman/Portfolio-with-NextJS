"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { FiTerminal, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  const handleOpenSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event("open-command-palette"));
  };

  const handleOpenTerminal = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event("open-terminal"));
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='flex justify-center items-center' aria-label='Open navigation menu'>
        <CiMenuFries className='text-[28px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between py-12 bg-[#141418] border-white/10'>
        <div>
          <div className='mt-8 mb-8 text-center text-2xl'>
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
            >
              <h1 className='text-3xl font-extrabold text-white'>
                Rakibur<span className='text-accent'>.</span>
              </h1>
            </Link>
          </div>

          {/* Quick Tools */}
          <div className='flex items-center justify-center gap-3 mb-8'>
            <button
              onClick={handleOpenSearch}
              className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80'
            >
              <FiSearch className='text-accent' />
              <span>Cmd+K</span>
            </button>
            <button
              onClick={handleOpenTerminal}
              className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80'
            >
              <FiTerminal className='text-accent' />
              <span>CLI</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className='flex flex-col justify-center items-center gap-5'>
            {links.map((link, idx) => {
              const isActive = link.path === pathName;
              return (
                <Link
                  href={link.path}
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive ? "text-accent border-b-2 border-accent" : "text-white/80"
                  } text-lg capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className='flex flex-col gap-3 justify-center pt-6 border-t border-white/10'>
          <Link
            href='/contact'
            onClick={() => setIsOpen(false)}
          >
            <Button className='w-full h-[46px] text-sm font-bold rounded-xl shadow-lg shadow-accent/20'>
              Hire Me
            </Button>
          </Link>
          <p className='text-center text-xs font-mono text-white/40'>
            rakiburrahman307@gmail.com
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
