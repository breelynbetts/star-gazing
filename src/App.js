import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Blog from './pages/Blog.js';
import Home from './pages/Home.js';
import logo from './media/logo.jpg';
import * as Icon from 'react-feather';
import './style/App.css'

import { apiHost } from './api'

const App = () => {
  // Because App is the "uppermost" component (see index.js), code in the useEffect function
  // is equivalent to an overall initialization routine. Note however that every component
  // can have its own useEffect, and so initialization can be separated on a per-component
  // basis.
  useEffect(() => apiHost('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'))

  // When React components are implemented as functions, their return value is the component’s
  // content (i.e., what the render() method returns for class-based components).
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: <Icon.Home color='black' />
    },
    {
      text: "Blog",
      path: "/blog",
      icon: <Icon.Search color='black' />
    },
    {
      text: "Contact",
      path: "/contact",
      icon: <Icon.Star color='black' />
    },
    {
      text: "About",
      path: "/about",
      icon: <Icon.Compass color='black' />
    }
  ]

  return (
    <div className="App">
      <NavBar 
        navLinks = { navLinks }
        logo = { logo }
        background = { "white" }
        hoverBackground = { "#ddd" }
        linkColor = { "#fff"}
      />
      <Router>
        <Home path="/" />
        <Contact path="/contact" />
        <Blog path="/blog" /> 
        <About path ="/about" />
      </Router>
    </div>
  )
}

export default App
