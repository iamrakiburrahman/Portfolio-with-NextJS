"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// import resume from "../assets/resume/resume.pdf";

const Home = () => {
  const resume = "/resume.pdf";
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* Live Availability Badge */}
            <div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-5'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-accent'></span>
              </span>
              <span className='font-mono text-xs uppercase tracking-wider font-semibold'>Available for Hire & Projects</span>
            </div>

            <span className='block text-3xl md:text-5xl font-extrabold text-white/90'>
              Hello I&apos;m
            </span>
            <h1 className='text-4xl font-bold md:font-none md:h1 mb-6'>
              <span className='text-accent'>Rakibur Rahman</span>
              <br />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "Next.js & React Architect",
                  2000,
                  "UI/UX Enthusiast",
                  1500,
                ]}
                speed={30}
                style={{ fontSize: "0.8em", color: "#00ff99" }}
                repeat={Infinity}
                wrapper='span'
                aria-label="Rakibur's professions including Full Stack Developer and React Specialist"
              />
            </h1>

            <p className='max-w-[540px] mb-9 text-white/80 text-base leading-relaxed'>
              I craft dynamic, high-performance web applications that bridge intuitive user experiences with solid backend architectures. Specializing in modern technologies including React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.
            </p>
            {/* button and social */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
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

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
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
    </section>
  );
};

export default Home;
