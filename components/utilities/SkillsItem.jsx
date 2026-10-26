"use client";
import React, { useState } from "react";
import {
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiJsonwebtokens,
  SiSocketdotio,
  SiLinux,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "backend", name: "Backend & APIs" },
  { id: "database", name: "Databases & ORMs" },
  { id: "devops", name: "DevOps & Tools" },
  { id: "frontend", name: "Frontend" },
];

const allSkills = [
  // Backend & APIs
  { icon: <FaNodeJs />, name: "Node.js", category: "backend", role: "Backend Runtime" },
  { icon: <SiExpress />, name: "Express.js", category: "backend", role: "Backend Framework" },
  { icon: <SiNestjs />, name: "NestJS", category: "backend", role: "Enterprise Backend" },
  { icon: <SiTypescript />, name: "TypeScript", category: "backend", role: "Type-Safe Backend" },
  { icon: <FaServer />, name: "RESTful APIs", category: "backend", role: "API Architecture" },
  { icon: <SiGraphql />, name: "GraphQL", category: "backend", role: "Query Language" },
  { icon: <SiSocketdotio />, name: "Socket.io", category: "backend", role: "Real-time WebSockets" },
  { icon: <SiJsonwebtokens />, name: "JWT & Auth", category: "backend", role: "Security & Tokens" },

  // Databases & ORMs
  { icon: <SiPostgresql />, name: "PostgreSQL", category: "database", role: "Relational Database" },
  { icon: <SiPrisma />, name: "Prisma ORM", category: "database", role: "Database ORM" },
  { icon: <SiMongodb />, name: "MongoDB", category: "database", role: "NoSQL Database" },
  { icon: <SiRedis />, name: "Redis", category: "database", role: "Caching & Queues" },
  { icon: <FaDatabase />, name: "Data Modeling", category: "database", role: "Schema Architecture" },

  // DevOps & Tools
  { icon: <SiDocker />, name: "Docker", category: "devops", role: "Containerization" },
  { icon: <SiPostman />, name: "Postman", category: "devops", role: "API Testing & Docs" },
  { icon: <FaGitAlt />, name: "Git & GitHub", category: "devops", role: "Version Control" },
  { icon: <SiLinux />, name: "Linux / CLI", category: "devops", role: "Server Environments" },

  // Frontend & Full Stack
  { icon: <SiNextdotjs />, name: "Next.js", category: "frontend", role: "Full Stack React" },
  { icon: <FaReact />, name: "React.js", category: "frontend", role: "Frontend UI" },
  { icon: <FaJs />, name: "JavaScript", category: "frontend", role: "Core Language" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "frontend", role: "Modern Styling" },
  { icon: <FaHtml5 />, name: "HTML5", category: "frontend", role: "Semantic Markup" },
  { icon: <FaCss3 />, name: "CSS3", category: "frontend", role: "Responsive Design" },
];

const SkillsItem = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2 text-center xl:text-left'>
        <h3 className='text-3xl xl:text-4xl font-bold'>
          Backend & Software Engineering <span className='text-accent'>Stack</span>
        </h3>
        <p className='max-w-[620px] text-white/60 mx-auto xl:mx-0 text-sm xl:text-base leading-relaxed'>
          Specialized in high-concurrency backend services, clean architecture, REST/GraphQL APIs, relational and NoSQL databases, and modern full-stack web applications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className='flex flex-wrap gap-2 justify-center xl:justify-start'>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-accent text-primary font-semibold shadow-[0_0_15px_rgba(0,255,153,0.3)]"
                : "bg-[#232329] text-white/70 hover:text-white hover:bg-[#2c2c34] border border-white/5"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <ScrollArea className='h-[420px] pr-3'>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 xl:gap-4'>
          {filteredSkills.map((item, idx) => (
            <li key={idx}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-full p-4 bg-[#232329]/90 border border-white/5 hover:border-accent/40 rounded-xl flex flex-col justify-center items-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,153,0.12)] hover:-translate-y-0.5'>
                    <div className='text-4xl text-white/90 group-hover:text-accent transition-colors duration-300'>
                      {item.icon}
                    </div>
                    <span className='text-sm text-white font-semibold group-hover:text-accent transition-colors duration-300 text-center'>
                      {item.name}
                    </span>
                    <span className='text-[11px] text-white/40 group-hover:text-white/70 transition-colors text-center'>
                      {item.role}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='font-semibold'>{item.name} &mdash; {item.role}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default SkillsItem;
