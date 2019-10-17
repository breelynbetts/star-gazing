import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Blog from './pages/Blog.js';
import Home from './pages/Home.js';
import logo from './logo.jpg';
import './App.css'



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
      icon: "ion-ios-home"
    },
    {
      text: "Blog",
      path: "/blog",
      icon: "ion-ios-home"
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "ion-ios-home"
    },
    {
      text: "About",
      path: "/about",
      icon: "ion-ios-home"
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
