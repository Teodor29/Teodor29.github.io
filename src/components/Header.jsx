import { Link } from "react-router-dom";
import { Box, textFieldClasses } from "@mui/material";
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
    <Box className="header">
      <Box>
        <Link to="#home" onClick={() => handleScroll("header")}>
          <h1
            sx={{
              color: "text.highlight",
            }}
          >
            Teodor Lien
          </h1>
        </Link>
        <h2 sx={{ color: "text.secondary" }}>Frontend Developer</h2>
        <p>Student</p>

        <Box className="nav-links">
          <Link to="#home" onClick={() => handleScroll("home")}>
            Home
          </Link>
          <Link to="#skills" onClick={() => handleScroll("skills")}>
            Skills
          </Link>
          <Link to="#projects" onClick={() => handleScroll("projects")}>
            Projects
          </Link>
          <Link to="#contact" onClick={() => handleScroll("contact")}>
            Contact
          </Link>
        </Box>
      </Box>
      <Box className="links">
        <Link to="https://github.com/Teodor29" target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/teodor-lien-a848b026a/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
