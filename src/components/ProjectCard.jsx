import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
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
        <div className="flex gap-4 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-fg no-underline hover:text-accent-hover transition-colors"
          >
            <FaGithub size={14} /> GitHub
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-accent no-underline hover:text-accent-hover transition-colors"
            >
              <FiExternalLink size={14} /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
