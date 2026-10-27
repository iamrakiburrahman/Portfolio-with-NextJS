"use client";

import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { num: 2, text: "Years of Experience", suffix: "+" },
    { num: 25, text: "Projects Completed", suffix: "+" },
    { num: 20, text: "Technologies Mastered", suffix: "+" },
    { num: 5500, text: "Code Commits", suffix: "+" },
  ];
  return (
    <section className='pt-6 pb-12 xl:pt-4 xl:pb-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex gap-4 items-center justify-center xl:justify-start p-4 rounded-xl bg-[#232329]/40 border border-white/5 hover:border-accent/30 transition-all duration-300'
            >
              <div className='flex items-baseline'>
                <CountUp
                  end={stat?.num}
                  duration={2.5}
                  delay={0.2}
                  className='text-4xl xl:text-5xl font-extrabold text-accent'
                />
                <span className='text-3xl xl:text-4xl font-extrabold text-accent'>
                  {stat?.suffix}
                </span>
              </div>
              <p
                className={`${stat?.text.length < 15 ? "max-w-[100px]" : "max-w-[140px]"
                  } leading-snug text-white/80 text-sm xl:text-base font-medium`}
              >
                {stat?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
