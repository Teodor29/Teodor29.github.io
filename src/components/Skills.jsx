import React from "react";

const Skills = ({ skills }) => {
  return (
    <div id="skills" className="py-4 md:py-8">
      <h2 className="mb-4">Skills</h2>
      <div className="flex flex-col gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <div className="">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-60">
                {category}
              </h3>
              <ul className="flex gap-3 pl-0 list-none flex-wrap">
                {items.map((skill) => (
                  <li key={skill} className="pill-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
