"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    name: "Web Developement",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque velit magnam non ab fugit aspernatur!",
    href: "",
  },
  {
    num: "02",
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque velit magnam non ab fugit aspernatur!",
    href: "",
  },
  {
    num: "03",
    name: "SEO",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque velit magnam non ab fugit aspernatur!",
    href: "",
  },
  {
    num: "04",
    name: "Logo Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque velit magnam non ab fugit aspernatur!",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className=" w-[70px] h-[70px] flex justify-center items-center transition-all duration-500 rounded-full bg-white group-hover:bg-accent-hover hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                  {service.name}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
