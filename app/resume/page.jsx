"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const about = {
  title: "About me",
  description:
    "I am a detail-oriented and self-driven programmer. Proficient in HTML, CSS, JavaScript and React.js with familiarity in Next.js. I am eager to contribute as a frontend developer in an inspiring environment where I can receive invaluable mentorship and make significant strides in the web development realm. With a keen attention to detail, I deliver high-quality solutions and enhance user experience through proactive UX projects and codebase improvements.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md Hanif",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1607 150 462",
    },
    {
      fieldName: "education",
      fieldValue: "Less than 1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "iamhanif101@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
  ],
};

// experiences data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur sint minima odit ex esse odio reiciendis non molestias at!",
  items: [
    {
      company: "Connected Core",
      position: "Junior Frontend Developer",
      duration: "2024 - Present",
    },
    {
      company: "Upwork",
      position: "Freelance Web Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur sint minima odit ex esse odio reiciendis non molestias at!",
  items: [
    {
      institution: "Learn With Sumit",
      degree: "Reactive Accelerator (React.js 18 & Next.js 14)",
      duration: "2024",
    },
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Course With Jhankar Mahbub",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023 - 2024",
    },
    {
      institution: "American International University-Bangladesh",
      degree: "Masters in Electrical & Electronic Engineering",
      duration: "2014 - 2016",
    },
    {
      institution: "University of Asia Pacific",
      degree: "B.Sc. in Electrical & Electronic Engineering",
      duration: "2009 - 2013",
    },
  ],
};

// skills data

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur sint minima odit ex esse odio reiciendis non molestias at!",

  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <TbBrandFramerMotion />,
      name: "framer motion",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-96 mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="w-full min-h-[70vh]">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-64 min-h-16 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-2 h-2 rounded-full bg-accent-hover"></span>
                            <p className="text-white/60"> {item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-48 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent-hover">
                              {item.duration}
                            </span>
                            <h3 className="text-[16px] max-w-64 min-h-16 text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-2 h-2 rounded-full bg-accent-hover"></span>
                              <p className="text-white/60">
                                {" "}
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className=" text-4xl font-bold">{about.title}</h3>
                <p className="text-justify text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center lg:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
