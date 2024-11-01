"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SkillList = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = ref.current; // Store ref.current in a variable
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Only run once on mount

  return (
    <div
      id="skills"
      ref={ref}
      className="flex flex-col items-center justify-center text-center min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-6 md:mb-12"
      >
        Skills I Have
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col gap-4 justify-center flex-wrap w-[70%] mb-4"
      >
        <div className="flex flex-row gap-4 justify-center flex-wrap w-full">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
          ].map((skill) => (
            <motion.p
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[#ADB7BE] border-white hover:border-white rounded-full border-[1px] px-4 py-2 text-xl cursor-pointer"
            >
              {skill}
            </motion.p>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center flex-wrap w-full">
          {["Node.js", "Express.js", "Laravel", "Vue.js"].map((skill) => (
            <motion.p
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[#ADB7BE] border-white hover:border-white rounded-full border-[1px] px-4 py-2 text-xl cursor-pointer"
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillList;
