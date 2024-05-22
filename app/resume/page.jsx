"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam reiciendis nam praesentium. Nesciunt, quia labore.",
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
      fieldName: "Experience",
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
