import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <p>insert logo</p>
        <form>
          <input placeholder= "search"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Nav