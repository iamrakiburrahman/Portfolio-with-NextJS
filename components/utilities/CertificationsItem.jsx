import { ScrollArea } from "@/components/ui/scroll-area";
import { FaAward, FaCheckCircle, FaCode } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const credentials = {
  title: "Problem Solving & Certifications",
  description:
    "Continuous algorithmic problem solving, modern system design, and verified technical credentials in backend and full-stack software development.",
  highlights: [
    { title: "250+ Problems Solved", subtitle: "LeetCode & Codeforces DSA Practice" },
    { title: "Full Stack Web Specialization", subtitle: "Programming Hero Certified" },
    { title: "B.Sc in CSE (BUBT)", subtitle: "Computer Science & Engineering" },
  ],
  items: [
    {
      title: "Algorithmic Problem Solving & Data Structures",
      issuer: "LeetCode & HackerRank",
      year: "Active & Ongoing",
      badge: "DSA & Problem Solving",
      details: "Arrays, HashMaps, Two-Pointers, Binary Search, Trees, Dynamic Programming, and SQL query optimizations.",
    },
    {
      title: "Complete Web Development Certificate",
      issuer: "Programming Hero",
      year: "2023 - 2024",
      badge: "Full-Stack Development",
      details: "Comprehensive MERN stack, Next.js, Redux, JWT security, REST APIs, and production deployment pipelines.",
    },
    {
      title: "Backend Microservices & NestJS Masterclass",
      issuer: "Online Technical Academy",
      year: "2024",
      badge: "Backend Architecture",
      details: "Enterprise NestJS patterns, dependency injection, Prisma ORM, BullMQ, Redis caching, and Docker containers.",
    },
    {
      title: "Database Modeling: PostgreSQL & MongoDB",
      issuer: "Self-Paced / Enterprise Lab",
      year: "2023 - 2024",
      badge: "Database Engineering",
      details: "Normalized schemas, ACID transactions, composite indexing, aggregations, and ORM query optimization.",
    },
  ],
};

const CertificationsItem = () => (
  <div className='flex flex-col gap-[24px] text-center xl:text-left'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-3xl xl:text-4xl font-bold'>
        {credentials.title.split("&")[0]} &amp; <span className='text-accent'>{credentials.title.split("&")[1]}</span>
      </h2>
      <p className='max-w-[620px] text-white/60 mx-auto xl:mx-0 text-sm xl:text-base leading-relaxed'>
        {credentials.description}
      </p>
    </div>

    {/* Metric highlights */}
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      {credentials.highlights.map((h, i) => (
        <div
          key={i}
          className='p-3.5 rounded-xl bg-[#232329]/60 border border-white/5 flex flex-col items-center xl:items-start'
        >
          <div className='text-accent font-bold text-sm sm:text-base flex items-center gap-1.5'>
            <FaAward className='text-accent' />
            <span>{h.title}</span>
          </div>
          <span className='text-white/50 text-xs mt-0.5'>{h.subtitle}</span>
        </div>
      ))}
    </div>

    <ScrollArea className='h-[360px]'>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 pr-4'>
        {credentials.items.map((item, index) => (
          <li
            key={index}
            className='bg-[#232329] p-5 rounded-xl flex flex-col justify-between gap-3 border border-white/5 hover:border-accent/40 transition-all duration-300'
          >
            <div>
              <div className='flex items-center justify-between gap-2 mb-1'>
                <span className='text-accent font-mono text-xs font-semibold'>
                  {item.year}
                </span>
                <span className='px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[11px] border border-accent/20'>
                  {item.badge}
                </span>
              </div>
              <h3 className='text-base font-bold text-white text-left mt-1'>
                {item.title}
              </h3>
              <p className='text-white/50 text-xs text-left mt-0.5'>
                {item.issuer}
              </p>
            </div>
            <p className='text-white/70 text-xs text-left leading-relaxed border-t border-white/5 pt-2'>
              {item.details}
            </p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export default CertificationsItem;

