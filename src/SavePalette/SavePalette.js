import React, { Component } from 'react'
import './SavePalette.css'
import {addNewPalette, getProjectPalettes} from '../apiCalls/apiCalls'
import ProjectsDropDown from '../ProjectsDropDown/ProjectsDropDown'

class SavePalette extends Component {
  constructor() {
    super()
    this.state = {
      project: '',
      paletteName: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDropDown = (project) => {
    this.setState({ project })
  }

  getProjectId = () => {
    const matchingProjectId = this.props.projects.find(project => {
      if(project.name === this.state.project) {
        return project.id
      }
    })
    console.log('lol', matchingProjectId.id)
    return matchingProjectId.id
  }

  saveNewPaletteToProject = async(e) => {
    e.preventDefault()
    console.log('colors', this.props.colors)
    console.log('id', this.getProjectId())
    console.log('pName', this.state.project)
    addNewPalette(
      {
        name: this.state.paletteName,
        projectName: this.state.project,
        colorOne: this.props.colors[0].color_1,
        colorTwo: this.props.colors[1].color_2,
        colorThree: this.props.colors[2].color_3,
        colorFour: this.props.colors[3].color_4,
        colorFive: this.props.colors[4].color_5,
        projectId: this.getProjectId()
      })
  }
  
  render() {
    return (
    <form>
      <ProjectsDropDown projects={this.props.projects} handleDropDown={this.handleDropDown}/>
      <input 
      type="text"
      id="name"
      name="paletteName"
      placeholder="New Palette Name"
      value={this.state.paletteName} 
      onChange={this.handleChange}
      />
      <button 
      name="newPalette"
      type="submit"
      onClick={ this.saveNewPaletteToProject}
      >
      Save Palette
      </button>
    </form>
    )
  }
}

export default SavePalette