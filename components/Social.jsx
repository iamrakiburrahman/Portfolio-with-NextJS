"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Magnetic from "./gsap/Magnetic";

const Social = ({ containerStyles, iconStyles }) => {
  const icons = [
    { icon: <FaFacebook />, path: "https://www.facebook.com/iamrakiburrahman" },
    { icon: <FaGithub />, path: "https://github.com/iamrakiburrahman" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/iamrakiburrahman" },
  ];
  return (
    <div className={containerStyles}>
      {icons.map(({ icon, path }, index) => (
        <Magnetic key={index} strength={0.45}>
          <Link
            href={path}
            target='_blank'
            rel='noopener noreferrer'
            className={iconStyles}
            aria-label='Social Link'
          >
            {icon}
          </Link>
        </Magnetic>
      ))}
    </div>
  );
};

export default Social;
