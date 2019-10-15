import React from 'react'

import './AppHeader.css'

// Note how functional components that don’t have additional logic simply return their markup.
const AppHeader = () => (
  <header className="AppHeader">
    <img src={require("./logo.jpg")} className="Logo" alt="logo" />
    <nav className="Nav">
      <a href="/"><img src={require("./house.png")} className="Home" alt="home" /></a>
      <a href="/"><img src={require("./apod.png")} className="Apod" alt="apod" /></a>
      <a href="/"><img src={require("./game.png")} className="Game" alt="game" /></a>
    </nav>
  </header>

)

export default AppHeader
