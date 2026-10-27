"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FiDownload, FiTerminal, FiSearch } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  const resume = "/resume.pdf";

  const handleOpenTerminal = () => {
    window.dispatchEvent(new Event("open-terminal"));
  };

  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new Event("open-command-palette"));
  };

  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* Live Availability Badge & Quick Action */}
            <div className='flex flex-wrap items-center justify-center xl:justify-start gap-3 mb-4'>
              <div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-accent'></span>
                </span>
                <span className='font-mono text-xs uppercase tracking-wider font-semibold'>
                  Available for Hire &amp; Projects
                </span>
              </div>

              <button
                onClick={handleOpenCommandPalette}
                className='hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-accent text-white/70 hover:text-accent font-mono text-xs transition-all'
                title='Search or press Ctrl+K'
              >
                <FiSearch />
                <span>Cmd+K</span>
              </button>
            </div>

            <div className='mb-6'>
              <span className='block text-lg md:text-xl font-medium text-white/60 mb-1 tracking-wide'>
                Hello, I&apos;m
              </span>
              <h1 className='text-3xl sm:text-5xl xl:text-[56px] font-extrabold text-white tracking-tight leading-tight'>
                Md. Rakibur <span className='text-accent'>Rahman</span>
              </h1>
              <div className='text-2xl sm:text-3xl xl:text-4xl font-bold text-accent min-h-[46px] flex items-center justify-center xl:justify-start gap-2 mt-2'>
                <span className='text-white/70 font-normal text-xl sm:text-2xl'>A</span>
                <TypeAnimation
                  sequence={[
                    "Backend Developer",
                    2200,
                    "Node.js & TypeScript Architect",
                    2200,
                    "REST & GraphQL API Specialist",
                    2000,
                    "Full Stack Engineer",
                    2000,
                    "Database & System Designer",
                    2000,
                  ]}
                  speed={35}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                  wrapper='span'
                  aria-label="Rakibur's professions including Backend Developer and TypeScript Architect"
                />
              </div>
            </div>

            <p className='max-w-[540px] mb-5 text-white/75 text-base md:text-lg leading-relaxed'>
              I specialize in architecting high-performance <span className='text-white font-semibold'>Backend Systems</span>, scalable RESTful &amp; GraphQL APIs, and robust databases (PostgreSQL, MongoDB, Prisma, Redis). Delivering clean server-side logic coupled with seamless full-stack web applications.
            </p>

            {/* Backend Tech Stack Quick Badges */}
            <div className='flex flex-wrap gap-2 mb-8 justify-center xl:justify-start max-w-[540px]'>
              {["React", "Next.js", "Node.js", "Node.js", "Express", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "MongoDB", "Redis", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className='px-2.5 py-1 rounded-md bg-[#232329] border border-white/10 text-accent font-mono text-xs font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* button and social */}
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center xl:justify-start'>
              <a
                href={resume}
                download='Rakibur_Rahman_CV.pdf'
                className='inline-block'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300'
                  aria-label='Download CV of Rakibur Rahman'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>

              <Button
                variant='ghost'
                size='lg'
                onClick={handleOpenTerminal}
                className='flex items-center gap-2 border border-accent/30 text-accent hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-xs uppercase'
              >
                <FiTerminal className='text-base' />
                <span>Launch CLI</span>
              </Button>

              <div className='mt-4 sm:mt-0'>
                <Social
                  containerStyles='flex gap-4'
                  iconStyles='w-10 h-10 border border-accent/40 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:transition-all duration-300'
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
      <Testimonials />
    </section>
  );
};

export default Home;
