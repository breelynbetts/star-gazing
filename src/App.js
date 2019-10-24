import React, { useEffect } from 'react';
import Header from "./components/Header.js"
import { apiHost } from './api'

const App = () => {
  // Because App is the "uppermost" component (see index.js), code in the useEffect function
  // is equivalent to an overall initialization routine. Note however that every component
  // can have its own useEffect, and so initialization can be separated on a per-component
  // basis.
  useEffect(() => apiHost('https://images-api.nasa.gov'))

  // When React components are implemented as functions, their return value is the component’s
  // content (i.e., what the render() method returns for class-based components).
  // const navLinks = [

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
