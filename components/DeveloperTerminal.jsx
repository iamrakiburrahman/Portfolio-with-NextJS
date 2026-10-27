"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiTerminal, FiMinus, FiMaximize2, FiX } from "react-icons/fi";

const initialHistory = [
  {
    type: "output",
    content: (
      <div className='text-white/80 space-y-1 font-mono text-xs sm:text-sm'>
        <div className='text-accent font-bold'>
          ⚡ Rakibur Rahman Developer CLI [Version 2.4.0-release]
        </div>
        <div className='text-white/60'>
          Type <span className='text-accent font-semibold'>help</span> to list commands or <span className='text-accent font-semibold'>sudo hire</span> to start collaboration.
        </div>
      </div>
    ),
  },
];

const DeveloperTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-terminal", handleOpen);
    return () => window.removeEventListener("open-terminal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    const newEntry = { type: "input", content: `rakib@portfolio:~$ ${rawCmd}` };

    if (!cmd) {
      setHistory((prev) => [...prev, newEntry]);
      return;
    }

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);

    let outputContent = null;

    switch (cmd) {
      case "help":
        outputContent = (
          <div className='space-y-1 text-xs sm:text-sm text-white/80 font-mono'>
            <div className='text-accent font-semibold'>Available Commands:</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2'>
              <div><span className='text-accent font-bold'>about</span> — Engineer background &amp; role</div>
              <div><span className='text-accent font-bold'>skills</span> — Backend, DB &amp; DevOps stack</div>
              <div><span className='text-accent font-bold'>projects</span> — List featured case studies</div>
              <div><span className='text-accent font-bold'>contact</span> — Email, phone &amp; direct info</div>
              <div><span className='text-accent font-bold'>curl email</span> — Copy email to clipboard</div>
              <div><span className='text-accent font-bold'>cat cv</span> — Download Curriculum Vitae</div>
              <div><span className='text-accent font-bold'>sudo hire</span> — Fast-track hiring flow</div>
              <div><span className='text-accent font-bold'>ping</span> — Live API latency benchmark</div>
              <div><span className='text-accent font-bold'>whoami</span> — Identity probe</div>
              <div><span className='text-accent font-bold'>clear</span> — Clear terminal output</div>
              <div><span className='text-accent font-bold'>exit</span> — Minimize terminal window</div>
            </div>
          </div>
        );
        break;

      case "about":
        outputContent = (
          <div className='space-y-1 text-xs sm:text-sm text-white/80 font-mono'>
            <div className='text-accent font-bold'>Md. Rakibur Rahman</div>
            <div>Role: Backend Architect &amp; Full Stack Software Engineer</div>
            <div>Focus: Scalable Microservices, REST &amp; GraphQL APIs, Relational &amp; NoSQL DBs</div>
            <div>Stack: Node.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis, Docker</div>
            <div>Location: Mirpur, Dhaka, Bangladesh</div>
            <div>Email: <a href='mailto:rakiburrahman307@gmail.com' className='text-accent underline'>rakiburrahman307@gmail.com</a></div>
          </div>
        );
        break;

      case "skills":
        outputContent = (
          <div className='space-y-2 text-xs sm:text-sm text-white/80 font-mono'>
            <div><span className='text-accent font-bold'>[Backend &amp; APIs]</span>: Node.js, Express, NestJS, TypeScript, REST, GraphQL, WebSockets (Socket.io)</div>
            <div><span className='text-accent font-bold'>[Databases &amp; Caching]</span>: PostgreSQL, Prisma ORM, MongoDB, Redis, Mongoose</div>
            <div><span className='text-accent font-bold'>[DevOps &amp; Tools]</span>: Docker, Git, GitHub Actions, Linux/Bash, Postman, Nginx</div>
            <div><span className='text-accent font-bold'>[Frontend &amp; UI]</span>: Next.js 14, React, Tailwind CSS, Redux, Framer Motion</div>
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className='space-y-1.5 text-xs sm:text-sm text-white/80 font-mono'>
            <div className='text-accent font-bold'>Featured Engineering Showcases:</div>
            <div>1. <span className='text-accent'>PulseEngine API</span> — Distributed NestJS microservices with Redis &amp; BullMQ</div>
            <div>2. <span className='text-accent'>DevFlow Workspace</span> — Real-time collaborative sprint board with WebSockets</div>
            <div>3. <span className='text-accent'>EasyMart</span> — Full-stack MERN e-commerce with cart &amp; admin controls</div>
            <div>4. <span className='text-accent'>SkySnap Weather</span> — React &amp; TypeScript meteorological analytics dashboard</div>
            <div>5. <span className='text-accent'>The New Era</span> — Corporate global education and consultancy portal</div>
            <div>6. <span className='text-accent'>UniStayHub</span> — Comprehensive university hostel management system</div>
            <div className='text-white/50 text-[11px] pt-1'>Run &apos;goto /work&apos; or press Ctrl+K to inspect architecture diagrams.</div>
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className='space-y-1 text-xs sm:text-sm text-white/80 font-mono'>
            <div className='text-accent font-bold'>Get in Touch:</div>
            <div>Email: rakiburrahman307@gmail.com</div>
            <div>Phone: (+880) 1749183977</div>
            <div>Website: https://iamrakiburrahman.netlify.app/</div>
            <div>GitHub: https://github.com/iamrakiburrahman</div>
            <div>LinkedIn: https://linkedin.com/in/iamrakiburrahman</div>
          </div>
        );
        break;

      case "curl email":
      case "email":
        navigator.clipboard.writeText("rakiburrahman307@gmail.com");
        outputContent = (
          <div className='text-accent font-mono text-xs sm:text-sm font-semibold'>
            ✓ Successfully copied rakiburrahman307@gmail.com to clipboard!
          </div>
        );
        break;

      case "cat cv":
      case "cv":
      case "resume":
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Rakibur_Rahman_CV.pdf";
        link.click();
        outputContent = (
          <div className='text-accent font-mono text-xs sm:text-sm'>
            ✓ Initiating CV download: Rakibur_Rahman_CV.pdf
          </div>
        );
        break;

      case "sudo hire":
      case "hire":
        outputContent = (
          <div className='space-y-1 text-xs sm:text-sm font-mono'>
            <div className='text-accent font-bold text-sm'>
              🚀 ACCESS GRANTED: Redirecting to Contact &amp; Collaboration Desk...
            </div>
            <div className='text-white/70'>Let&apos;s build scalable, world-class systems together!</div>
          </div>
        );
        setTimeout(() => {
          setIsOpen(false);
          router.push("/contact");
        }, 1200);
        break;

      case "ping":
      case "ping backend":
        outputContent = (
          <div className='space-y-1 text-xs font-mono text-accent'>
            <div>PING api.iamrakiburrahman.dev (127.0.0.1): 56 data bytes</div>
            <div>64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=18.421 ms</div>
            <div>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=17.892 ms</div>
            <div className='text-white/70'>--- 0% packet loss | Latency: 18.1ms | Health: 100% Operational ---</div>
          </div>
        );
        break;

      case "whoami":
        outputContent = (
          <div className='text-accent font-mono text-xs sm:text-sm'>
            A forward-thinking recruiter, engineering lead, or collaborator exploring top developer talent!
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        setIsOpen(false);
        return;

      default:
        outputContent = (
          <div className='text-rose-400 font-mono text-xs sm:text-sm'>
            command not found: {rawCmd}. Type <span className='text-accent font-semibold'>help</span> for valid commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, newEntry, { type: "output", content: outputContent }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx =
          historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIdx(-1);
          setInputVal("");
        } else {
          setHistoryIdx(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const suggestions = [
        "help",
        "about",
        "skills",
        "projects",
        "contact",
        "curl email",
        "cat cv",
        "sudo hire",
        "ping",
        "clear",
      ];
      const match = suggestions.find((s) => s.startsWith(inputVal.toLowerCase().trim()));
      if (match) setInputVal(match);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className='fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1c1c22] border border-accent/40 text-accent font-mono text-xs font-semibold shadow-2xl hover:scale-105 hover:bg-accent hover:text-primary transition-all duration-300 group'
        aria-label='Open Developer CLI Terminal'
      >
        <span className='relative flex h-2.5 w-2.5'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
          <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-accent'></span>
        </span>
        <FiTerminal className='text-base' />
        <span className='hidden sm:inline'>Terminal (CLI)</span>
      </button>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200'>
          <div
            className='w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[85vh]'
            onClick={() => inputRef.current?.focus()}
          >
            {/* Window Bar */}
            <div className='flex items-center justify-between px-4 py-3 bg-[#1e1e24] border-b border-white/10 select-none'>
              <div className='flex items-center gap-2'>
                <div
                  onClick={() => setIsOpen(false)}
                  className='w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 cursor-pointer'
                />
                <div
                  onClick={() => setHistory([])}
                  className='w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 cursor-pointer'
                />
                <div
                  onClick={() => inputRef.current?.focus()}
                  className='w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 cursor-pointer'
                />
              </div>

              <div className='flex items-center gap-2 text-white/60 font-mono text-xs'>
                <FiTerminal className='text-accent' />
                <span>rakib@portfolio: ~ (zsh)</span>
              </div>

              <div className='flex items-center gap-2 text-white/40'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='hover:text-white transition-colors'
                >
                  <FiX className='text-lg' />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className='flex-1 p-4 overflow-y-auto custom-scrollbar space-y-3 font-mono text-xs sm:text-sm bg-[#0e0e11]'>
              {history.map((item, idx) => (
                <div key={idx}>
                  {item.type === "input" ? (
                    <div className='text-accent font-semibold'>{item.content}</div>
                  ) : (
                    <div>{item.content}</div>
                  )}
                </div>
              ))}

              {/* Active Prompt Line */}
              <div className='flex items-center gap-2 pt-1'>
                <span className='text-accent font-semibold shrink-0'>rakib@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type='text'
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className='flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 m-0'
                  autoFocus
                  spellCheck={false}
                />
              </div>
              <div ref={bottomRef} />
            </div>

            {/* Terminal Footer */}
            <div className='px-4 py-2 bg-[#141418] border-t border-white/10 flex items-center justify-between text-[11px] text-white/40 font-mono'>
              <div className='flex gap-3'>
                <span>Press <kbd className='text-white/70'>Tab</kbd> to autocomplete</span>
                <span>Type <kbd className='text-accent font-bold'>help</kbd></span>
              </div>
              <span className='text-accent/80 font-semibold'>Next.js 14 Runtime</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperTerminal;

