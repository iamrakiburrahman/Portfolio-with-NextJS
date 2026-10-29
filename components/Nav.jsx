"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
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
    <nav className='flex gap-8'>
      {links.map((link, idx) => {
        const isActive = link.path === pathName;
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${
              isActive ? "text-accent border-b-2 border-accent" : "text-white/80"
            } capitalize font-medium hover:text-accent transition-all text-sm xl:text-base pb-0.5`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
