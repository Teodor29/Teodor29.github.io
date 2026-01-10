import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


function Footer() {
    return (
        <Box className="py-8" id="contact">
            <h2 className="mb-4">Contact me!</h2>
            <Box className="flex flex-col gap-2">
                <p>
                    <Link to="mailto:teodor.lien@gmail.com" className="text-inherit flex items-center">
                        <IoMail size={16} />
                        teodor.lien@gmail.com
                    </Link>
                </p>
                <p>
                    <Link
                        to="https://www.linkedin.com/in/teodorlien"
                        target="_blank"
                        className="text-inherit flex items-center"
                    >
                        <FaLinkedin size={16} />
                        LinkedIn
                    </Link>
                </p>
            </Box>
        </Box>
    );
}

export default Footer;
