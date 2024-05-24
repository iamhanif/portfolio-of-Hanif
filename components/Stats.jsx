"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of experiences",
  },
  {
    num: 10,
    text: "Project completed",
  },
  {
    num: 8,
    text: "Technologies learned",
  },
  {
    num: 100,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={1}
                  delay={2}
                  className="text-xl lg:text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
