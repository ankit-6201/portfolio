import React from "react"
import "./FooterStyle.css"
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer =()=>{
    return(
        <div className="footer">
          <div className="footer-container" >
             <div className="left">
                <div className="location"> 
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p style={{color:"#fff"}}>MR-14 Btm Layout,</p>
                    <p  style={{color:"#fff"}}>India.</p>
                </div>
                </div>
                <div className="phone">
                <h4 style={{color:"#fff"}}>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                6201968732
                </h4>
                   
                </div>
                <div className="email">
                <h4 style={{color:"#fff"}}>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/> 
                ankitraj8579@gmail.com
                </h4>
                
                </div>

             </div>
             <div className="right">
                <div className="social">
                {/* <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/> 
                <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/> 
                <Fa size={20} style={{color:"#fff",marginRight:"2rem"}}/>  */}
                </div>

             </div>
          </div>
        </div>
    )
}
export default Footer