"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaServer, FaDatabase, FaShieldAlt, FaRocket } from "react-icons/fa";
import Link from "next/link";

const ProjectArchitectureModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-3xl bg-[#1c1c22] border-white/10 text-white'>
        <DialogHeader className='text-left border-b border-white/10 pb-4'>
          <div className='flex items-center gap-3'>
            <span className='px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase font-semibold'>
              {project.category}
            </span>
            <span className='text-white/40 text-sm font-mono'>#{project.num}</span>
          </div>
          <DialogTitle className='text-2xl sm:text-3xl font-extrabold text-white mt-2'>
            {project.title} — System Architecture &amp; Engineering Case Study
          </DialogTitle>
          <DialogDescription className='text-white/70 text-sm mt-1'>
            Detailed architectural breakdown, design choices, performance metrics, and production highlights.
          </DialogDescription>
        </DialogHeader>

        <div className='flex flex-col gap-6 py-4'>
          {/* Architecture Flow Diagram */}
          <div className='p-4 rounded-xl bg-[#141418] border border-white/10'>
            <div className='flex items-center gap-2 mb-3 text-accent font-semibold text-sm'>
              <FaServer />
              <span>System Request &amp; Data Flow</span>
            </div>
            <div className='p-3.5 rounded-lg bg-[#0e0e11] font-mono text-xs text-white/80 overflow-x-auto custom-scrollbar leading-relaxed border border-white/5'>
              <pre className='text-accent/90'>
{project.architectureFlow ||
`Client Request
      │
      ▼
[ Reverse Proxy / API Gateway ] ───► (Rate Limiter: 100 req/min)
      │
      ▼
[ NestJS / Node.js Microservice ] ──► (JWT Verification & RBAC)
      │
      ├───────────────────────┬────────────────────────┐
      ▼                       ▼                        ▼
[ In-Memory Redis Cache ]  [ PostgreSQL / Prisma ]  [ Background Workers ]
(Sub-5ms Latency)          (Indexed Relational DB)  (BullMQ Async Jobs)`}
              </pre>
            </div>
          </div>

          {/* Core Engineering Problem & Solution */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 rounded-xl bg-[#232329]/60 border border-white/5 flex flex-col gap-2'>
              <div className='flex items-center gap-2 text-rose-400 font-semibold text-sm'>
                <FaShieldAlt />
                <span>The Engineering Challenge</span>
              </div>
              <p className='text-white/75 text-xs sm:text-sm leading-relaxed'>
                {project.challenge ||
                  "Handling concurrent user requests, preventing race conditions during state transitions, and keeping database queries optimized without introducing latency bottlenecks."}
              </p>
            </div>

            <div className='p-4 rounded-xl bg-[#232329]/60 border border-white/5 flex flex-col gap-2'>
              <div className='flex items-center gap-2 text-accent font-semibold text-sm'>
                <FaRocket />
                <span>Architectural Solution</span>
              </div>
              <p className='text-white/75 text-xs sm:text-sm leading-relaxed'>
                {project.solution ||
                  "Introduced an in-memory Redis caching layer with intelligent TTLs, composite database indexing on foreign keys, and atomic transaction isolation to ensure data integrity."}
              </p>
            </div>
          </div>

          {/* Key Measurable Metrics */}
          <div className='p-4 rounded-xl bg-[#232329]/40 border border-accent/20'>
            <div className='flex items-center gap-2 mb-3 text-white font-semibold text-sm'>
              <FaDatabase className='text-accent' />
              <span>Production Metrics &amp; Benchmarks</span>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 text-center'>
              {(project.metrics || [
                { label: "Throughput", val: "1,500+ Req/s" },
                { label: "Query Latency", val: "< 40ms" },
                { label: "Cache Hit Rate", val: "94.2%" },
                { label: "Availability", val: "99.9% Uptime" },
              ]).map((m, idx) => (
                <div key={idx} className='p-2.5 rounded-lg bg-[#141418] border border-white/5'>
                  <div className='text-accent font-mono font-bold text-sm sm:text-base'>
                    {m.val}
                  </div>
                  <div className='text-white/50 text-[11px] uppercase tracking-wider mt-0.5'>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className='text-white/60 text-xs uppercase tracking-wider font-semibold mb-2'>
              Technologies Applied
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.stacks?.map((st, i) => (
                <span
                  key={i}
                  className='px-3 py-1 rounded-md bg-[#232329] border border-white/10 text-accent font-mono text-xs font-medium'
                >
                  {st.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className='flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10'>
            <div className='text-xs text-white/50'>
              Production URL: <span className='text-white/80'>{project.live}</span>
            </div>
            <div className='flex items-center gap-3'>
              {project.github && (
                <Link
                  href={project.github}
                  target='_blank'
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 text-white text-sm transition-all duration-300'
                >
                  <BsGithub className='text-base' />
                  <span>Repository</span>
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target='_blank'
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-accent-hover transition-all duration-300'
                >
                  <span>Launch Live</span>
                  <BsArrowUpRight className='text-base' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectArchitectureModal;

