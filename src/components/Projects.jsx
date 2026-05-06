import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <div className="flex flex-col gap-8 md:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
