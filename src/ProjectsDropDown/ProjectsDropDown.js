import React from "react";
import './ProjectsDropDown.css'

const ProjectsDropDown = ({ projects, handleDropDown }) => {
  let eachProject = projects.map((project, index) => (
    <option key={index} value={project.name}>
      {project.name}
    </option>
  ));
  return (
    <div class="custom-select">
      <h4>Select A Project To Save A Palette</h4>
      <select
        onChange={e => handleDropDown(e.target.value)}
        className="new_palette_name"
      >
        {eachProject}
      </select>
    </div>
  );
};

export default ProjectsDropDown;
