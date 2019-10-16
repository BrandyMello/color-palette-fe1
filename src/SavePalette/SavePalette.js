import React, { Component } from 'react'
import './SavePalette.css'
import {addNewPalette, getAllPalettes} from '../apiCalls/apiCalls'
import ProjectsDropDown from '../ProjectsDropDown/ProjectsDropDown'

class SavePalette extends Component {
  constructor() {
    super()
    this.state = {
      project: '',
      paletteName: '',
      palettes: []
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
  
  render() {
    return (
    <form className="add_palette_form">
      <ProjectsDropDown projects={this.props.projects} handleDropDown={this.handleDropDown}/>
      <input 
      className="palette_input"
      type="text"
      id="name"
      name="paletteName"
      placeholder="New Palette Name"
      value={this.state.paletteName} 
      onChange={this.handleChange}
      />
      <button 
      className="add_palette_button"
      name="newPalette"
      type="submit"
      onClick={() => this.props.saveNewPaletteToProject({
              name: this.state.paletteName,
              projectName: this.state.project,
              colorOne: this.props.colors[0].color_1,
              colorTwo: this.props.colors[1].color_2,
              colorThree: this.props.colors[2].color_3,
              colorFour: this.props.colors[3].color_4,
              colorFive: this.props.colors[4].color_5,
              projectId: this.getProjectId()
            })}
      >
      Save Palette
      </button>
    </form>
    )
  }
}

export default SavePalette