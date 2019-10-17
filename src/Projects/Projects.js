import React from "react";
import "./Projects.css";

const Projects = props => {
  let projectPalettes = props.palettes.filter(palette => {
    if (palette.projectName === props.name) {
      return palette;
    }
  });
  let paletteRow = projectPalettes.map((projPalette, index) => {
    return (
      <>
        <tr>
          <th
            contentEditable={true}
            suppressContentEditableWarning={true}
            onKeyUpCapture={e => props.handlePaletteNameChange(e, projPalette)}
          >
            {projPalette.name}
          </th>
        </tr>
        <tr key={projPalette.id}>
          <td key={index} style={{ backgroundColor: projPalette.colorOne }}>
            lock
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorTwo }}>
            lock
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorThree }}>
            lock
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorFour }}>
            lock
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorFive }}>
            lock
          </td>
          <button
            type="submit"
            onClick={() =>
              props.deleteSpecificPalette(props.palettes[index].id)
            }
          >
            Delete Palette
          </button>
        </tr>
      </>
    );
  });
  return (
    <div>
      <h2
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyUpCapture={e => props.handleProjectNameChange(e, props)}
      >
        {props.name}
      </h2>
      {/* <button type="submit" onclick={() => props.deleteSpecificProject(props.id)}>Delete Project</button> */}
      <table>{paletteRow}</table>
    </div>
  );
};

export default Projects;
