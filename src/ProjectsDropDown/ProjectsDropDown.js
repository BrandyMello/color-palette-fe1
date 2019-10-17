import React from "react";

const ProjectsDropDown = ({ projects, handleDropDown }) => {
  let eachProject = projects.map((project, index) => (
    <option key={index} value={project.name}>
      {project.name}
    </option>
  ));
  return (
    <form className="newPalette">
      <select
        onChange={e => handleDropDown(e.target.value)}
        className="new_palette_name"
      >
        {eachProject}
      </select>
    </form>
  );
};

export default ProjectsDropDown;
