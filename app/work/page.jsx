"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsCodeSquare, BsTerminal, BsLayers } from "react-icons/bs";
import { FaCogs, FaServer, FaDatabase } from "react-icons/fa";
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
import Magnetic from "@/components/gsap/Magnetic";
import GsapTiltCard from "@/components/gsap/GsapTiltCard";

import pulseEngine from "../../assets/work/pulseEngine.svg";
import devFlow from "../../assets/work/devFlow.svg";
import easyMart from "../../assets/work/easyMart.png";
import jobSwift from "../../assets/work/jobSwift.png";
import newEra from "../../assets/work/newEra.png";
import uniStayHub from "../../assets/work/uniStayHub.png";
import weatherApp from "../../assets/work/weatherApp.png";

// Human-crafted, production-grade project data
const workspace = [
  {
    num: "01",
    category: "Backend & Distributed Systems",
    title: "PulseEngine Microservices API",
    headline: "High-concurrency event-driven microservices architecture with queue workers and Redis caching.",
    description:
      "A distributed backend microservices architecture built with NestJS, TypeScript, PostgreSQL, and Prisma. Features BullMQ worker queues for offloading CPU-intensive tasks, an in-memory Redis caching layer, Docker containerization, and rate-limited reverse proxy routing.",
    fullOverview:
      "PulseEngine was designed to address event processing bottlenecks in high-volume web services. By decoupling incoming HTTP ingestion from background computation, the system maintains stable response times under concurrent traffic bursts without exhausting database connections.",
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
    urlPreview: "api.pulse-engine.internal/v1/health",
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
      "Under heavy traffic bursts, direct database writes were saturating the connection pool and causing latency degradation across unrelated services. Long-running notification tasks were also blocking the Node.js event loop.",
    solution:
      "Separated the architecture into a stateless NestJS core and dedicated BullMQ worker pools. Configured Redis query caching with automated invalidation hooks and implemented Prisma connection pooling to eliminate pool exhaustion.",
    metrics: [
      { label: "Throughput", val: "1,500+ Req/s" },
      { label: "Query Latency", val: "38ms" },
      { label: "Cache Hit Rate", val: "94.8%" },
      { label: "Availability", val: "99.9% SLA" },
    ],
    databaseDetails:
      "PostgreSQL relational schema with normalized tables for users, roles, jobs, and audit logs. Indexed by foreign keys and status flags with automated Prisma migrations.",
    securityDetails:
      "Stateless JWT authorization using RS256 signing, role-based guard middleware, strict rate limiting at 120 requests/minute, and input sanitization.",
    keyHighlights: [
      "Sub-5ms query latency on hot cached endpoints.",
      "Zero dropped jobs during traffic spikes via BullMQ persistence.",
      "Docker compose configuration with healthchecks for local and cloud parity.",
      "Comprehensive TypeScript interfaces sharing contracts across services.",
    ],
  },
  {
    num: "02",
    category: "Full Stack & WebSockets",
    title: "DevFlow Real-Time Workspace",
    headline: "Collaborative sprint board and task manager with live WebSocket synchronization.",
    description:
      "A real-time team collaboration platform built with Next.js 14, Node.js, Socket.io, and PostgreSQL. Enables multi-user real-time board updates, active cursor presence syncing, and granular role-based permissions.",
    fullOverview:
      "DevFlow provides software teams with an interactive sprint board where state changes—like moving a task card, assigning an engineer, or commenting—are broadcast instantly to all connected team members without manual refreshes.",
    stacks: [
      { name: "Next.js 14" },
      { name: "Node.js" },
      { name: "Socket.io" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
    ],
    image: devFlow,
    urlPreview: "devflow.workspace.app/board/realtime-sprint",
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
      "Broadcasting state updates across hundreds of active WebSocket connections led to redundant network traffic and potential race conditions when two users moved the same task simultaneously.",
    solution:
      "Implemented a Redis Pub/Sub backplane to scope broadcasts strictly to active project rooms. Applied monotonic version tokens to incoming edits so the server resolves conflicts cleanly while the client renders optimistic UI updates.",
    metrics: [
      { label: "Sync Latency", val: "< 18ms" },
      { label: "Concurrent WS", val: "500+ Clients" },
      { label: "Uptime", val: "99.9%" },
      { label: "Test Coverage", val: "88%" },
    ],
    databaseDetails:
      "Relational schema tracking projects, sprint milestones, tasks, and audit history. Leverages foreign keys and cascade deletions with indexed project lookups.",
    securityDetails:
      "Handshake-level JWT validation for WebSocket connections and cookie-based session verification for REST API endpoints.",
    keyHighlights: [
      "Sub-18ms message delivery across multi-tenant rooms.",
      "Optimistic UI updates with automatic conflict rollback.",
      "Real-time presence indicators showing active team member cursors.",
      "Custom responsive board layout with zero layout shifts.",
    ],
  },
  {
    num: "03",
    category: "Full Stack MERN",
    title: "EasyMart Full-Stack Store",
    headline: "Full-featured e-commerce platform with atomic stock reservations and order processing.",
    description:
      "A complete e-commerce web platform engineered with the MERN stack (MongoDB, Express, React, Node.js). Features customer JWT authentication, shopping cart state management, checkout workflows, and an administrative inventory control portal.",
    fullOverview:
      "EasyMart provides a seamless online retail experience for buyers and a structured management dashboard for administrators. The core focus was ensuring product stock levels remain accurate even when multiple buyers check out the same item simultaneously.",
    stacks: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Bootstrap" },
    ],
    image: easyMart,
    urlPreview: "easy-mart-ecommerce-final.netlify.app",
    live: "https://easy-mart-ecommerce-final.netlify.app",
    github: "https://github.com/rakiburrahman307/easy-mart-react-ecommerce",
    architectureFlow: `React Client (Redux State Store)
      │
      ▼
[ Express.js REST API ] ──► (Auth Middleware, Input Validation)
      │
      ├────────────────────────┬──────────────────────────┐
      ▼                        ▼                          ▼
[ MongoDB Atlas Cluster ]  [ Order State Machine ]    [ Cloudinary CDN ]
(Mongoose Schemas)         (Atomic Inventory Holds)   (Optimized Assets)`,
    challenge:
      "Preventing out-of-stock ordering during flash sales and protecting customer payment sessions against replay attacks and token interception.",
    solution:
      "Implemented atomic MongoDB update queries ($inc inventory assertions) inside transactional checkouts, combined with secure HTTP-only cookies and CSRF protection headers.",
    metrics: [
      { label: "Products Served", val: "1,000+" },
      { label: "API Speed", val: "52ms" },
      { label: "Mobile Score", val: "96 / 100" },
      { label: "Uptime", val: "99.9%" },
    ],
    databaseDetails:
      "MongoDB collections for products, orders, users, and reviews. Compound indexes on category, price, and rating fields for rapid catalog search.",
    securityDetails:
      "Bcrypt password hashing (salt rounds: 10), signed JWT session tokens, and strict role guards separating buyer routes from inventory administration.",
    keyHighlights: [
      "Atomic cart checkout preventing overselling.",
      "Faceted search and category filtering with instant client updates.",
      "Comprehensive admin dashboard for inventory updates and sales logs.",
      "Fully responsive interface tested across mobile and desktop breakpoints.",
    ],
  },
  {
    num: "04",
    category: "Front-End & API Integration",
    title: "SkySnap Weather Platform",
    headline: "Meteorological analytics dashboard with client-side caching and interactive charting.",
    description:
      "An analytical weather dashboard built with React, TypeScript, Tailwind CSS, and Recharts. Connects to OpenWeatherMap API with intelligent client-side caching, hourly and 7-day chart visualization, geolocation queries, and metric conversions.",
    fullOverview:
      "SkySnap translates complex meteorological data feeds into clean, actionable visualizations. Designed for speed, it prevents redundant third-party API queries by caching location forecasts locally while keeping graphs smooth and responsive.",
    stacks: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Recharts" },
      { name: "OpenWeather API" },
    ],
    image: weatherApp,
    urlPreview: "sky-snap-weather-app.netlify.app",
    live: "https://sky-snap-weather-app.netlify.app",
    github: "https://github.com/rakiburrahman307/whether-app-react",
    architectureFlow: `React + TypeScript Client (Recharts Data Visualization)
      │
      ▼
[ Client-Side Storage Cache ] ──► (TTL 15 Min: Avoids Redundant API Calls)
      │
      ▼
[ OpenWeatherMap REST API ] ───► (Hourly Forecasts & Atmospheric Conditions)`,
    challenge:
      "Minimizing third-party API rate limit consumption while delivering fluid interactive temperature and precipitation charts during city switches.",
    solution:
      "Built a custom React cache layer with a 15-minute time-to-live (TTL) invalidation cycle and memoized Recharts datasets to prevent unnecessary canvas repainting.",
    metrics: [
      { label: "API Efficiency", val: "65% Fewer Calls" },
      { label: "Render Time", val: "16ms" },
      { label: "Lighthouse", val: "98 / 100" },
      { label: "TypeScript", val: "100% Strict" },
    ],
    databaseDetails:
      "Client-side structured state with localStorage persistence for recent searches and cached JSON weather snapshots.",
    securityDetails:
      "Environment variable isolation for third-party API keys and sanitized coordinate query parameters.",
    keyHighlights: [
      "65% reduction in external API usage through client-side caching.",
      "Dynamic hourly and weekly temperature curves rendered via Recharts.",
      "Automatic device geolocation detection with instant fallback search.",
      "100% strict TypeScript types with zero 'any' fallbacks.",
    ],
  },
  {
    num: "05",
    category: "Corporate Web Platform",
    title: "The New Era Consultancy",
    headline: "Production enterprise portal for global education and student counseling services.",
    description:
      "A corporate education and global career consultancy web platform. Engineered with high-performance responsive UI, dynamic country program listings, student assessment intake workflows, and smooth Framer Motion micro-interactions.",
    fullOverview:
      "The New Era Consultancy serves prospective international students looking for degree programs and visa guidance. The platform provides searchable country directories, admission requirements, and intake inquiry forms.",
    stacks: [
      { name: "React" },
      { name: "React Router" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: newEra,
    urlPreview: "consultancynewera.com",
    live: "https://consultancynewera.com",
    github: "https://github.com/rakiburrahman307/NEW-ERA-CONSULTANCY",
    architectureFlow: `Corporate React Web Client
      │
      ├──────► Framer Motion Interaction Layer
      │
      └──────► Application Gateway & Student Inquiry Pipeline`,
    challenge:
      "Delivering sub-second initial load times across overseas networks while presenting high-resolution imagery and multi-step student evaluation forms.",
    solution:
      "Optimized static imagery into modern WebP formats, split JavaScript bundles by route, and configured structured meta tags for search engine optimization.",
    metrics: [
      { label: "Load Time", val: "< 1.2s" },
      { label: "Inquiries Handled", val: "2,500+" },
      { label: "SEO Score", val: "100 / 100" },
      { label: "Live Domain", val: "Active" },
    ],
    databaseDetails:
      "Structured JSON catalog representing international university partner agreements, degree levels, and intake schedules.",
    securityDetails:
      "Client-side form field validation, reCAPTCHA protection, and sanitization of user-submitted contact coordinates.",
    keyHighlights: [
      "Sub-1.2s first contentful paint on mobile connections.",
      "Over 2,500 student inquiry leads captured and processed.",
      "Flawless 100/100 Lighthouse SEO and accessibility audit scores.",
      "Custom responsive layout designed for high conversion.",
    ],
  },
  {
    num: "06",
    category: "MERN Management System",
    title: "UniStayHub Hostel Management",
    headline: "Automated student accommodation, room allocation, and resident maintenance portal.",
    description:
      "A comprehensive hostel accommodation and resident allocation platform. Designed to automate room bookings, maintenance tickets, administrative announcements, and resident verification for universities.",
    fullOverview:
      "UniStayHub simplifies university dormitory administration by replacing manual logbooks with an automated portal where students can book beds, log maintenance issues, and track payment status.",
    stacks: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase Auth" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    image: uniStayHub,
    urlPreview: "unistayhub-hostel-manegement.netlify.app",
    live: "https://unistayhub-hostel-manegement.netlify.app",
    github: "https://github.com/rakiburrahman307/UniStyHub-Hostel-Management-ReactJs",
    architectureFlow: `Student / Admin React Client
      │
      ├──────► Firebase Authentication (Role: Resident vs Warden)
      │
      ▼
[ Node.js & Express API ] ──► (Room Allocation Engine & Maintenance Tracker)
      │
      ▼
[ MongoDB Database ]`,
    challenge:
      "Managing complex hostel bed allocation states and room occupancy disputes without requiring manual paper verification.",
    solution:
      "Engineered automated room occupancy state transitions with optimistic reservation holds and immediate warden notifications upon ticket submissions.",
    metrics: [
      { label: "Rooms Managed", val: "250+ Beds" },
      { label: "Booking Speed", val: "Instant" },
      { label: "Database", val: "MongoDB Atlas" },
      { label: "User Roles", val: "Multi-Tier" },
    ],
    databaseDetails:
      "Normalized MongoDB schemas linking resident profiles to assigned room numbers, payment records, and maintenance ticket logs.",
    securityDetails:
      "Role-based authorization verifying student credentials before granting access to accommodation booking controls.",
    keyHighlights: [
      "Zero double-booking errors across 250+ dormitory beds.",
      "Maintenance ticketing system with automated status workflows.",
      "Clear separation between student and warden administrative permissions.",
      "Fast data queries via indexed resident IDs.",
    ],
  },
  {
    num: "07",
    category: "Full Stack MERN",
    title: "Job Swift Career Platform",
    headline: "Recruitment portal with categorized job search and applicant tracking workflows.",
    description:
      "A recruitment engine linking talented professionals with top hiring companies. Features resume submission, categorized job search with multifaceted filters, employer job posting workflows, and applicant tracking.",
    fullOverview:
      "Job Swift provides an intuitive marketplace where companies can publish vacancies and candidates can browse by salary range, location, and required tech skills.",
    stacks: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    image: jobSwift,
    urlPreview: "job-swift-expolorejobs-managements.netlify.app",
    live: "https://job-swift-expolorejobs-managements.netlify.app",
    github: "https://github.com/rakiburrahman307/Assignment-11",
    architectureFlow: `Job Seeker & Recruiter Client
      │
      ▼
[ Express API Service ] ──► (Job Search & Filter Engine)
      │
      ▼
[ MongoDB Database ] ────► (Indexed by Category, Salary, & Location)`,
    challenge:
      "Executing fast multifaceted queries across hundreds of job listings with variable filtering criteria without causing full database table scans.",
    solution:
      "Configured compound database indexes on job category, salary bounds, and location fields to achieve sub-50ms query execution.",
    metrics: [
      { label: "Search Indexing", val: "< 50ms" },
      { label: "Filter Fields", val: "8+ Criteria" },
      { label: "Auth Provider", val: "Firebase" },
      { label: "Status", val: "Live" },
    ],
    databaseDetails:
      "MongoDB collections for job postings, company profiles, and applicant submissions with compound indexing on key filter keys.",
    securityDetails:
      "Protected recruiter endpoints ensuring companies can only edit or archive their own job listings.",
    keyHighlights: [
      "Sub-50ms search query response times across multi-field filters.",
      "Seamless applicant submission with attached resume links.",
      "Recruiter dashboard for managing incoming candidate applications.",
      "Responsive design optimized for both mobile and desktop screens.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedView, setSelectedView] = useState("preview"); // "preview" | "architecture" | "specs"
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const project = workspace[currentIndex];

  const handleSlideChange = useCallback((slider) => {
    setCurrentIndex(slider.activeIndex);
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
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 border-b border-white/10 pb-4'>
          <div>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold mb-2'>
              <BsTerminal className='text-[10px]' />
              <span>Engineering Portfolio</span>
            </div>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-white tracking-tight'>
              Featured <span className='text-accent'>Engineering Projects</span>
            </h1>
            <p className='text-white/60 text-sm mt-1 max-w-[650px] leading-relaxed'>
              Backend microservices, distributed queues, real-time collaboration engines, and full-stack web applications built for reliability.
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-xs font-semibold flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
              <span>{workspace.length} Production Systems</span>
            </span>
          </div>
        </div>

        <div className='flex flex-col xl:flex-row xl:gap-[40px] items-start'>
          {/* Left Column: Project Details */}
          <div className='w-full xl:w-[48%] flex flex-col justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[20px]'>
              {/* Outline number & Case study quick action */}
              <div className='flex items-baseline justify-between'>
                <div className='text-7xl sm:text-8xl leading-none font-extrabold text-transparent text-outline font-mono'>
                  {project?.num}
                </div>
                <Magnetic strength={0.25}>
                  <Button
                    onClick={() => setIsCaseStudyOpen(true)}
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2 border-accent/40 text-accent hover:bg-accent hover:text-primary transition-all duration-300 font-mono text-xs'
                  >
                    <FaCogs className='text-sm' />
                    <span>Deep Dive Case Study</span>
                  </Button>
                </Magnetic>
              </div>

              {/* Title & Category */}
              <div>
                <span className='text-accent text-xs font-mono font-semibold tracking-widest uppercase block mb-1.5'>
                  {project?.category}
                </span>
                <h2 className='text-2xl sm:text-3xl xl:text-4xl leading-tight font-extrabold text-white'>
                  {project?.title}
                </h2>
              </div>

              {/* Description */}
              <p className='text-white/75 leading-relaxed text-sm xl:text-base'>
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

              {/* Key Metrics Quick Preview */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-2.5'>
                {project?.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className='p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center'
                  >
                    <div className='text-accent font-mono font-bold text-xs sm:text-sm'>
                      {m.val}
                    </div>
                    <div className='text-white/50 text-[10px] uppercase font-mono tracking-wider mt-0.5'>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className='flex flex-wrap items-center gap-4 pt-2'>
                {/* Live project button */}
                <Magnetic strength={0.4}>
                  <Link href={project?.live} passHref target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[52px] h-[52px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
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
                </Magnetic>

                {/* GitHub project button */}
                <Magnetic strength={0.4}>
                  <Link href={project?.github} passHref target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[52px] h-[52px] rounded-full bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 flex justify-center items-center group transition-all duration-300'>
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
                </Magnetic>

                {/* Primary CTA: Case Study */}
                <Magnetic strength={0.3}>
                  <Button
                    onClick={() => setIsCaseStudyOpen(true)}
                    className='bg-accent text-primary font-bold hover:bg-accent-hover transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm h-[52px] px-6 rounded-full shadow-lg shadow-accent/20'
                  >
                    <BsCodeSquare className='text-base' />
                    <span>Inspect System Design</span>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right Column: Glossy Multi-View Carousel Card */}
          <div className='w-full xl:w-[52%] mb-8 xl:mb-0 relative group'>
            {/* Ambient neon radial glow */}
            <div className='pointer-events-none absolute -inset-2 bg-gradient-to-r from-accent/20 via-teal-500/10 to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700' />

            {/* Glossy Mac-style frame */}
            <div className='relative rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/15 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'>
              {/* Window Header */}
              <div className='flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-white/10 gap-2'>
                {/* Traffic lights */}
                <div className='flex items-center gap-2'>
                  <span className='w-3 h-3 rounded-full bg-[#ff5f56]' />
                  <span className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
                  <span className='w-3 h-3 rounded-full bg-[#27c93f]' />
                  <span className='text-white/40 text-xs font-mono ml-2 hidden sm:inline-block truncate max-w-[220px]'>
                    {project?.urlPreview || "api.rakibur.dev/service"}
                  </span>
                </div>

                {/* Multi-view Switcher Tabs */}
                <div className='flex items-center gap-1 bg-[#141418] p-1 rounded-xl border border-white/5'>
                  <button
                    onClick={() => setSelectedView("preview")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      selectedView === "preview"
                        ? "bg-accent text-primary font-bold shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <BsLayers className='text-xs' />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => setSelectedView("architecture")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      selectedView === "architecture"
                        ? "bg-accent text-primary font-bold shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <FaServer className='text-xs' />
                    <span>Architecture</span>
                  </button>
                  <button
                    onClick={() => setSelectedView("specs")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      selectedView === "specs"
                        ? "bg-accent text-primary font-bold shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <FaDatabase className='text-xs' />
                    <span>Specs</span>
                  </button>
                </div>
              </div>

              {/* Swiper Content Area */}
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[420px]'
                onSlideChange={handleSlideChange}
              >
                {workspace?.map((work, idx) => (
                  <SwiperSlide key={idx} className='w-full'>
                    <GsapTiltCard maxTilt={4} className='rounded-2xl h-full'>
                      <div className='h-[340px] sm:h-[400px] xl:h-[420px] relative rounded-2xl overflow-hidden bg-[#121217] border border-white/5'>
                        {/* View 1: UI / Media Preview */}
                        {selectedView === "preview" && (
                          <div
                            onClick={() => setIsCaseStudyOpen(true)}
                            className='relative w-full h-full cursor-pointer group/inner'
                          >
                            <Image
                              src={work?.image}
                              fill
                              alt={work?.title}
                              className='object-cover object-top group-hover/inner:scale-105 transition-transform duration-500'
                              priority={idx === 0}
                            />
                            {/* Overlay Vignette */}
                            <div className='absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-10'></div>

                            {/* Click to inspect badge */}
                            <div className='absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#1c1c22]/90 backdrop-blur-md border border-white/10 text-white/90 text-xs font-mono flex items-center gap-2 group-hover/inner:border-accent group-hover/inner:text-accent transition-all'>
                              <FaCogs className='text-accent' />
                              <span>Click for Architecture</span>
                            </div>
                          </div>
                        )}

                        {/* View 2: System Architecture Flow */}
                        {selectedView === "architecture" && (
                          <div
                            onClick={() => setIsCaseStudyOpen(true)}
                            className='w-full h-full p-4 sm:p-5 flex flex-col justify-between overflow-x-auto custom-scrollbar cursor-pointer'
                          >
                            <div className='flex items-center justify-between pb-2 border-b border-white/10'>
                              <span className='text-xs font-mono text-accent font-semibold flex items-center gap-1.5'>
                                <FaServer /> System Blueprint
                              </span>
                              <span className='text-[11px] font-mono text-white/40'>
                                Interactive ASCII Diagram
                              </span>
                            </div>
                            <pre className='font-mono text-xs sm:text-[13px] text-accent/95 my-auto overflow-x-auto custom-scrollbar leading-relaxed'>
{work?.architectureFlow}
                            </pre>
                            <div className='text-[11px] font-mono text-white/50 text-right'>
                              Click to view full metrics and database schema →
                            </div>
                          </div>
                        )}

                        {/* View 3: Specs & Database */}
                        {selectedView === "specs" && (
                          <div
                            onClick={() => setIsCaseStudyOpen(true)}
                            className='w-full h-full p-5 flex flex-col justify-between overflow-y-auto custom-scrollbar cursor-pointer text-left'
                          >
                            <div className='flex items-center justify-between pb-2 border-b border-white/10'>
                              <span className='text-xs font-mono text-accent font-semibold flex items-center gap-1.5'>
                                <FaDatabase /> Database &amp; Security Specs
                              </span>
                              <span className='text-[11px] font-mono text-white/40'>
                                Relational / Document
                              </span>
                            </div>

                            <div className='flex flex-col gap-3 my-auto'>
                              <div className='p-3 rounded-xl bg-white/[0.04] border border-white/5'>
                                <span className='text-xs font-mono text-accent font-bold block mb-1'>
                                  Database Storage
                                </span>
                                <p className='text-white/75 text-xs leading-relaxed'>
                                  {work?.databaseDetails}
                                </p>
                              </div>

                              <div className='p-3 rounded-xl bg-white/[0.04] border border-white/5'>
                                <span className='text-xs font-mono text-accent font-bold block mb-1'>
                                  Security &amp; Authorization
                                </span>
                                <p className='text-white/75 text-xs leading-relaxed'>
                                  {work?.securityDetails}
                                </p>
                              </div>
                            </div>

                            <div className='text-[11px] font-mono text-white/50 text-right'>
                              Click to inspect the complete case study →
                            </div>
                          </div>
                        )}
                      </div>
                    </GsapTiltCard>
                  </SwiperSlide>
                ))}

                {/* Glossy Upgraded Slider Controls */}
                <div className='absolute right-4 bottom-4 z-30'>
                  <WorkSliderButton
                    currentIndex={currentIndex}
                    totalCount={workspace.length}
                  />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* In-depth Case Study & Architecture Modal */}
      <ProjectArchitectureModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        project={project}
      />
    </motion.div>
  );
};

export default Work;
