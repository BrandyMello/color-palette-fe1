import React from 'react';
import './Projects.css';
import { updateProject, updatePalette } from '../apiCalls/apiCalls';

const handlePaletteNameChange = (e, oldPalette) => {
  const newPalette = {...oldPalette, name: e.target.innerText} 
  updatePalette(newPalette)
}

const handleProjectNameChange = (e, props) => {
  const newProject = {id: props.id, name: e.target.innerText}
  updateProject(newProject)
}
const Projects = (props) => {
  console.log('projects props', props)
  let projectPalettes = props.palettes.filter(palette => {
    if(palette.projectName === props.name) {
      return palette
    }
  });
  let paletteRow = projectPalettes.map((projPalette, index) => {
   return (
     <>
     <tr>
         <th contentEditable={true} onKeyUpCapture={(e) => handlePaletteNameChange(e, projPalette)}>{projPalette.name}</th>
     </tr>
   <tr key={projPalette.id}>
     <td key={index} style={{ backgroundColor: projPalette.colorOne }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorTwo }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorThree }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorFour }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorFive }}>lock</td>
    </tr>
    </>
   )
})
  return (
    <div>
      <h2 contentEditable={true} onKeyUpCapture={(e) => handleProjectNameChange(e, props)}>{props.name}</h2>
      <table>
        {paletteRow}
      </table>
    </div>
  )
}

export default Projects