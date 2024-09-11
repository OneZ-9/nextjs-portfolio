"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HirelyAi",
    description:
      "HirelyAi is a modern hiring platform that leverages AI for smart candidate filtering and evaluation. MERN Project includes CRUD Operations and file upload.",
    image: "/images/projects/hirelyai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/hirelyai-v1.0-frontend",
    previewUrl: "https://hirelyai-chamod.netlify.app/",
  },
  {
    id: 2,
    title: "Wood Heaven Website",
    description:
      "Learning demo project built with NextJS +Tailwind and Supabase. Includes CRUD Operations. Feature enhancements ongoing..",
    image: "/images/projects/wood-heaven-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/the-wood-heaven-website",
    previewUrl: "https://the-wood-heaven-website-chamod.vercel.app/",
  },
  {
    id: 3,
    title: "Wood Heaven Demo",
    description:
      "Learning demo project built with React, Supabase and React-recharts. Ongoing feature enhancements..",
    image: "/images/projects/wood-heaven-demo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/the-wood-heaven--demo",
    previewUrl: "https://wood-heaven-chamod.netlify.app/login",
  },
  {
    id: 4,
    title: "Fast Pizza Demo App",
    description:
      "Simple demo project for ordering pizza from conceptual Fast-Pizza-Co.",
    image: "/images/projects/fast-pizza.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/-Demo-Project--fast-pizza",
    previewUrl: "https://fast-pizza-demo.netlify.app/",
  },
  {
    id: 5,
    title: "NextJS Portfolio",
    description: "Customized NextJS Portfilo project using NextJS template.",
    image: "/images/projects/chamod-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/nextjs-portfolio",
    previewUrl: "https://chamod-portfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Omni-food",
    description:
      "Static web page built with html and css to practice mobile responsive design.",
    image: "/images/projects/omnifood.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/OneZ-9/Omnifood--CSS",
    previewUrl: "https://responsive-omnifood-democss.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="lg:py-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
