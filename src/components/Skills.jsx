import React from "react";

const Skills = ({ skills }) => {
  return (
    <div id="skills" className="py-4 md:py-8">
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
    </div>
  );
};

export default Skills;
