const about = {
  title: "About Me",
  description:
    "I am Md. Rakibur Rahman, a passionate Full Stack & MERN Developer who creates clean, fast, and scalable digital products. With strong foundations in modern web frameworks, clean architecture, and responsive UX design, I turn complex problems into elegant web solutions.",
  information: [
    {
      fieldName: "Name",
      fieldValue: "Md. Rakibur Rahman",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "rakiburrahman307@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1749183977",
    },
    {
      fieldName: "Location",
      fieldValue: "Dhaka, Bangladesh",
    },
    {
      fieldName: "Availability",
      fieldValue: "Open for Opportunities",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali",
    },
  ],
};
const AboutItem = () => (
  <div className='flex flex-col gap-[30px]'>
    <h3 className='text-4xl font-bold'>{about?.title}</h3>
    <p className='max-w-[600px] text-white/70 mx-auto xl:mx-0 leading-relaxed'>
      {about?.description}
    </p>
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[620px] mx-auto xl:mx-0'>
      {about?.information?.map((info, index) => (
        <li
          key={index}
          className='flex items-center justify-between p-3.5 rounded-lg bg-[#232329]/60 border border-white/5 gap-4'
        >
          <span className='text-white/60 text-sm font-medium'>{info?.fieldName}</span>
          <span className='text-base font-semibold text-accent'>{info?.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
);
export default AboutItem;
