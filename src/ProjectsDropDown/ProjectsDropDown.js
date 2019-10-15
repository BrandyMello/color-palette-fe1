import React from 'react';

const ProjectsDropDown = ({ projects, handleDropDown }) => {
  let eachProject = projects.map((project, index) => <option key={index} value={project.name}>{ project.name }</option>)
  return (
    <form name="newPalette">
      <select onChange={(e) => handleDropDown(e.target.value)}>
        { eachProject }
      </select>
    </form>
    
  )
}

export default ProjectsDropDown