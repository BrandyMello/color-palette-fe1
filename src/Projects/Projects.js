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
            className="palette-name"
            contentEditable={true}
            suppressContentEditableWarning={true}
            onKeyUpCapture={e => props.handlePaletteNameChange(e, projPalette)}
          >
            {projPalette.name}
          </th>
        </tr>
        <tr key={projPalette.id}>
          <td key={index} style={{ backgroundColor: projPalette.colorOne }}>
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorTwo }}>
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorThree }}>
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorFour }}>
          </td>
          <td key={index} style={{ backgroundColor: projPalette.colorFive }}>
          </td>
          <button
            className="delete-palette"
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
        className="project-name-h2"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyUpCapture={e => props.handleProjectNameChange(e, props)}
      >
        {props.name}
      </h2>
      <button type="submit" className="delete-project" onClick={() => props.deleteSpecificProject(props.id)}>Delete Project</button>
      <table>{paletteRow}</table>
    </div>
  );
};

export default Projects;
