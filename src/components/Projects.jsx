import React from 'react';
import { Box } from '@mui/material';

const Projects = () => {
    return (
        <Box id="projects">
            <h2>Projects</h2>
            <Box sx={{ 
                ":hover": {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                }}>
                <h3>Project 1</h3>
                <p>Project description</p>
            </Box>
            <Box sx={{ 
                ":hover": {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                }}>
                <h3>Project 2</h3>
                <p>Project description</p>
            </Box>
            <Box sx={{ 
                ":hover": {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                }}>
                <h3>Project 3</h3>
                <p>Project description</p>
            </Box>
            <Box sx={{
                ":hover": {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                }}>
                <h3>Project 4</h3>
                <p>Project description</p>
            </Box>
        </Box>
    );
}

export default Projects;