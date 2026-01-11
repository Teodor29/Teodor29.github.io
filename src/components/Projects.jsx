import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <div id="projects" className="py-8">
      <h2 className="mb-4">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
