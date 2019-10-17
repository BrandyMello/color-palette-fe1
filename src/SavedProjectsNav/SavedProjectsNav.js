import React from "react";
import { NavLink } from "react-router-dom";
import "./SavedProjectsNav.css";

const SavedProjectsNav = ({ projects }) => {
  let project = projects.map((project, index) => (
    <NavLink to={`/projects/${project.id}`} key={index + Date.now()}>
      <button className="project_buttons">{project.name}</button>
    </NavLink>
  ));
  return (
    <div className="saved-section">
      <h2>Your Saved Projects</h2>
    {project}
    </div>
    )
    
};

export default SavedProjectsNav;
