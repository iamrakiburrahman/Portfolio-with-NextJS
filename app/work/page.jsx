"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/utilities/WorkSliderButton";
import easyMart from "../../assets/work/easyMart.png";
import jobSwift from "../../assets/work/jobSwift.png";
import newEra from "../../assets/work/newEra.png";
import uniStayHub from "../../assets/work/uniStayHub.png";
import weatherApp from "../../assets/work/weatherApp.png";

// Project data
const workspace = [
  {
    num: "01",
    category: "MERN Stack",
    title: "EasyMart E-commerce",
    description:
      "A full-stack, responsive, and dynamic web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with clean product cataloging, cart state management, checkout flows, and administrator product management.",
    stacks: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Bootstrap" },
    ],
    image: easyMart,
    live: "https://easy-mart-ecommerce-final.netlify.app",
    github: "https://github.com/rakiburrahman307/easy-mart-react-ecommerce",
  },
  {
    num: "02",
    category: "Front-End",
    title: "SkySnap Weather App",
    description:
      "A modern weather dashboard that provides accurate, real-time meteorological forecasts using OpenWeatherAPI. Features dynamic weather illustrations, interactive charts, metric conversions, and a responsive interface.",
    stacks: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Recharts" },
    ],
    image: weatherApp,
    live: "https://sky-snap-weather-app.netlify.app",
    github: "https://github.com/rakiburrahman307/whether-app-react",
  },
  {
    num: "03",
    category: "Front-End",
    title: "The New Era Consultancy",
    description:
      "A sleek corporate portal engineered for an international education and career consultancy firm. Delivers intuitive navigation, country program guides, application inquiry workflows, and high performance.",
    stacks: [
      { name: "React" },
      { name: "React Router" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: newEra,
    live: "https://consultancynewera.com",
    github: "https://github.com/rakiburrahman307/NEW-ERA-CONSULTANCY",
  },
  {
    num: "04",
    category: "MERN Stack",
    title: "UniStayHub Hostel Management",
    description:
      "A comprehensive hostel and accommodation management web system designed to streamline booking, room allocation, fee collection, resident registries, and announcements for university students and administrators.",
    stacks: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase Auth" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    image: uniStayHub,
    live: "https://unistayhub-hostel-manegement.netlify.app",
    github:
      "https://github.com/rakiburrahman307/UniStyHub-Hostel-Management-ReactJs",
  },
  {
    num: "05",
    category: "MERN Stack",
    title: "Job Swift Career Portal",
    description:
      "A recruitment platform connecting job seekers with prospective employers. Includes applicant tracking, job listings with filters, resume submission, and administrative dashboards.",
    stacks: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    image: jobSwift,
    live: "https://job-swift-expolorejobs-managements.netlify.app",
    github: "https://github.com/rakiburrahman307/Assignment-11",
  },
];

const Work = () => {
  const [project, setProject] = useState(workspace[0]);

  const handleSlideChange = useCallback((slider) => {
    const currentIdx = slider.activeIndex;
    setProject(workspace[currentIdx]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[40px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[20px]'>
              {/* Outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project?.num}
              </div>
              {/* Category */}
              <h2 className='text-[36px] xl:text-[42px] leading-tight font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project?.title}
              </h2>
              <span className='text-accent text-sm font-semibold tracking-wider uppercase'>
                {project?.category}
              </span>
              {/* Description */}
              <p className='text-white/60 leading-relaxed text-sm xl:text-base'>{project?.description}</p>
              {/* Stack badges */}
              <div className='flex flex-wrap gap-2 pt-2'>
                {project?.stacks?.map((stack, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs xl:text-sm font-medium'
                  >
                    {stack?.name}
                  </span>
                ))}
              </div>
              {/* Border */}
              <div className='border-b border-white/10 my-2'></div>
              {/* Action Buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project?.live} passHref target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[64px] h-[64px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
                        <BsArrowUpRight className='text-white text-2xl group-hover:text-accent transition-colors' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-4 py-2 font-semibold text-xs'>
                          Live Preview
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub project button */}
                <Link href={project?.github} passHref target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[64px] h-[64px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
                        <BsGithub className='text-white text-2xl group-hover:text-accent transition-colors' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-4 py-2 font-semibold text-xs'>
                          Source Code
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[480px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {workspace?.map((work, idx) => (
                <SwiperSlide key={idx} className='w-full'>
                  <div className='h-[380px] xl:h-[440px] relative group flex justify-center items-center bg-[#232329] border border-white/10 rounded-2xl overflow-hidden shadow-2xl'>
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10'></div>
                    {/* Project Screenshot */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={work?.image}
                        fill
                        alt={work?.title}
                        className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                buttonStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-lg flex justify-center items-center transition-all duration-300'
                iconStyles='text-primary font-bold'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
