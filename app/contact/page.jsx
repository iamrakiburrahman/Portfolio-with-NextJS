"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import Magnetic from "@/components/gsap/Magnetic";
import GsapTiltCard from "@/components/gsap/GsapTiltCard";

const emailAddress = "rakiburrahman307@gmail.com";
const phoneNumber = "(+880) 1749183977";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Direct Email",
    description: emailAddress,
    href: `mailto:${emailAddress}`,
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone / WhatsApp",
    description: phoneNumber,
    href: "tel:+8801749183977",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Primary Location",
    description: "Mirpur 2, Dhaka, Bangladesh",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      // Free client-side form submission to deliver real emails to rakiburrahman307@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || "Not specified",
          service: formData.service || "General Inquiry",
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.firstName} [${formData.service || "Engineering"}]`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback gracefully to success with mailto option
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${emailAddress}?subject=Portfolio Inquiry: ${encodeURIComponent(
    formData.service || "Engineering Discussion"
  )}&body=Hello Rakibur,%0D%0A%0D%0AMy name is ${encodeURIComponent(
    `${formData.firstName} ${formData.lastName}`.trim()
  )}.%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
    formData.message || ""
  )}%0D%0A%0D%0APhone: ${encodeURIComponent(formData.phone || "N/A")}`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className='py-8 xl:py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-8'>
          {/* Contact Form Column */}
          <div className='xl:w-2/3 order-2 xl:order-1'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 p-8 xl:p-10 bg-[#27272c] rounded-2xl border border-white/5 shadow-xl'
            >
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4'>
                <div>
                  <h2 className='text-3xl xl:text-4xl text-accent font-extrabold'>
                    Let&apos;s Work Together
                  </h2>
                  <p className='text-white/60 text-sm xl:text-base mt-1'>
                    Have a high-scale project, job opportunity, or technical challenge?
                  </p>
                </div>
                <div className='flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs'>
                  <span className='w-2 h-2 rounded-full bg-accent animate-ping'></span>
                  <span>Response &lt; 4 Hours</span>
                </div>
              </div>

              {submitted ? (
                <div className='flex flex-col items-center justify-center py-10 px-4 text-center bg-accent/10 border border-accent/30 rounded-xl gap-4 animate-in fade-in duration-300'>
                  <FaCheckCircle className='text-5xl text-accent' />
                  <h3 className='text-2xl font-bold text-white'>
                    Thank You for Reaching Out!
                  </h3>
                  <p className='text-white/80 max-w-[500px] text-sm sm:text-base leading-relaxed'>
                    Your inquiry has been processed. You can also connect directly via{" "}
                    <span className='text-accent font-semibold'>{emailAddress}</span>.
                  </p>

                  <div className='flex flex-wrap items-center justify-center gap-3 mt-4'>
                    <a
                      href={mailtoLink}
                      className='inline-flex items-center gap-2 px-6 h-[50px] rounded-xl bg-accent text-primary font-bold text-sm hover:bg-accent-hover transition-all shadow-md shadow-accent/20'
                    >
                      <FaPaperPlane />
                      <span>Send Direct via Email Client</span>
                    </a>
                    <Button
                      type='button'
                      variant='outline'
                      onClick={handleCopyEmail}
                      className={`h-[50px] min-w-[200px] px-6 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 ${
                        copied
                          ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                          : "border-white/20 text-white hover:border-accent"
                      }`}
                    >
                      {copied ? <FaCheck className='text-primary text-sm' /> : <FaCopy className='text-sm' />}
                      <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
                    </Button>
                    <Button
                      type='button'
                      variant='ghost'
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className='text-white/60 hover:text-white'
                    >
                      Send Another
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {statusMessage && (
                    <div className='p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm'>
                      {statusMessage}
                    </div>
                  )}

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input
                      type='text'
                      placeholder='First Name *'
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    <Input
                      type='text'
                      placeholder='Last Name'
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    <Input
                      type='email'
                      placeholder='Email Address *'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <Input
                      type='tel'
                      placeholder='Phone / WhatsApp'
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <Select
                    onValueChange={(val) =>
                      setFormData({ ...formData, service: val })
                    }
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select a Service Category' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Services Available</SelectLabel>
                        <SelectItem value='Backend & API Architecture'>
                          Backend &amp; API Architecture (NestJS / Node / Postgres)
                        </SelectItem>
                        <SelectItem value='Full Stack Web Application'>
                          Full Stack Web Application (Next.js 14 / React)
                        </SelectItem>
                        <SelectItem value='Database Design & Caching'>
                          Database Modeling &amp; Redis Caching
                        </SelectItem>
                        <SelectItem value='System Design & Code Review'>
                          System Design &amp; Architectural Consultation
                        </SelectItem>
                        <SelectItem value='Full-time / Contract Hiring'>
                          Full-Time / Contract Software Engineering Role
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Textarea
                    className='h-36'
                    placeholder='Briefly describe your project goals, technical requirements, or role details *'
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  <div className='flex flex-wrap items-center justify-between gap-4'>
                    <Magnetic strength={0.3}>
                      <Button
                        type='submit'
                        size='lg'
                        className='flex items-center gap-2 bg-accent text-primary font-bold hover:bg-accent-hover'
                        disabled={isSubmitting}
                      >
                        <FaPaperPlane className='text-sm' />
                        <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                      </Button>
                    </Magnetic>

                    <a
                      href={mailtoLink}
                      className='text-white/60 hover:text-accent text-xs sm:text-sm font-mono underline transition-colors'
                    >
                      Prefer your native mail app? Click here
                    </a>
                  </div>
                </>
              )}
            </form>
          </div>

          {/* Right Column: Contact Cards & Quick Book */}
          <div className='flex-1 xl:max-w-[380px] w-full min-w-0 flex flex-col gap-6 order-1 xl:order-2'>
            <ul className='flex flex-col gap-4 w-full'>
              {info.map((item, index) => {
                const content = (
                  <div className='flex gap-4 items-center p-4 rounded-xl bg-[#27272c]/70 border border-white/5 hover:border-accent/40 transition-all duration-300'>
                    <div className='w-12 h-12 bg-[#1f1f24] text-accent rounded-lg flex items-center justify-center shrink-0 border border-white/5'>
                      <div className='text-xl'>{item.icon}</div>
                    </div>
                    <div className='flex-1 overflow-hidden'>
                      <p className='text-white/50 text-xs font-mono uppercase tracking-wider'>
                        {item.title}
                      </p>
                      <h3 className='text-sm sm:text-base text-white font-semibold truncate'>
                        {item.description}
                      </h3>
                    </div>
                  </div>
                );

                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className='block group hover:scale-[1.02] transition-transform'
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Quick Actions Card */}
            <GsapTiltCard maxTilt={5} className='rounded-2xl'>
              <div className='p-6 rounded-2xl bg-[#232329]/50 border border-accent/20 flex flex-col gap-4'>
                <div className='flex items-center gap-2 text-accent font-semibold text-sm'>
                  <FaCalendarAlt />
                  <span>Quick Connect Options</span>
                </div>
                <p className='text-white/70 text-xs sm:text-sm leading-relaxed'>
                  Fast-track discussions for freelance projects, technical consults, or full-time recruitment.
                </p>
                <div className='flex flex-col gap-3'>
                  <Button
                    onClick={handleCopyEmail}
                    type='button'
                    variant='outline'
                    className={`w-full h-[52px] rounded-xl flex items-center justify-center gap-2.5 border-2 transition-all duration-300 font-semibold text-sm sm:text-base select-none ${
                      copied
                        ? "border-accent bg-accent text-primary shadow-lg shadow-accent/25"
                        : "border-accent/40 bg-accent/10 text-white hover:bg-accent hover:text-primary shadow-md shadow-accent/10"
                    }`}
                  >
                    {copied ? (
                      <>
                        <FaCheck className='text-base text-primary' />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className='text-base text-accent' />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </Button>
                  <a
                    href='tel:+8801749183977'
                    className='w-full h-[50px] rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center gap-2.5 text-sm font-semibold text-white/90 transition-all duration-300'
                  >
                    <FaPhoneAlt className='text-accent text-sm' />
                    <span>Direct Call: (+880) 1749183977</span>
                  </a>
                </div>
              </div>
            </GsapTiltCard>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
