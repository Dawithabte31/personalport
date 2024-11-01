"use client"; // Mark the component as a client-side component

import React, { useTransition, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Assuming you may need Link here for routing

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-col gap-4 justify-center flex-wrap"
      >
        <div className="flex flex-row gap-4 justify-center flex-wrap w-full max-w-4xl">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"].map((skill) => (
            <motion.p
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-300 border-gray-500 hover:border-white rounded-full border-2 px-4 py-2 text-lg sm:text-xl cursor-pointer"
            >
              {skill}
            </motion.p>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center flex-wrap w-full max-w-4xl">
          {["Node.js", "Express.js", "Laravel"].map((skill) => (
            <motion.p
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-300 border-gray-500 hover:border-white rounded-full border-2 px-4 py-2 text-lg sm:text-xl cursor-pointer"
            >
              {skill}
            </motion.p>
          ))}
        </div>
      </motion.div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isInView, setIsInView] = useState(false);
  const aboutSectionRef = useRef(null);

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsInView(entries[0].isIntersecting),
      { threshold: 0.1 }
    );

    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);

    return () => {
      if (aboutSectionRef.current) observer.unobserve(aboutSectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="text-white w-full px-6 py-16 flex items-center justify-center h-full"
    >
      <div className="text-center w-full max-w-3xl flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg mb-8 leading-relaxed max-w-2xl"
        >
          I am a full stack web developer with a passion for creating interactive and responsive web applications. I
          have experience working with JavaScript, React, Redux, Node.js, Express, MongoDb, MySql, HTML, CSS, and Git.
          I am a quick learner and I am always looking to expand my knowledge and skill set.
        </motion.p>

        <div className="flex justify-center mb-8">
          <h1
            onClick={() => handleTabChange("skills")}
            className="font-bold text-2xl sm:text-3xl cursor-pointer"
          >
            Skills
          </h1>
        </div>

        <AnimatePresence>
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
