import React from 'react';

const SaveForm = ({ projects }) => {
  console.log(projects)
  let eachProject = projects.map((project, index) => <option key={index} value={project.name}>{ project.name }</option>)
  return (
    <form>
      <select>
        { eachProject }
      </select>
    </form>
    
  )
}

export default SaveForm