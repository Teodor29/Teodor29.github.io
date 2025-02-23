import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/_variables.scss";

const Projects = () => {
  const handleCardClick = () => {
    window.open(
      "https://github.com/Teodor29/e-scooter-project-vteam",
      "_blank"
    );
  };

  return (
    <Box id="projects" className="projects">
      <h2>Projects</h2>
      <Box className="cards">
        <Box className="card">
          <CardActionArea
            onClick={handleCardClick}
            sx={{
              padding: "1rem",
            }}
          >
            <CardMedia
              component="img"
              height="290"
              image="scooter-admin-map.png"
              alt="green iguana"
            />
            <CardContent
              sx={{
                fontFamily: "Inter, sans-serif",
                padding: "1rem 0 0 0",
              }}
            >
              <h3>E-scooter Rental</h3>
              <p>
                An e-scooter management system featuring an admin web client,
                customer web and mobile clients. The backend, database, and
                clients all run in Docker for easy deployment.
              </p>
              <Box id="skills" className="skills">
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>MongoDB</li>
                  <li>SCSS</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Figma</li>
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </Box>
            </CardContent>
          </CardActionArea>
        </Box>
        <Box className="card">
          <CardActionArea
            onClick={handleCardClick}
            sx={{
              padding: "1rem",
            }}
          >
            <CardMedia
              component="img"
              height="290"
              image="lien-capital.png"
              alt="green iguana"
            />
            <CardContent
              sx={{
                fontFamily: "Inter, sans-serif",
                padding: "1rem 0 0 0",
              }}
            >
              <h3>Lien Capital</h3>
              <p>
                A website for a financial company. The website is built with PHP-framework Pico and styled with SCSS.
              </p>
              <Box id="skills" className="skills">
                <ul>
                  <li>PHP</li> 
                  <li>SCSS</li>
                  <li>Twig</li>
                  <li>Pico</li>
                  <li>Git</li>
                </ul>
              </Box>
            </CardContent>
          </CardActionArea>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
