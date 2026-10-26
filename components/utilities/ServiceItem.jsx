import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const ServiceItem = ({ num, title, description, url = "/contact" }) => {
  const targetUrl = url || "/contact";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      }}
      className='flex flex-col flex-1 justify-center gap-6 group p-6 rounded-2xl bg-[#232329]/40 border border-white/5 hover:border-accent/40 transition-all duration-500'
    >
      <div className='w-full flex justify-between items-center'>
        <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
          {num}
        </div>
        <Link
          href={targetUrl}
          aria-label={`Inquire about ${title}`}
          className='w-[64px] h-[64px] rounded-full bg-white/10 group-hover:bg-accent text-white group-hover:text-primary transition-all duration-500 flex justify-center items-center group-hover:-rotate-45'
        >
          <BsArrowDownRight className='text-2xl' />
        </Link>
      </div>
      <h2 className='text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500'>
        {title}
      </h2>
      <p className='text-white/70 text-base leading-relaxed'>{description}</p>
      <div className='border-b border-white/10 group-hover:border-accent/30 w-full transition-all duration-500'></div>
    </motion.div>
  );
};

export default ServiceItem;
