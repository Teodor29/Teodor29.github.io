import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="header h-full flex flex-col pb-6 md:py-28">
      <div>
        <div className="md:mb-16">
          <h1 className="text-5xl font-bold">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="text-fg-heading"
            >
              Teodor Lien
            </a>
          </h1>
          <h2 className="text-xl">Frontend Developer</h2>
        </div>

        <div className="flex gap-3 md:gap-0 md:flex-col md:mb-8">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="navlink hidden md:block"
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="navlink"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="navlink"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="navlink"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex gap-3 md:gap-4 md:mt-auto">
        <a
          href="https://github.com/Teodor29"
          target="_blank"
          rel="noopener noreferrer"
          className="iconlink"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/teodorlien"
          target="_blank"
          rel="noopener noreferrer"
          className="iconlink"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Header;
