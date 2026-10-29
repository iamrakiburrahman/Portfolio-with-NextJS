"use client";

import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GsapTiltCard from "./gsap/GsapTiltCard";
import Magnetic from "./gsap/Magnetic";

const testimonials = [
  {
    name: "Tanvir Ahmed",
    role: "Senior Full Stack Lead & Tech Mentor",
    company: "Tech Horizon Lab",
    content:
      "Rakibur's grasp of backend architecture, NestJS microservices, and PostgreSQL query optimization is remarkable. He systematically addresses bottlenecks, writes clean modular code, and takes ownership of full-cycle delivery.",
    rating: 5,
  },
  {
    name: "Sabbir Hossain",
    role: "Operations & Project Coordinator",
    company: "The New Era Consultancy",
    content:
      "Working with Rakibur on the corporate portal was an absolute pleasure. He delivered a lightning-fast responsive interface, connected our inquiry workflows seamlessly, and finished ahead of schedule.",
    rating: 5,
  },
  {
    name: "Farhan Karim",
    role: "Full Stack Engineer & Peer",
    company: "BUBT CSE Alumni Network",
    content:
      "Exceptional algorithmic problem-solving instincts. Whether implementing Redis caching layers, Dockerizing apps, or architecting WebSocket events, Rakibur always prioritizes system resilience and clean architecture.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const item = testimonials[current];

  return (
    <section className='py-12 border-t border-white/5'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4'>
          <div>
            <div className='inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold mb-2'>
              <FaStar className='text-accent' />
              <span>Peer &amp; Client Endorsements</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
              What Collaborators <span className='text-accent'>Say</span>
            </h2>
          </div>

          <div className='flex items-center gap-3'>
            <Magnetic strength={0.45}>
              <button
                onClick={prev}
                className='w-10 h-10 rounded-full bg-[#232329] border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center text-white/80 transition-all'
                aria-label='Previous recommendation'
              >
                <FaChevronLeft className='text-sm' />
              </button>
            </Magnetic>
            <div className='text-xs font-mono text-white/40'>
              {current + 1} / {testimonials.length}
            </div>
            <Magnetic strength={0.45}>
              <button
                onClick={next}
                className='w-10 h-10 rounded-full bg-[#232329] border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center text-white/80 transition-all'
                aria-label='Next recommendation'
              >
                <FaChevronRight className='text-sm' />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Testimonial Card with GSAP 3D Tilt */}
        <GsapTiltCard maxTilt={5} className='rounded-2xl'>
          <div className='relative p-6 sm:p-8 rounded-2xl bg-[#232329]/60 border border-white/10 hover:border-accent/40 transition-colors duration-300'>
            <FaQuoteLeft className='text-4xl sm:text-5xl text-accent/20 absolute top-6 right-6' />

            <div className='flex gap-1 mb-4'>
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className='text-accent text-sm' />
              ))}
            </div>

            <p className='text-base sm:text-lg text-white/85 leading-relaxed italic max-w-[850px] mb-6'>
              &ldquo;{item.content}&rdquo;
            </p>

            <div className='flex items-center justify-between border-t border-white/5 pt-4'>
              <div>
                <h4 className='text-white font-bold text-base sm:text-lg'>
                  {item.name}
                </h4>
                <p className='text-white/50 text-xs sm:text-sm'>
                  {item.role} • <span className='text-accent/90'>{item.company}</span>
                </p>
              </div>
            </div>
          </div>
        </GsapTiltCard>
      </div>
    </section>
  );
};

export default Testimonials;
