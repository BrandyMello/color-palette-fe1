import React, { Component } from "react";
import "./App.css";
import {
  getProjects,
  getAllPalettes,
  deleteProject,
  deletePalette,
  addNewProject,
  addNewPalette,
  updateProject,
  updatePalette
} from "./apiCalls/apiCalls";
import SavedProjectsNav from "./SavedProjectsNav/SavedProjectsNav";
import Projects from "./Projects/Projects";
import { Route, NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";
import RandomPalette from "./RandomPalette/RandomPalette";
import SaveProjects from "./SaveProjects/SaveProjects";
import SavePalette from "./SavePalette/SavePalette";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      projectName: "",
      palettes: [],
      colors: [
        { color_1: this.generateRandomHex() },
        { color_2: this.generateRandomHex() },
        { color_3: this.generateRandomHex() },
        { color_4: this.generateRandomHex() },
        { color_5: this.generateRandomHex() }
      ],
      message: ""
    };
  }

  async componentDidMount() {
    try {
      const projects = await getProjects();
      const palettes = await getAllPalettes();
      this.setState({ projects: projects });
      this.setState({ palettes: palettes });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  generateRandomHex = () => {
    const characters = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return `#${hex}`;
  };

  generateRandomPalette = () => {
    this.setState({
      colors: [
        { color_1: this.generateRandomHex() },
        { color_2: this.generateRandomHex() },
        { color_3: this.generateRandomHex() },
        { color_4: this.generateRandomHex() },
        { color_5: this.generateRandomHex() }
      ]
    });
  };

  saveNewProject = async (name, e) => {
    e.preventDefault();
    try {
      await addNewProject(name);
      const projects = await getProjects();
      this.setState({ projects });
    } catch (error) {
      this.setState({ error });
    }
  };

  saveNewPaletteToProject = async paletteInfo => {
    try {
      await addNewPalette(paletteInfo);
      const palette = await getAllPalettes();
      this.setState({ palettes: { ...palette } });
    } catch (error) {
      this.setState({ error });
    }
  };

  handlePaletteNameChange = (e, oldPalette) => {
    const newPalette = { ...oldPalette, name: e.target.innerText };
    updatePalette(newPalette);
  };

  handleProjectNameChange = (e, props) => {
    const newProjectName = e.target.innerText;
    const keepPalettes = this.state.palettes.filter(
      palette => palette.projectId === props.id
    );
    keepPalettes.forEach(keptPalette =>
      updatePalette({ ...keptPalette, projectName: newProjectName })
    );
    const newProject = { id: props.id, name: newProjectName };
    updateProject(newProject);
  };

  deleteSpecificProject = async id => {
    try {
      await deleteProject(id);
      const projects = await getProjects();
      this.setState({ projects });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteSpecificPalette = async id => {
    try {
      await deletePalette(id);
      const palettes = await getAllPalettes();
      this.setState({ palettes });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { projects } = this.state;
    return (
      <div>
        <NavLink to="/">
          <button className="homeButton">HOME</button>
        </NavLink>
        <Nav />
        <main>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <SavedProjectsNav projects={this.state.projects} />
                <RandomPalette
                  colors={this.state.colors}
                  generateRandomPalette={this.generateRandomPalette}
                />
                <SaveProjects
                  projects={this.state.projects}
                  saveNewProject={this.saveNewProject}
                />
                <SavePalette
                  projects={this.state.projects}
                  colors={this.state.colors}
                  saveNewPaletteToProject={this.saveNewPaletteToProject}
                />
              </div>
            )}
          />
          <Route
            path="/projects/:id"
            render={({ match }) => {
              const { id } = match.params;
              const foundProject = projects.find(
                project => project.id === parseInt(id)
              );
              return (
                <div>
                  <Projects
                    {...foundProject}
                    palettes={this.state.palettes}
                    updateProjectName={this.updateProjectName}
                    deleteSpecificProject={this.deleteSpecificProject}
                    deleteSpecificPalette={this.deleteSpecificPalette}
                    handlePaletteNameChange={this.handlePaletteNameChange}
                    handleProjectNameChange={this.handleProjectNameChange}
                  />
                </div>
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
