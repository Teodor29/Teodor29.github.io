import React from "react";

const Skills = ({ skills }) => {
  return (
    <div id="skills" className="py-4 md:py-8">
      <h2 className="mb-4">Skills</h2>
      <ul className="flex gap-4 pl-0 list-none flex-wrap">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="pill"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
