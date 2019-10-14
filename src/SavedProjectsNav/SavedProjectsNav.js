import React from 'react';

const SavedProjectsNav = ({ projects }) => {
let project = projects.map((project, index) => <button key={index}>{project.name}</button>);
  return (
    <div>
      { project }
    </div>
  )
}

export default SavedProjectsNav