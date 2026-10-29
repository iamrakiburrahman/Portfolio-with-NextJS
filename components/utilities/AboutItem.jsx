"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaCheck,
  FaTerminal,
} from "react-icons/fa";
import GsapTiltCard from "../gsap/GsapTiltCard";

const AboutItem = () => {
  const focusAreas = [
    {
      icon: <FaServer className='text-accent text-xl' />,
      title: "Backend & Systems",
      desc: "Architecting modular microservices and clean REST/GraphQL APIs with NestJS, Express, and TypeScript. I prioritize separation of concerns, strict input validation, and asynchronous processing using BullMQ queues.",
    },
    {
      icon: <FaDatabase className='text-accent text-xl' />,
      title: "Databases & Data Integrity",
      desc: "Modeling normalized schemas with PostgreSQL and MongoDB via Prisma ORM. Focused on query indexing, atomic transaction boundaries, and Redis caching layers for sub-50ms round trips.",
    },
    {
      icon: <FaLayerGroup className='text-accent text-xl' />,
      title: "Full-Stack Craftsmanship",
      desc: "Connecting reliable backend infrastructure to responsive Next.js and React interfaces. I value real-time WebSocket communication, zero cumulative layout shift (CLS), and accessible user interfaces.",
    },
  ];

  const engineeringPrinciples = [
    {
      title: "Code Clarity",
      desc: "Readable, typed TypeScript with explicit contracts. I prefer clear, maintainable logic over convoluted cleverness.",
    },
    {
      title: "Performance by Default",
      desc: "Fast database queries backed by proper indexes, in-memory caching, and lightweight JSON payloads.",
    },
    {
      title: "Production Observability",
      desc: "Structured logging, comprehensive error handling, and health endpoints so systems fail gracefully and remain easy to debug.",
    },
    {
      title: "Continuous Learning",
      desc: "Studying RFCs, distributed systems literature, and open-source codebases to bring proven engineering patterns to every build.",
    },
  ];

  const quickCoordinates = [
    {
      icon: <FaMapMarkerAlt className='text-accent' />,
      label: "Location",
      value: "Dhaka, Bangladesh (Remote Worldwide)",
    },
    {
      icon: <FaGraduationCap className='text-accent' />,
      label: "Degree",
      value: "B.Sc. in Computer Science & Engineering, BUBT",
    },
    {
      icon: <FaBriefcase className='text-accent' />,
      label: "Experience",
      value: "2+ Years in Production Software Development",
    },
    {
      icon: <FaEnvelope className='text-accent' />,
      label: "Direct Email",
      value: "rakiburrahman307@gmail.com",
    },
    {
      icon: <FaCode className='text-accent' />,
      label: "Primary Stack",
      value: "NestJS, Node.js, TypeScript, PostgreSQL, Prisma, Redis, Next.js",
    },
  ];

  return (
    <div className='flex flex-col gap-10 text-left max-w-[800px] mx-auto xl:mx-0'>
      {/* Header & Personal Story */}
      <div className='flex flex-col gap-4'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold w-max'>
          <FaTerminal className='text-[10px]' />
          <span>About My Engineering Journey</span>
        </div>

        <h2 className='text-3xl sm:text-4xl font-extrabold text-white tracking-tight'>
          Engineering dependable systems from the <span className='text-accent'>ground up</span>.
        </h2>

        <div className='flex flex-col gap-3.5 text-white/75 text-base sm:text-lg leading-relaxed'>
          <p>
            I am Rakibur Rahman, a backend-focused full-stack software engineer based in Dhaka, Bangladesh. Over the past two years, I have built web platforms and backend services that solve real business operational challenges.
          </p>
          <p className='text-sm sm:text-base text-white/65 leading-relaxed'>
            My interest is in system architecture: understanding how requests travel from an edge proxy down to the database, ensuring database connection pools remain stable under load, and designing clean interfaces that other engineers can contribute to with ease. I build with pragmatism: avoiding premature complexity, benchmarking critical queries, and testing happy and edge paths alike.
          </p>
        </div>
      </div>

      {/* Focus Pillars (Glossy Glass Cards) */}
      <div className='flex flex-col gap-3'>
        <h3 className='text-sm font-mono uppercase tracking-wider text-white/40'>
          Core Focus Areas
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {focusAreas.map((area, idx) => (
            <GsapTiltCard key={idx} maxTilt={6} className='rounded-2xl h-full'>
              <div className='p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between gap-3 shadow-lg'>
                <div className='w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0'>
                  {area.icon}
                </div>
                <div>
                  <h4 className='text-white font-bold text-base mb-1.5'>
                    {area.title}
                  </h4>
                  <p className='text-white/65 text-xs sm:text-sm leading-relaxed'>
                    {area.desc}
                  </p>
                </div>
              </div>
            </GsapTiltCard>
          ))}
        </div>
      </div>

      {/* Engineering Principles */}
      <div className='flex flex-col gap-3'>
        <h3 className='text-sm font-mono uppercase tracking-wider text-white/40'>
          Engineering Principles
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {engineeringPrinciples.map((item, idx) => (
            <div
              key={idx}
              className='p-4 rounded-xl bg-[#1c1c22]/70 border border-white/5 hover:border-white/15 transition-colors flex items-start gap-3'
            >
              <div className='w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5'>
                <FaCheck className='text-accent text-[10px]' />
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-semibold text-sm mb-1'>
                  {item.title}
                </span>
                <span className='text-white/60 text-xs leading-relaxed'>
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Identity / Coordinates Bar */}
      <div className='flex flex-col gap-3 pt-2 border-t border-white/10'>
        <h3 className='text-sm font-mono uppercase tracking-wider text-white/40'>
          Coordinates &amp; Details
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
          {quickCoordinates.map((coord, idx) => (
            <div
              key={idx}
              className='flex items-center gap-3 p-3 rounded-xl bg-[#18181d]/80 border border-white/5 text-xs sm:text-sm'
            >
              <div className='w-8 h-8 rounded-lg bg-[#232329] flex items-center justify-center shrink-0'>
                {coord.icon}
              </div>
              <div className='flex flex-col min-w-0 overflow-hidden'>
                <span className='text-white/40 text-[11px]'>{coord.label}</span>
                <span className='text-white/90 font-medium truncate'>
                  {coord.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
