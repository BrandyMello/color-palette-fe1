import React from 'react';
// import { NavLink } from 'react-router-dom';

// const goToProject = () => {

// }

const SavedProjectsNav = ({ projects }) => {
let project = projects.map((project, index) => <button key={index}>{project.name}</button>);
console.log(project.id)
  return (
    <div>
      { project }
    </div>
  )
}

export default SavedProjectsNav