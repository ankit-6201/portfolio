import React from 'react'
import Navbar from "./Navbar"
import Heroimg2 from "./Heroimg2"
import Footer from "./Footer"
import Work from "./Work"

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent Works"></Heroimg2>
      <Work></Work>
      <Footer/>
      
    </div>
  )
}

export default Project
