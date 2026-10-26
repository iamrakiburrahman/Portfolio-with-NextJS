import { ScrollArea } from "@/components/ui/scroll-area";
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "A journey of building scalable web applications, designing user interfaces, and solving real-world challenges through modern software development.",
  items: [
    {
      projectName: "New Era Consultancy",
      role: "Front-End Developer",
      year: "2024",
    },
    {
      projectName: "EasyMart E-commerce",
      role: "Full Stack Developer",
      year: "2024",
    },
    {
      projectName: "SkySnap Weather Platform",
      role: "Front-End Developer",
      year: "2024",
    },
    {
      projectName: "Academic Software Projects - BUBT",
      role: "Full Stack Engineer",
      year: "2023 - 2024",
    },
    {
      projectName: "UniStayHub Hostel Management",
      role: "Full Stack Developer",
      year: "2023",
    },
    {
      projectName: "Job Swift Platform",
      role: "Full Stack Developer",
      year: "2023",
    },
    {
      projectName: "Portfolio & Interactive Web Apps",
      role: "Front-End Developer",
      year: "2023",
    },
    {
      projectName: "Ethereal Autos Auto-Portal",
      role: "Full Stack Developer",
      year: "2023",
    },
  ],
};
const ExperienceItem = () => (
  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
    <h2 className='text-4xl font-bold'>{experiences?.title}</h2>
    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
      {experiences?.description}
    </p>
    <ScrollArea className='h-[400px]'>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4'>
        {experiences?.items?.map((item, index) => (
          <li
            key={index}
            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border border-white/5 hover:border-accent/40 transition-all duration-300'
          >
            <span className='text-accent font-mono'>{item?.year}</span>
            <h3 className='text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left'>
              {item?.role}
            </h3>

            <div className='flex items-center gap-3'>
              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
              <p className='text-white/60 text-sm'>{item?.projectName}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export default ExperienceItem;
