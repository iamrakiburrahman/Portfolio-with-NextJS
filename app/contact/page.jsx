"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1749183977",
    href: "tel:+8801749183977",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rakiburrahman307@gmail.com",
    href: "mailto:rakiburrahman307@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate responsive submission & allow email launch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-8'>
          <div className='xl:w-2/3 order-2 xl:order-1'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 p-8 xl:p-10 bg-[#27272c] rounded-2xl border border-white/5'
            >
              <h2 className='text-3xl xl:text-4xl text-accent font-bold'>Let&apos;s Work Together</h2>
              <p className='text-white/60 text-sm xl:text-base leading-relaxed'>
                Have a project in mind, an open role, or a technical inquiry? Send a message and I&apos;ll get back to you promptly.
              </p>

              {submitted ? (
                <div className='flex flex-col items-center justify-center py-12 px-4 text-center bg-accent/10 border border-accent/30 rounded-xl gap-4'>
                  <FaCheckCircle className='text-5xl text-accent' />
                  <h3 className='text-2xl font-bold text-white'>Thank You for Reaching Out!</h3>
                  <p className='text-white/80 max-w-[450px]'>
                    Your message has been received. You can also connect directly via{" "}
                    <a href='mailto:rakiburrahman307@gmail.com' className='text-accent underline font-semibold'>
                      rakiburrahman307@gmail.com
                    </a>.
                  </p>
                  <Button
                    type='button'
                    variant='outline'
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
                    className='mt-2'
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input
                      type='text'
                      placeholder='First Name'
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <Input
                      type='text'
                      placeholder='Last Name'
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <Input
                      type='email'
                      placeholder='Email Address'
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                      type='tel'
                      placeholder='Phone Number'
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select a Service' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Choose a Service</SelectLabel>
                        <SelectItem value='fullstack'>Full Stack Development</SelectItem>
                        <SelectItem value='frontend'>Front-End Architecture</SelectItem>
                        <SelectItem value='backend'>Backend & API Development</SelectItem>
                        <SelectItem value='consulting'>Consulting & Code Review</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea
                    className='h-40'
                    placeholder='Type your message or project requirements here.'
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Button size='lg' className='max-w-xs' disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </>
              )}
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-2'>
            <ul className='flex flex-col gap-8 w-full'>
              {info.map((item, index) => {
                const content = (
                  <div className='flex gap-6 items-center p-4 rounded-xl bg-[#27272c]/50 border border-white/5 hover:border-accent/30 transition-all duration-300'>
                    <div className='w-12 h-12 xl:w-16 xl:h-16 bg-[#27272c] text-accent rounded-lg flex items-center justify-center shrink-0'>
                      <div className='text-2xl'>{item.icon}</div>
                    </div>
                    <div className='flex-1 overflow-hidden'>
                      <p className='text-white/60 text-sm'>{item.title}</p>
                      <h3 className='text-base xl:text-lg text-white font-medium truncate'>{item.description}</h3>
                    </div>
                  </div>
                );

                return (
                  <li key={index}>
                    {item.href ? (
                      <a href={item.href} className='block group hover:scale-[1.02] transition-transform'>
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
