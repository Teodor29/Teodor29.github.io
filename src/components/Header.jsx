import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="header h-full flex flex-col pt-8 md:py-28">
      <div>
        <h1 className="text-6xl">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="no-underline">
            Teodor Lien
          </a>
        </h1>
        <h2 className="text-2xl">Frontend Developer</h2>

        <div className="hidden md:flex flex-col pt-12">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover">Home</a>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="no-underline font-semibold self-start py-2 transition-colors hover:text-accent-hover">Contact</a>
        </div>
      </div>
      <div className="mt-0 pt-4 flex gap-4 md:mt-auto md:pt-12">
        <a href="https://github.com/Teodor29" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline m-0">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/teodorlien" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline m-0">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Header;
