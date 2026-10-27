"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsCodeSquare } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/utilities/WorkSliderButton";
import ProjectArchitectureModal from "@/components/ProjectArchitectureModal";

import pulseEngine from "../../assets/work/pulseEngine.svg";
import devFlow from "../../assets/work/devFlow.svg";
import easyMart from "../../assets/work/easyMart.png";
import jobSwift from "../../assets/work/jobSwift.png";
import newEra from "../../assets/work/newEra.png";
import uniStayHub from "../../assets/work/uniStayHub.png";
import weatherApp from "../../assets/work/weatherApp.png";

// Comprehensive Production & Full-Stack Projects
const workspace = [
  {
    num: "01",
    category: "Backend & Distributed Systems",
    title: "PulseEngine Microservices API",
    description:
      "A high-concurrency event-driven microservices architecture built with NestJS, TypeScript, PostgreSQL, and Prisma. Features BullMQ asynchronous worker queues, Redis caching layer, Docker containerization, and rate-limited reverse proxy routing.",
    stacks: [
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "Redis" },
      { name: "BullMQ" },
      { name: "Docker" },
    ],
    image: pulseEngine,
    live: "https://iamrakiburrahman.netlify.app/work",
    github: "https://github.com/iamrakiburrahman",
    architectureFlow: `Client Request (HTTPS)
      │
      ▼
[ Reverse Proxy / API Gateway ] ──► (Nginx, Rate Limit: 120 req/min, CORS)
      │
      ▼
[ NestJS Core Microservice ] ───► (JWT + RBAC Guards, Zod Validation)
      │
      ├────────────────────────┬──────────────────────────┐
      ▼                        ▼                          ▼
[ In-Memory Redis Cache ]  [ PostgreSQL + Prisma ]     [ BullMQ Workers ]
(Sub-5ms Hot Data)        (Normalized Relational DB)  (Async Notifications)`,
    challenge:
      "Eliminating database connection pool saturation during burst traffic and orchestrating asynchronous tasks without blocking the main event loop.",
    solution:
      "Implemented Redis query-level caching with invalidation hooks, partitioned BullMQ background worker threads, and connection-pooled Prisma queries.",
    metrics: [
      { label: "Throughput", val: "1,500+ Req/s" },
      { label: "Query Latency", val: "38ms" },
      { label: "Cache Hit Rate", val: "94.8%" },
      { label: "Availability", val: "99.9% SLA" },
    ],
  },
  {
    num: "02",
    category: "Full Stack & WebSockets",
    title: "DevFlow Real-Time Workspace",
    description:
      "A real-time collaborative workspace and sprint tracker built with Next.js 14, Node.js, Socket.io, and PostgreSQL. Enables multi-user real-time board updates, active cursor presence syncing, and granular role-based permissions.",
    stacks: [
      { name: "Next.js 14" },
      { name: "Node.js" },
      { name: "Socket.io" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
    ],
    image: devFlow,
    live: "https://iamrakiburrahman.netlify.app/work",
    github: "https://github.com/iamrakiburrahman",
    architectureFlow: `Next.js 14 Client (App Router)
      │
      ├──────► (REST / Server Actions) ──► Node.js Core API
      │
      └──────► (WebSocket WSS Connection)
                     │
                     ▼
             [ Socket.io Server ]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
[ Redis Pub/Sub Cluster ]   [ PostgreSQL DB ]
(Multi-room Sync)           (Sprint & Task State)`,
    challenge:
      "Maintaining state synchronization across hundreds of simultaneous concurrent WebSocket clients while avoiding duplicate room broadcasts.",
    solution:
      "Integrated Redis Pub/Sub adapter with Socket.io namespaces, handling optimistic UI state updates on the frontend with conflict resolution on the backend.",
    metrics: [
      { label: "Sync Latency", val: "< 18ms" },
      { label: "Concurrent WS", val: "500+ Clients" },
      { label: "Uptime", val: "99.9%" },
      { label: "Test Coverage", val: "88%" },
    ],
  },
  {
    num: "03",
    category: "MERN Stack E-Commerce",
    title: "EasyMart Full-Stack Store",
    description:
      "A complete, production-ready e-commerce web platform engineered with the MERN stack (MongoDB, Express, React, Node.js). Integrates secure JWT authentication, shopping cart state management, checkout workflows, and an administrative inventory control portal.",
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
    architectureFlow: `React Client (Redux / Context API)
      │
      ▼
[ Express.js REST API ] ──► (Authentication Middleware, Joi Validation)
      │
      ├────────────────────────┬──────────────────────────┐
      ▼                        ▼                          ▼
[ MongoDB Atlas Cluster ]  [ Order Processing ]       [ Cloudinary Media ]
(Mongoose Schemas)         (Cart State Machine)        (Product Assets)`,
    challenge:
      "Preventing out-of-stock ordering during simultaneous checkouts and securing sensitive customer payment credentials.",
    solution:
      "Engineered atomic MongoDB update queries (`$inc` inventory decrements) with validation checks, coupled with encrypted HTTP-only session cookies.",
    metrics: [
      { label: "Products Served", val: "1,000+" },
      { label: "API Speed", val: "52ms" },
      { label: "Mobile Score", val: "96 / 100" },
      { label: "Uptime", val: "99.9%" },
    ],
  },
  {
    num: "04",
    category: "Front-End & API Integration",
    title: "SkySnap Weather Platform",
    description:
      "An analytical meteorological dashboard built with React, TypeScript, Tailwind CSS, and Recharts. Connects to OpenWeatherMap API with intelligent client-side caching, hourly/7-day chart visualization, geolocation queries, and metric conversions.",
    stacks: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Recharts" },
      { name: "OpenWeather API" },
    ],
    image: weatherApp,
    live: "https://sky-snap-weather-app.netlify.app",
    github: "https://github.com/rakiburrahman307/whether-app-react",
    architectureFlow: `React + TypeScript UI (Recharts Graphs)
      │
      ▼
[ Client-side Storage Cache ] ──► (TTL 15 Min: Avoid Redundant API Calls)
      │
      ▼
[ OpenWeatherMap REST API ] ──► (Dynamic Weather Conditions & Forecasts)`,
    challenge:
      "Minimizing third-party API rate limit consumption while delivering real-time weather alerts and charts.",
    solution:
      "Built a custom React cache layer with 15-minute TTL invalidation and memoized Recharts datasets to prevent unnecessary re-renders.",
    metrics: [
      { label: "API Efficiency", val: "65% Fewer Calls" },
      { label: "Render Time", val: "16ms" },
      { label: "Lighthouse", val: "98/100" },
      { label: "Typescript", val: "100% Strict" },
    ],
  },
  {
    num: "05",
    category: "Enterprise Web Portal",
    title: "The New Era Consultancy",
    description:
      "A corporate education and global career consultancy web platform. Engineered with high-performance responsive UI, dynamic country program listings, student assessment intake workflows, and smooth Framer Motion micro-interactions.",
    stacks: [
      { name: "React" },
      { name: "React Router" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: newEra,
    live: "https://consultancynewera.com",
    github: "https://github.com/rakiburrahman307/NEW-ERA-CONSULTANCY",
    architectureFlow: `Corporate React Client
      │
      ├──────► (Framer Motion Animation Engine)
      │
      └──────► (Consultancy Application Gateway & Inquiry System)`,
    challenge:
      "Achieving sub-second initial load times with high-resolution imagery and media for international consultancy clients.",
    solution:
      "Optimized static assets to modern WebP formats, implemented route-based code splitting, and streamlined UI animation lifecycles.",
    metrics: [
      { label: "Load Time", val: "< 1.2s" },
      { label: "Inquiries Handled", val: "2,500+" },
      { label: "SEO Score", val: "100/100" },
      { label: "Live Domain", val: "Active" },
    ],
  },
  {
    num: "06",
    category: "MERN Management System",
    title: "UniStayHub Hostel Management",
    description:
      "A comprehensive hostel accommodation and resident allocation platform. Designed to automate room bookings, maintenance tickets, administrative announcements, and resident verification for universities.",
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
    architectureFlow: `Student / Admin React Client
      │
      ├──────► Firebase Auth (Role-based: Student vs Admin)
      │
      ▼
[ Node.js & Express API ] ──► (Room Allocation Engine & Maintenance Logs)
      │
      ▼
[ MongoDB Database ]`,
    challenge:
      "Managing complex hostel bed allocation states and room occupancy disputes without manual intervention.",
    solution:
      "Engineered automated room occupancy state transitions with optimistic reservation holds and immediate administrative notifications.",
    metrics: [
      { label: "Rooms Managed", val: "250+ Beds" },
      { label: "Booking Speed", val: "Instant" },
      { label: "Database", val: "MongoDB Atlas" },
      { label: "User Roles", val: "Multi-Tier" },
    ],
  },
  {
    num: "07",
    category: "MERN Stack Portal",
    title: "Job Swift Career Platform",
    description:
      "A recruitment engine linking talented professionals with top hiring companies. Features resume submission, categorized job search with multifaceted filters, employer job posting workflows, and applicant tracking.",
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
    architectureFlow: `Job Seeker & Recruiter Client
      │
      ▼
[ Express API Service ] ──► (Job Search & Filter Engine)
      │
      ▼
[ MongoDB Database ] ──► (Indexed by Category, Salary, & Location)`,
    challenge:
      "Fast multifaceted query execution across thousands of job listings with variable filtering criteria.",
    solution:
      "Configured compound database indices on job category, salary bounds, and location fields to achieve sub-50ms query execution.",
    metrics: [
      { label: "Search Indexing", val: "< 50ms" },
      { label: "Filter Fields", val: "8+ Criteria" },
      { label: "Auth Provider", val: "Firebase" },
      { label: "Status", val: "Live" },
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(workspace[0]);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

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
      className='min-h-[85vh] flex flex-col justify-center py-8 xl:py-4'
    >
      <div className='container mx-auto'>
        {/* Header section with count */}
        <div className='flex flex-col md:flex-row items-center justify-between mb-8 gap-4 border-b border-white/10 pb-4'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-white'>
              Featured <span className='text-accent'>Engineering Projects</span>
            </h1>
            <p className='text-white/60 text-sm mt-1'>
              Production systems, backend microservices, real-time apps &amp; full-stack web platforms.
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-semibold'>
              {workspace.length} Projects Showcased
            </span>
          </div>
        </div>

        <div className='flex flex-col xl:flex-row xl:gap-[40px]'>
          {/* Left Column: Project Details */}
          <div className='w-full xl:w-[50%] flex flex-col justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[18px]'>
              {/* Outline number */}
              <div className='flex items-baseline justify-between'>
                <div className='text-7xl sm:text-8xl leading-none font-extrabold text-transparent text-outline'>
                  {project?.num}
                </div>
                <Button
                  onClick={() => setIsCaseStudyOpen(true)}
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-2 border-accent/40 text-accent hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-xs'
                >
                  <FaCogs className='text-sm' />
                  <span>Case Study &amp; Architecture</span>
                </Button>
              </div>

              {/* Title & Category */}
              <div>
                <span className='text-accent text-xs font-mono font-semibold tracking-widest uppercase block mb-1'>
                  {project?.category}
                </span>
                <h2 className='text-2xl sm:text-3xl xl:text-4xl leading-tight font-extrabold text-white capitalize'>
                  {project?.title}
                </h2>
              </div>

              {/* Description */}
              <p className='text-white/70 leading-relaxed text-sm xl:text-base'>
                {project?.description}
              </p>

              {/* Stack badges */}
              <div className='flex flex-wrap gap-2 pt-1'>
                {project?.stacks?.map((stack, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1 rounded-md bg-[#232329] border border-white/10 text-accent font-mono text-xs font-medium'
                  >
                    {stack?.name}
                  </span>
                ))}
              </div>

              {/* Border */}
              <div className='border-b border-white/10 my-1'></div>

              {/* Action Buttons */}
              <div className='flex flex-wrap items-center gap-4'>
                {/* Live project button */}
                <Link href={project?.live} passHref target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[54px] h-[54px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
                        <BsArrowUpRight className='text-white text-xl group-hover:text-accent transition-colors' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-3 py-1 font-semibold text-xs'>
                          Launch Live Application
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub project button */}
                <Link href={project?.github} passHref target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[54px] h-[54px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
                        <BsGithub className='text-white text-xl group-hover:text-accent transition-colors' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='px-3 py-1 font-semibold text-xs'>
                          Source Code Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Primary CTA: Case Study */}
                <Button
                  onClick={() => setIsCaseStudyOpen(true)}
                  className='bg-accent text-primary font-semibold hover:bg-accent-hover transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm h-[54px] px-6 rounded-full'
                >
                  <BsCodeSquare className='text-base' />
                  <span>Inspect System Design</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Swiper Carousel */}
          <div className='w-full xl:w-[50%] mb-8 xl:mb-0'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[480px]'
              onSlideChange={handleSlideChange}
            >
              {workspace?.map((work, idx) => (
                <SwiperSlide key={idx} className='w-full'>
                  <div
                    onClick={() => setIsCaseStudyOpen(true)}
                    className='h-[360px] xl:h-[440px] relative group flex justify-center items-center bg-[#232329] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer'
                  >
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-10'></div>
                    
                    {/* Case Study Badge in Corner */}
                    <div className='absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#1c1c22]/90 border border-white/10 text-white/80 text-xs font-mono flex items-center gap-1.5 opacity-90 group-hover:border-accent group-hover:text-accent transition-all'>
                      <FaCogs className='text-accent' />
                      <span>Click to view Architecture</span>
                    </div>

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

      {/* Case Study & Architecture Modal */}
      <ProjectArchitectureModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        project={project}
      />
    </motion.div>
  );
};

export default Work;
