import React, { useState } from "react"
import  "./NavbarStyles.css"
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar=()=>{

    let[click,setClick]=useState(false)
    let handleClick=()=>{setClick(!click);}

    let [color,setColor]=useState(false)
    let changeColor =()=>{
        if(window.scrollY >=100 ){
            setColor(true);

        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return(
        <div id={color ? "nav nav-bg":"nav"}> 

        <Link to={"/"}>
            <h1>Portfolio</h1>
        </Link>
       {/* *** */}
        <ul className ={click ? "navmenu active" : "navmenu"} >
      
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className = "hamburger" onClick={handleClick}>

            {click ? (<FaTimes size={20} style={{color:"white"}} ></FaTimes>):( <FaBars size={20} style={{color:"white"}} ></FaBars>)}
           
            

        </div>

        </div>
    )
}
export default Navbar