"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FiSearch,
  FiHome,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiDownload,
  FiCopy,
  FiTerminal,
  FiExternalLink,
  FiPhone,
  FiCheck,
} from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  const togglePalette = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
      setSearch("");
      setSelectedIndex(0);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen, togglePalette]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const email = "rakiburrahman307@gmail.com";

  const actions = [
    {
      category: "Navigation",
      id: "nav-home",
      title: "Go to Home",
      icon: <FiHome />,
      handler: () => router.push("/"),
    },
    {
      category: "Navigation",
      id: "nav-projects",
      title: "Explore Projects & Case Studies",
      icon: <FiBriefcase />,
      handler: () => router.push("/work"),
    },
    {
      category: "Navigation",
      id: "nav-resume",
      title: "View Resume, Skills & Experience",
      icon: <FiFileText />,
      handler: () => router.push("/resume"),
    },
    {
      category: "Navigation",
      id: "nav-services",
      title: "View Engineering Services",
      icon: <FiBriefcase />,
      handler: () => router.push("/services"),
    },
    {
      category: "Navigation",
      id: "nav-contact",
      title: "Contact & Hire Me",
      icon: <FiMail />,
      handler: () => router.push("/contact"),
    },
    {
      category: "Quick Actions",
      id: "act-terminal",
      title: "Open Interactive Developer Terminal (CLI)",
      icon: <FiTerminal className='text-accent' />,
      badge: "Interactive",
      handler: () => {
        window.dispatchEvent(new Event("open-terminal"));
      },
    },
    {
      category: "Quick Actions",
      id: "act-copy-email",
      title: `Copy Email (${email})`,
      icon: copied ? <FiCheck className='text-accent' /> : <FiCopy />,
      badge: copied ? "Copied!" : "Clipboard",
      handler: () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      category: "Quick Actions",
      id: "act-download-cv",
      title: "Download Resume / Curriculum Vitae",
      icon: <FiDownload className='text-accent' />,
      handler: () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Rakibur_Rahman_CV.pdf";
        link.click();
      },
    },
    {
      category: "Contact & Links",
      id: "link-phone",
      title: "Call Phone: (+880) 1749183977",
      icon: <FiPhone />,
      handler: () => {
        window.location.href = "tel:+8801749183977";
      },
    },
    {
      category: "Contact & Links",
      id: "link-github",
      title: "Open GitHub Profile",
      icon: <FiExternalLink />,
      handler: () => {
        window.open("https://github.com/iamrakiburrahman", "_blank");
      },
    },
    {
      category: "Contact & Links",
      id: "link-linkedin",
      title: "Open LinkedIn Profile",
      icon: <FiExternalLink />,
      handler: () => {
        window.open("https://linkedin.com/in/iamrakiburrahman", "_blank");
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(search.toLowerCase()) ||
    act.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (act) => {
    act.handler();
    if (act.id !== "act-copy-email") {
      setIsOpen(false);
    }
  };

  const handleKeyDownList = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filtered.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150'>
      <div
        className='w-full max-w-xl bg-[#1c1c22] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white animate-in zoom-in-95 duration-150'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className='flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#232329]/50'>
          <FiSearch className='text-accent text-xl' />
          <input
            ref={inputRef}
            type='text'
            placeholder='Type a command, page, or search...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownList}
            className='flex-1 bg-transparent border-none outline-none text-white text-base placeholder:text-white/40 font-medium'
          />
          <button
            onClick={() => setIsOpen(false)}
            className='text-white/40 hover:text-white transition-colors'
          >
            <IoMdClose className='text-2xl' />
          </button>
        </div>

        {/* Command list */}
        <div className='max-h-[380px] overflow-y-auto custom-scrollbar p-2 flex flex-col gap-1'>
          {filtered.length === 0 ? (
            <div className='py-8 text-center text-white/50 text-sm'>
              No matching commands or pages found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 text-sm ${
                    isSelected
                      ? "bg-accent text-primary font-semibold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <span className={`text-lg ${isSelected ? "text-primary" : "text-accent"}`}>
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-primary text-accent font-bold"
                          : "bg-accent/10 border border-accent/20 text-accent font-medium"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom shortcuts footer */}
        <div className='px-4 py-2.5 border-t border-white/10 bg-[#16161b] flex items-center justify-between text-[11px] text-white/40 font-mono'>
          <div className='flex items-center gap-3'>
            <span>
              <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white'>↑</kbd>{" "}
              <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white'>↓</kbd> Navigate
            </span>
            <span>
              <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white'>↵</kbd> Select
            </span>
            <span>
              <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-white'>Esc</kbd> Close
            </span>
          </div>
          <span className='text-accent/80 font-semibold'>Md. Rakibur Rahman</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

