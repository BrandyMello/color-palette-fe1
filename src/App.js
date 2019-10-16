import React, { Component } from 'react';
import './App.css';
import { getProjects, getAllPalettes, updateProject } from './apiCalls/apiCalls';
import SavedProjectsNav from './SavedProjectsNav/SavedProjectsNav';
import ProjectsDropDown from './ProjectsDropDown/ProjectsDropDown';
import Palette from './Palette/Palette';
import Projects from './Projects/Projects';
import { Route, NavLink } from 'react-router-dom';
import Nav from './Nav/Nav';
import RandomPalette from './RandomPalette/RandomPalette'
import SaveProjects from './SaveProjects/SaveProjects'
import SavePalette from './SavePalette/SavePalette'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      projectName: '',
      palettes: [],
      colors: [
        {color_1: this.generateRandomHex()},
        {color_2: this.generateRandomHex()},
        {color_3: this.generateRandomHex()},
        {color_4: this.generateRandomHex()},
        {color_5: this.generateRandomHex()}
      ],
      message: ''
    }
  }

async componentDidMount() {
  try {
    const projects = await getProjects();
    const palettes = await getAllPalettes();
    this.setState({ projects: projects })
    this.setState({ palettes: palettes })
  } catch ({ message }) {
    this.setState({ error: message })
  }  
}

generateRandomHex = () => {
  const characters = '0123456789ABCDEF';
  let hex = '';
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return `#${hex}`;
}

generateRandomPalette = () => {
  this.setState({ colors: [
    {color_1: this.generateRandomHex()},
    {color_2: this.generateRandomHex()},
    {color_3: this.generateRandomHex()},
    {color_4: this.generateRandomHex()},
    {color_5: this.generateRandomHex()}
  ]
  })
}

render() {
  const { projects } = this.state;
  return (
    <div>
      <Nav />
      <main>
        <Route exact path='/' render={() => (
          <div>
            <SavedProjectsNav projects={this.state.projects} />
            <RandomPalette colors={this.state.colors} generateRandomPalette={this.generateRandomPalette}/>
            <SaveProjects />
            <SavePalette projects={this.state.projects} colors={this.state.colors}/>
          </div>)}
        />
        <Route
          path='/projects/:id'
          render={({ match }) => {
            const { id } = match.params;
            const foundProject = projects.find(
              project => project.id === parseInt(id)
            )
            return (
              <div>
                <Projects {...foundProject} palettes={this.state.palettes} updateProjectName={this.updateProjectName}/>
              </div>
            )
          }}
        />
      </main>  
    </div>
  );
}

 
}

export default App;

// component = { NavLink } to = {`/projects/${foundProject.id}`}

