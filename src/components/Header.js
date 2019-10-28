import React from 'react'
import { Router } from '@reach/router';
import NavBar from './NavBar.js';
import PicOfDay from '../pages/PicOfDay.js';
import Events from '../pages/Events.js';
import Search from '../pages/Search.js';
import Home from '../pages/Home.js';
import logo from '../media/logo.jpg';
import * as Icon from 'react-feather';

const Header = () => {
    const navLinks = [
        {
          text: "Home",
          path: "/",
          icon: <Icon.Home color='black' />
        },
        {
          text: "Search",
          path: "/search",
          icon: <Icon.Search color='black' />
        },
        {
          text: "Events",
          path: "/events",
          icon: <Icon.Compass color='black' />
        },
        {
          text: "PicOfDay",
          path: "/picofday",
          icon: <Icon.Star color='black' />
        }
      ]
    
      return (
        <div className="App">
          <NavBar 
            navLinks = { navLinks }
            logo = { logo }
            // background = {  }
            // linkColor = { 'none'}
          />
          <Router>
            <Home path="/"/>
            <Events path="/events" />
            <Search path="/search" /> 
            <PicOfDay path ="/picofday" />
          </Router>
        </div>
      )
}

export default Header