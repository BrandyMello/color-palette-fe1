import React from 'react';

const SaveForm = ({ projects }) => {
  let eachProject = projects.map((project, index) => <option key={index} value={project.name}>{ project.name }</option>)
  return (
    <form name="newPalette">
      <select>
        { eachProject }
      </select>
      <input name="newPalette" placeholder="New Palette Name"></input>
      <button name="newPalette" type="submit">Submit</button>
    </form>
    
  )
}

export default SaveForm