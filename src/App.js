import React, { Component } from 'react';
import './App.css';
import { getProjects } from './apiCalls/apiCalls';
import SavedProjectsNav from './SavedProjectsNav/SavedProjectsNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      message: ''
    }
  }

async componentDidMount() {
  try {
    const projects = await getProjects();
    this.setState({projects: projects})
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
    </div>
  );
}

 
}

export default App;
