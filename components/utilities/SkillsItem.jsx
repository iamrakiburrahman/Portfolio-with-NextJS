import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = {
  title: "Skills & Technologies",
  description:
    "A comprehensive toolkit of languages, frameworks, databases, and development tools I leverage to build scalable, full-stack applications.",
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL / Prisma" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaGitAlt />, name: "Git & GitHub" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const SkillsItem = () => (
  <div className='flex flex-col gap-[30px]'>
    <div className='flex flex-col gap-[15px] text-center xl:text-left'>
      <h3 className='text-4xl font-bold'>{skills.title}</h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
        {skills.description}
      </p>
    </div>
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[25px]'>
      {skills.skillList.map((item, idx) => (
        <li key={idx}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className='w-full h-[130px] bg-[#232329] border border-white/5 hover:border-accent/40 rounded-xl flex flex-col justify-center items-center gap-2 group transition-all duration-300'>
                <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                  {item.icon}
                </div>
                <span className='text-xs text-white/60 group-hover:text-white transition-colors duration-300 font-medium'>
                  {item.name}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className='capitalize font-medium'>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsItem;
