"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BsArrowUpRight, BsGithub, BsCodeSlash, BsSpeedometer2 } from "react-icons/bs";
import {
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Link from "next/link";
import Magnetic from "./gsap/Magnetic";

const ProjectArchitectureModal = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#16161b] border-white/10 text-white p-6 sm:p-8 rounded-2xl'>
        {/* Header */}
        <DialogHeader className='text-left border-b border-white/10 pb-5'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
              <span className='px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase font-semibold'>
                {project.category}
              </span>
              <span className='text-white/40 text-xs font-mono'>
                Project #{project.num}
              </span>
            </div>
            
            {/* Quick Links */}
            <div className='flex items-center gap-2'>
              {project.github && (
                <Magnetic strength={0.2}>
                  <Link
                    href={project.github}
                    target='_blank'
                    className='px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent text-white/80 text-xs font-mono flex items-center gap-1.5 transition-all'
                  >
                    <BsGithub />
                    <span>Source</span>
                  </Link>
                </Magnetic>
              )}
              {project.live && (
                <Magnetic strength={0.2}>
                  <Link
                    href={project.live}
                    target='_blank'
                    className='px-3 py-1.5 rounded-lg bg-accent text-primary hover:bg-accent-hover font-semibold text-xs font-mono flex items-center gap-1.5 transition-all'
                  >
                    <span>Live Demo</span>
                    <BsArrowUpRight />
                  </Link>
                </Magnetic>
              )}
            </div>
          </div>

          <DialogTitle className='text-2xl sm:text-3xl font-extrabold text-white mt-3'>
            {project.title}
          </DialogTitle>
          <DialogDescription className='text-white/70 text-sm mt-1 leading-relaxed'>
            {project.headline || project.description}
          </DialogDescription>

          {/* Navigation Tabs */}
          <div className='flex flex-wrap items-center gap-2 mt-4 pt-2'>
            {[
              { id: "overview", label: "Overview & Context" },
              { id: "architecture", label: "System Architecture" },
              { id: "database", label: "Database & APIs" },
              { id: "challenges", label: "Hurdles & Metrics" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-accent text-primary font-bold shadow-md shadow-accent/20"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </DialogHeader>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className='flex flex-col gap-6 py-4'>
            <div className='flex flex-col gap-3'>
              <h4 className='text-sm font-mono uppercase tracking-wider text-accent font-semibold'>
                Project Purpose &amp; Execution
              </h4>
              <p className='text-white/80 text-sm sm:text-base leading-relaxed'>
                {project.fullOverview || project.description}
              </p>
            </div>

            {/* Core Responsibilities / What was delivered */}
            <div className='p-5 rounded-xl bg-[#1c1c23] border border-white/5'>
              <h5 className='text-white font-bold text-sm mb-3 flex items-center gap-2'>
                <FaServer className='text-accent' />
                <span>Key Engineering Highlights</span>
              </h5>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/75'>
                {(project.keyHighlights || [
                  "Designed stateless REST APIs with structured controllers and services.",
                  "Enforced type-safety end-to-end using TypeScript and Zod validation.",
                  "Configured automated migrations and schema synchronization.",
                  "Added role-based access control (RBAC) with secure JSON Web Tokens.",
                ]).map((highlight, idx) => (
                  <div key={idx} className='flex items-start gap-2.5'>
                    <span className='w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0' />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <div className='text-white/50 text-xs uppercase tracking-wider font-semibold mb-2.5'>
                Technologies &amp; Libraries
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.stacks?.map((st, i) => (
                  <span
                    key={i}
                    className='px-3 py-1.5 rounded-lg bg-[#22222a] border border-white/10 text-accent font-mono text-xs font-medium'
                  >
                    {st.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture */}
        {activeTab === "architecture" && (
          <div className='flex flex-col gap-5 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 text-accent font-semibold text-sm'>
                <FaServer className='text-accent' />
                <span>System Request &amp; Pipeline Flow</span>
              </div>
              <span className='text-white/40 text-xs font-mono'>
                Synchronous &amp; Async Paths
              </span>
            </div>

            {/* Architecture Flow Box */}
            <div className='p-4 rounded-xl bg-[#0e0e12] font-mono text-xs text-white/80 overflow-x-auto custom-scrollbar border border-white/10 shadow-inner'>
              <pre className='text-accent/95 leading-relaxed'>
{project.architectureFlow ||
`Client Request (HTTPS)
      │
      ▼
[ Reverse Proxy / API Gateway ] ───► Rate Limiter & Security Headers
      │
      ▼
[ Core Application Service ] ────────► JWT Auth & RBAC Authorization
      │
      ├───────────────────────┬────────────────────────┐
      ▼                       ▼                        ▼
[ In-Memory Redis Cache ]  [ Relational DB / Prisma ] [ BullMQ Async Worker ]
(Sub-5ms hot query cache)  (Normalized PostgreSQL)   (Background jobs & emails)`}
              </pre>
            </div>

            <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
              {project.architectureExplanation ||
                "Requests enter through an edge gateway where rate limits and security headers are validated. Core requests are processed statelessly, querying the Redis cache first for frequent reads, falling back to PostgreSQL, and queuing computationally heavy tasks into BullMQ worker threads."}
            </p>
          </div>
        )}

        {/* Tab 3: Database & APIs */}
        {activeTab === "database" && (
          <div className='flex flex-col gap-5 py-4'>
            <div className='flex items-center gap-2 text-accent font-semibold text-sm'>
              <FaDatabase className='text-accent' />
              <span>Data Modeling &amp; API Strategy</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Schema Design */}
              <div className='p-4 rounded-xl bg-[#1c1c23] border border-white/5 flex flex-col gap-2'>
                <h5 className='text-white font-bold text-sm flex items-center gap-2'>
                  <FaDatabase className='text-accent text-xs' />
                  <span>Database Schema &amp; Storage</span>
                </h5>
                <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
                  {project.databaseDetails ||
                    "Structured relational schemas with foreign key constraints and compound indexing on frequently queried columns (user IDs, status flags, timestamps) to eliminate full table scans."}
                </p>
              </div>

              {/* Security & Auth */}
              <div className='p-4 rounded-xl bg-[#1c1c23] border border-white/5 flex flex-col gap-2'>
                <h5 className='text-white font-bold text-sm flex items-center gap-2'>
                  <FaShieldAlt className='text-accent text-xs' />
                  <span>Authentication &amp; Protection</span>
                </h5>
                <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
                  {project.securityDetails ||
                    "Stateless authentication via JSON Web Tokens stored in secure HTTP-only cookies. Strict payload sanitization prevents SQL injection and cross-site scripting."}
                </p>
              </div>
            </div>

            {/* Endpoints breakdown */}
            <div className='p-4 rounded-xl bg-[#0e0e12] border border-white/5'>
              <div className='text-white/50 text-xs font-mono uppercase mb-2'>
                Sample Route Signatures
              </div>
              <div className='font-mono text-xs text-white/80 space-y-1.5'>
                <div>
                  <span className='text-emerald-400 font-bold'>POST</span>{" "}
                  <span className='text-white/90'>/api/v1/auth/session</span>{" "}
                  <span className='text-white/40'>- Issue signed token</span>
                </div>
                <div>
                  <span className='text-sky-400 font-bold'>GET </span>{" "}
                  <span className='text-white/90'>/api/v1/workspaces/:id</span>{" "}
                  <span className='text-white/40'>- Read cached resource</span>
                </div>
                <div>
                  <span className='text-amber-400 font-bold'>PUT </span>{" "}
                  <span className='text-white/90'>/api/v1/tasks/:id/state</span>{" "}
                  <span className='text-white/40'>- Atomic status transition</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Challenges & Benchmarks */}
        {activeTab === "challenges" && (
          <div className='flex flex-col gap-6 py-4'>
            {/* The Real Problem & The Solution */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-4 rounded-xl bg-[#1e171b] border border-rose-500/20 flex flex-col gap-2'>
                <div className='flex items-center gap-2 text-rose-400 font-semibold text-sm'>
                  <FaExclamationTriangle />
                  <span>The Engineering Challenge</span>
                </div>
                <p className='text-white/80 text-xs sm:text-sm leading-relaxed'>
                  {project.challenge}
                </p>
              </div>

              <div className='p-4 rounded-xl bg-[#14221b] border border-emerald-500/20 flex flex-col gap-2'>
                <div className='flex items-center gap-2 text-accent font-semibold text-sm'>
                  <FaCheckCircle />
                  <span>The Solution Implemented</span>
                </div>
                <p className='text-white/80 text-xs sm:text-sm leading-relaxed'>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Production Benchmarks */}
            <div className='p-5 rounded-xl bg-[#1c1c23] border border-accent/20'>
              <div className='flex items-center gap-2 mb-4 text-white font-semibold text-sm'>
                <BsSpeedometer2 className='text-accent' />
                <span>Production Metrics &amp; Benchmarks</span>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 text-center'>
                {project.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className='p-3 rounded-lg bg-[#121217] border border-white/5'
                  >
                    <div className='text-accent font-mono font-bold text-base sm:text-lg'>
                      {m.val}
                    </div>
                    <div className='text-white/50 text-[11px] uppercase tracking-wider mt-1'>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className='flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10'>
          <span className='text-xs font-mono text-white/50'>
            Engineered by Md. Rakibur Rahman
          </span>
          <div className='flex items-center gap-3'>
            <button
              onClick={onClose}
              className='px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-xs font-mono transition-colors'
            >
              Close Window
            </button>
            {project.live && (
              <Link
                href={project.live}
                target='_blank'
                className='px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-xs font-mono hover:bg-accent-hover transition-colors flex items-center gap-1.5'
              >
                <span>Launch Live Application</span>
                <FaExternalLinkAlt className='text-[10px]' />
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectArchitectureModal;
