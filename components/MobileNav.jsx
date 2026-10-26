"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Button } from "./ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='flex justify-center items-center' aria-label='Open navigation menu'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between py-12'>
        <div>
          <div className='mt-16 mb-20 text-center text-2xl'>
            <Link href='/' onClick={() => setIsOpen(false)}>
              <h1 className='text-4xl font-semibold'>
                Rakibur <span className='text-accent'>.</span>
              </h1>
            </Link>
          </div>
          {/* nav section start here  */}
          <nav className='flex flex-col justify-center items-center gap-8'>
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
        <div className='flex justify-center'>
          <Link href='/contact' onClick={() => setIsOpen(false)}>
            <Button className='w-full px-8'>Hire Me</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
