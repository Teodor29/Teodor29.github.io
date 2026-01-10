import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-dark-2 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01] group">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 no-underline"
      >
        <img
          src={`/${project.image}`}
          alt={project.altText}
          className="box-border w-full object-cover rounded-lg border-dark-4 shadow-[0_0_10px_rgba(58,58,58,0.2)] group-hover:shadow-[0_0_15px_rgba(74,74,74,0.3)] group-hover:border-dark-5 transition-shadow duration-1000 ease-in-out"
        />
        <div className="font-sans pt-4">
          <h3 className="group-hover:text-accent-hover transition-colors duration-300 ease-in-out pb-2">
            {project.title}
          </h3>
          <p className="text-sm text-primary group-hover:transition-colors duration-300 ease-in-out">
            {project.description}
          </p>
          <div className="pt-4">
            <ul className="flex gap-2 m-0 p-0 list-none flex-wrap">
              {project.skills.map((skill, index) => (
                <li key={index} className="py-1 px-2 text-sm bg-accent-background rounded-full text-accent-text">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
