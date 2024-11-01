"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wollo University Techino Club Website",
    description:
      "A MERN stack-powered site for Wollo University’s Techino Club that simplifies student registration and event management",
    image: "/images/projects/techino.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dawithabte31/KIOT-Techino_club",
    previewUrl: "https://kiot-techino.netlify.app/",
    technos: ["React", "ExpressJs", "TaiwindCss"],
  },
  {
    id: 2,
    title: "Gizebet Project Management System",
    description: "A project management portal for efficient task tracking, updates, and collaboration.",
    image: "/images/projects/pmp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RohaTech/Project-Managment-Software",
    previewUrl: "/",
    technos: ["React", "Inertia", "Laravel", "TaiwindCss"],
  },
  {
    id: 3,
    title: "consulting service website",
    description: "The TCS website showcases the firm’s consulting services in Ethiopia, featuring service details and client testimonials.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://tcsconsult.com.et",
    technos: ["React", "ExpressJs", "TaiwindCss"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleCardClick = (project) => {
    if (project.id % 2 === 0) {
      // Even index: redirect to gitUrl
      window.location.href = project.gitUrl;
    } else {
      // Odd index: redirect to previewUrl
      window.location.href = project.previewUrl;
    }
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={{
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-16">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 md:gap-8 w-full px-4 md:px-14">
        {filteredProjects.map((project,index) => (
          <motion.li
            className="flex h-[300px] md:h-[400px] object-cover"
            key={project.id}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
              exit: { scale: 0.8, opacity: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              key={project.id || index}
              index={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technos={project.technos}
              onClick={() => handleCardClick(project)} // Pass the click handler
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ProjectsSection;
