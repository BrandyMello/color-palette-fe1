import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedProjectsNav = ({ projects }) => {
  let project = projects.map((project, index) => <NavLink to={`/projects/${project.id}`}><button key={index}>{project.name}</button></NavLink>);
  return (
    <div> 
      { project }
    </div>
  )
}

export default SavedProjectsNav