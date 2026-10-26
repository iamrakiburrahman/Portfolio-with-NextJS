"use client";
import ServiceItem from "@/components/utilities/ServiceItem";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "Full Stack Web Development",
      description:
        "End-to-end development of dynamic, robust web applications using Next.js, React, Node.js, Express, and MongoDB or PostgreSQL.",
      url: "/contact",
    },
    {
      num: "02",
      title: "Front-End Architecture",
      description:
        "Translating Figma designs into responsive, pixel-perfect, and accessible user interfaces with React, Next.js, and modern Tailwind CSS.",
      url: "/contact",
    },
    {
      num: "03",
      title: "RESTful API & Database Design",
      description:
        "Building secure, scalable backend architectures, authentication systems (JWT, OAuth), and database schemas with MongoDB and Prisma.",
      url: "/contact",
    },
    {
      num: "04",
      title: "Performance & SEO Optimization",
      description:
        "Optimizing Core Web Vitals, server-side rendering (SSR), static site generation (SSG), and technical SEO to maximize visibility and speed.",
      url: "/contact",
    },
  ];
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-6'>
      <div className='container mx-auto'>
        <div className='mb-12 text-center xl:text-left'>
          <h1 className='text-4xl xl:text-5xl font-bold mb-4'>
            Services I <span className='text-accent'>Provide</span>
          </h1>
          <p className='text-white/60 max-w-[600px]'>
            Delivering high-standard software engineering solutions tailored to help businesses and startups grow.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          {services?.map((service, index) => (
            <ServiceItem
              key={index}
              num={service.num}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
