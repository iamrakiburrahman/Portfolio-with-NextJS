"use client";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ExperienceItem from "@/components/utilities/ExperienceItem";
import EducationItem from "@/components/utilities/EducationItem";
import SkillsItem from "@/components/utilities/SkillsItem";
import CertificationsItem from "@/components/utilities/CertificationsItem";
import AboutItem from "@/components/utilities/AboutItem";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-8 xl:py-4'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[40px] xl:gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Tech Stack &amp; Skills</TabsTrigger>
            <TabsTrigger value='educations'>Education</TabsTrigger>
            <TabsTrigger value='certifications'>Problem Solving &amp; Certs</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          {/* Content  */}
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent value='experience' className='w-full'>
              <ExperienceItem />
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <SkillsItem />
            </TabsContent>
            {/* Educations */}
            <TabsContent value='educations' className='w-full'>
              <EducationItem />
            </TabsContent>
            {/* Certifications & Problem Solving */}
            <TabsContent value='certifications' className='w-full'>
              <CertificationsItem />
            </TabsContent>
            {/* About */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <AboutItem />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
