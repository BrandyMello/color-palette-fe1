import React from 'react';

const ProjectsDropDown = ({ projects }) => {
  let eachProject = projects.map((project, index) => <option key={index} value={project.name}>{ project.name }</option>)
  return (
    <form name="newPalette">
      <select>
        { eachProject }
      </select>
    </form>
    
  )
}

export default ProjectsDropDown