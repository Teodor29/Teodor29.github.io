import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="card" onClick={() => window.open(project.link, "_blank")}>
      <img
        src={project.image}
        alt={project.altText}
        className="w-full object-cover rounded-lg mb-3"
      />
      <h3 className="mb-1">{project.title}</h3>
      <p className="text-sm text-fg-muted mb-2">{project.description}</p>
      <ul className="flex gap-2 list-none flex-wrap">
        {project.skills.map((skill) => (
          <li key={skill} className="pill-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
