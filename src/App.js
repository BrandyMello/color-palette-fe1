import React, { Component } from 'react';
import './App.css';
import { getProjects, getAllPalettes } from './apiCalls/apiCalls';
import SavedProjectsNav from './SavedProjectsNav/SavedProjectsNav';
import SaveForm from './SaveForm/SaveForm';
import Palette from './Palette/Palette'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      palettes: [],
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

render() {
  const { projects } = this.state;
  let projectList = projects.map((project, index) =>{
    return <div key={index}>
      <p>{project.name}</p>
    </div>
  })
  return (
    <div>
    <h1>Color Palette</h1>
      { projectList }
      <SavedProjectsNav projects={ this.state.projects }/>
      <Palette />
      <SaveForm projects={ this.state.projects } />
    </div>
  );
}

 
}

export default App;
