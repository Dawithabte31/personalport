"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutDescription = () => {
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
  }, []); // Run only on mount

  return (
    <div
      id="aboutme"
      ref={ref}
      className="flex flex-col items-center justify-center text-center min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-4 md:mb-12"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-base sm:text-lg max-w-2xl leading-relaxed text-gray-300 font-light tracking-wide"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          lineHeight: "1.75",
          color: "#A0AEC0",
        }}
      >
        I am a full stack web developer with a passion for creating interactive
        and responsive web applications. I have experience working with{" "}
        <span className="text-[#4FD1C5] font-medium italic">React</span>,{" "}
        <span className="text-[#4FD1C5] font-medium italic">Node.js</span>,{" "}
        <span className="text-[#4FD1C5] font-medium italic">Laravel</span>,{" "}
        <span className="text-[#4FD1C5] font-medium italic">Vue.js</span>,{" "}
        <span className="text-[#4FD1C5] font-medium italic">Next.js</span>. I am a
        quick learner and always looking to expand my knowledge and skill set.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg max-w-2xl leading-relaxed text-gray-500 font-light italic"
      >
        When I’m not coding, I enjoy painting, reading books, and watching
        football.
      </motion.p>
    </div>
  );
};

export default AboutDescription;
