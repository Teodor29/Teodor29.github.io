import React from "react";
import { Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ProjectCard = ({ project }) => {
    return (
        <Box className="bg-dark-2 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01] group">
            <CardActionArea
                sx={{
                    padding: "1rem",
                }}
                href={project.link}
                target="_blank"
                style={{ textDecoration: "none" }}
                className="block"
            >
                <CardMedia
                    component="img"
                    height="290"
                    image={project.image}
                    alt={project.altText}
                    className="box-border h-full object-cover rounded-lg border-2 border-dark-4 shadow-[0_0_10px_rgba(58,58,58,0.2)] group-hover:shadow-[0_0_15px_rgba(74,74,74,0.3)] group-hover:border-dark-5 transition-shadow duration-1000 ease-in-out"
                />
                <CardContent
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        padding: "1rem 0 0 0",
                    }}
                >
                    <h3 className="group-hover:text-accent-hover transition-colors duration-300 ease-in-out">{project.title}</h3>
                    <p className="text-sm pt-2 text-primary group-hover:transition-colors duration-300 ease-in-out">{project.description}</p>
                    <Box className="p-0 pt-4">
                        <ul className="flex gap-2 m-0 p-0 list-none flex-wrap">
                            {project.skills.map((skill, index) => (
                                <li key={index} className="py-1 px-2 text-sm">{skill}</li>
                            ))}
                        </ul>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Box>
    );
}

export default ProjectCard;