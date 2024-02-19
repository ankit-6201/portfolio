import React from 'react'
import Navbar from "./Navbar"
import Heroimg2 from "./Heroimg2"
import Footer from "./Footer"
import AboutContent from './AboutContent'

const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading="ABOUT." text ="I'm a Friendly Front-End Developer" ></Heroimg2>
     <AboutContent></AboutContent>
     <Footer/>
    </div>
  )
}

export default About
