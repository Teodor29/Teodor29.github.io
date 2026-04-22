import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="py-4 md:py-8" id="contact">
      <h2 className="mb-4">Contact me!</h2>
      <div className="flex flex-col gap-2">
        <p>
          <a href="mailto:teodor.lien@gmail.com" className="text-inherit flex items-center gap-2">
            <IoMail size={16} />
            teodor.lien@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/teodorlien" target="_blank" rel="noopener noreferrer" className="text-inherit flex items-center gap-2">
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://www.github.com/Teodor29" target="_blank" rel="noopener noreferrer" className="text-inherit flex items-center gap-2">
            <FaGithub size={16} />
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
