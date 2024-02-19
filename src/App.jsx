import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Project from "./Components/Project"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

const App = () => {
  return (
    <div>
      {/* <h1>hello</h1> */}

      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Project/>} path="/project"></Route>
        <Route element={<About/>} path="/about"></Route>
        <Route element={<Contact/>} path="/contact"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
