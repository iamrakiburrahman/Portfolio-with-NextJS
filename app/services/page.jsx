"use client";
import ServiceItem from "@/components/utilities/ServiceItem";
const Services = () => {
  const services = [
    {
      num: "01",
      title: "Backend & API Architecture",
      description:
        "Architecting scalable server-side applications, microservices, and high-performance RESTful & GraphQL APIs using Node.js, Express, NestJS, and TypeScript.",
      url: "/contact",
    },
    {
      num: "02",
      title: "Database Design & ORM Modeling",
      description:
        "Designing relational (PostgreSQL) and NoSQL (MongoDB) schemas, query optimization, Prisma ORM integration, indexing, and Redis caching layers.",
      url: "/contact",
    },
    {
      num: "03",
      title: "Full Stack Web Development",
      description:
        "Delivering complete, end-to-end web applications by connecting rock-solid backend microservices with dynamic Next.js and React user interfaces.",
      url: "/contact",
    },
    {
      num: "04",
      title: "Authentication, Security & Docker",
      description:
        "Implementing secure JWT / OAuth2 authentication, role-based access control (RBAC), API rate-limiting, and Docker containerized deployments.",
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
