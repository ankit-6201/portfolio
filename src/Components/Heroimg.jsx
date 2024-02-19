import React from 'react'
import "./HeroStyles.css"
import {Link} from "react-router-dom"

import Intoimg from "../assets/web image.webp"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img  className="img" src={Intoimg} alt="Intoimg" />
        </div>
        <div className="content">
            <p>
              Hi,my name is Ankit Kumar 
              I'm the Software & Web Developer
            </p>
            <Link to="/project" className="btn1"><button>Projects</button></Link>
            <Link to="/contact" className="btn"><button>Contact</button></Link>

        </div>
       
      
    </div>
  )
}

export default Heroimg
