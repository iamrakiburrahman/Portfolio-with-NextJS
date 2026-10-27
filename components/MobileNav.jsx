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
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between py-12'>
        <div>
          <div className='mt-12 mb-12 text-center text-2xl'>
            <Link href='/' onClick={() => setIsOpen(false)}>
              <h1 className='text-4xl font-extrabold'>
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
              <span>Search</span>
            </button>
            <button
              onClick={handleOpenTerminal}
              className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80'
            >
              <FiTerminal className='text-accent' />
              <span>CLI Terminal</span>
            </button>
          </div>

          {/* nav section start here  */}
          <nav className='flex flex-col justify-center items-center gap-6'>
            {links?.map((link, idx) => {
              return (
                <Link
                  href={link?.path}
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    link?.path === pathName &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize font-medium hover:text-accent transition-all`}
                >
                  {link?.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className='flex flex-col gap-3 justify-center'>
          <Link href='/contact' onClick={() => setIsOpen(false)}>
            <Button className='w-full h-[52px] text-base font-bold rounded-xl shadow-lg shadow-accent/20'>
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
