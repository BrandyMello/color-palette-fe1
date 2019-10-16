import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
      <div className="navBar">
        <h1>Color Palette</h1>
        <img src="https://user-images.githubusercontent.com/46384968/66802881-2ce58a80-eedb-11e9-97f2-e60bf5a8e28b.png" className='logo'></img>
        <form>
          <NavLink to='/'><button className="homeButton">HOME</button></NavLink>
          {/* <input placeholder= "search"/>
          <button type="submit">Submit</button> */}
        </form>
      </div>
    )
}

export default Nav