import React from "react";
import { Box } from "@mui/material";

const Skills = ({ skills }) => {
  return (
    <Box id="skills" className="py-8">
      <h2 className="mb-4">Skills</h2>
      <ul className="flex gap-4 pl-0 list-none flex-wrap">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="font-medium text-center py-2 px-4 bg-accent-background rounded-full text-accent-text"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Skills;
