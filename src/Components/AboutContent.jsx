import React from 'react'
import "./AboutContentStyles.css"
import {Link} from "react-router-dom"
import React1 from "../assets/Reactjs1.jpg"
import Web2 from "../assets/web3.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      {/* <h1>AboutContent</h1> */}
       <div className="left">
          <h1>Who Am I?</h1>
          <p>I am Seeking Employment with a company where I can grow Professionally and personally.Proficient in HTML,CSS,JAVASCRIPT and REACT JS.Passionate about implementing and launching new projects.</p>
          <Link to="/contact">
            <button className="btn3">Contact</button>
          </Link>
       </div>
       <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1}alt="true"  className="img"/>

          </div>
          <div className="img-stack bottom">
            <img src={Web2}alt="true"  className="img"/>

          </div>
        </div>
       </div>
    </div>
  )
}

export default AboutContent
