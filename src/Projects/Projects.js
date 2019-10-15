import React from 'react';
import './Projects.css';

const Projects = (props) => {
  // console.log(props.id)
  let projectPalettes = props.palettes.filter(palette => {
    if(palette.projectName === props.name) {
      return palette
    }
  });
  let paletteRow = projectPalettes.map((projPalette, index) => {
   return (
     <>
     <tr>
       <th>{projPalette.name}</th>
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
  console.log("list", projectPalettes)
  console.log("props in projects", props)
  return (
    <div>
      <h2>{props.name}</h2>
      <table>
        {paletteRow}
      </table>
    </div>
  )
}

export default Projects