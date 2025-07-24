import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Project from './sections/Project'
import Contactus from './sections/Contactus'
import About from './sections/About'

const App = () => {
  return (
    <>
      <Navbar />
            <div style={{ marginTop: "4rem" }}></div>
      <Home />
      <About/>
      <Project />
      <Contactus />
      
    </>
  )
}

export default App
