import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="navBar">
        <h1>Color Palette</h1>
        <img src="https://user-images.githubusercontent.com/46384968/66802881-2ce58a80-eedb-11e9-97f2-e60bf5a8e28b.png" className='logo'></img>
        {/* <p>insert logo</p> */}
        <form>
          <input placeholder= "search"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Nav