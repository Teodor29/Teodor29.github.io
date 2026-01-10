import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="header h-full flex flex-col py-8 md:py-28">
      <div>
        <h1 className="text-6xl">
          <Link
            to="#home"
            onClick={() => handleScroll("home")}
            className="no-underline"
          >
            Teodor Lien
          </Link>
        </h1>
        <h2 className="text-2xl">Frontend Developer</h2>

        <div className="flex flex-row pt-4 md:flex-col md:pt-12">
          <Link
            to="#home"
            onClick={() => handleScroll("home")}
            className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover"
          >
            <span>Home</span>
          </Link>
          <Link
            to="#skills"
            onClick={() => handleScroll("skills")}
            className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover"
          >
            <span>Skills</span>
          </Link>
          <Link
            to="#projects"
            onClick={() => handleScroll("projects")}
            className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover"
          >
            <span>Projects</span>
          </Link>
          <Link
            to="#contact"
            onClick={() => handleScroll("contact")}
            className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className="mt-0 pt-4 flex gap-4 md:mt-auto md:pt-12">
        <Link
          to="https://github.com/Teodor29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit no-underline m-0"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/teodorlien"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit no-underline m-0"
        >
          <FaLinkedin size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
