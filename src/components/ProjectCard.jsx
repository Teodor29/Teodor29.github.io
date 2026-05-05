import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card transition-colors duration-300 ease-in-out cursor-pointer hover:bg-elevated"
      onClick={() => window.open(project.link, "_blank")}
    >
      <img
        src={project.image}
        alt={project.altText}
        className="w-full object-cover rounded-lg"
      />
      <div className="font-sans pt-4">
        <h3 className="pb-2">{project.title}</h3>
          <p className="text-sm text-fg-muted">{project.description}</p>
          <ul className="flex gap-2 m-0 p-0 list-none flex-wrap pt-4">
            {project.skills.map((skill) => (
              <li key={skill} className="pill-sm">
                {skill}
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
