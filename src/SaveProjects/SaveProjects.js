import React, { Component } from 'react'
import './SaveProjects.css'
import {addNewProject } from '../apiCalls/apiCalls';

class SaveProjects extends Component {
  constructor() {
    super()
    this.state = {
      projectName: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveNewProject = async(e) => {
    e.preventDefault()
    addNewProject({name: this.state.projectName});
  }
  
  render() {
    return (
    <form className="save_project_form">
      <input 
      className="project_input"
      type="text"
      id="name"
      name="projectName"
      placeholder="New Project Name"
      value={this.state.projectName} 
      onChange={this.handleChange}
      />
      <button 
      className="add_project_button"
      name="newProject"
      type="submit"
      onClick={ this.saveNewProject}
      >
      Create New Project
      </button>
    </form>
    )
  }
}

export default SaveProjects