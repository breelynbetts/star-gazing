import React from 'react'

import './AppHeader.css'
import { NavLink } from 'react-router-dom';

// Note how functional components that don’t have additional logic simply return their markup.
const AppHeader = () => (
  <header className="AppHeader">
    <img src={require("./logo.jpg")} className="Logo" alt="logo" />
    <nav className="Nav">
      <ul>
        <li><NavLink to="/"><img src={require("./house.png")} className="Home" alt="home" /></NavLink></li>
        <li><NavLink to="/AstronomyImage"><img src={require("./apod.png")} className="Apod" alt="apod" /></NavLink></li>
        <li><NavLink to="/"><img src={require("./game.png")} className="Game" alt="game" /></NavLink></li>
      </ul>
    </nav>
  </header>

)

export default AppHeader
