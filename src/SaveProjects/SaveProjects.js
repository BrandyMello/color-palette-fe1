import React, { Component } from "react";
import "./SaveProjects.css";

class SaveProjects extends Component {
  constructor() {
    super();
    this.state = {
      projectName: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearInput = () => {
    this.setState({ projectName: "" });
  };

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
          onClick={() => this.clearInput()}
        />
        <button
          className="add_project_button"
          name="newProject"
          type="submit"
          onClick={e =>
            this.props.saveNewProject({ name: this.state.projectName }, e)
          }
        >
          Create New Project
        </button>
      </form>
    );
  }
}

export default SaveProjects;
