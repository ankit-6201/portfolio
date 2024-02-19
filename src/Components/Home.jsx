import React from "react"
import Navbar from "./Navbar"
import Heroimg from "./Heroimg"
import Footer from "./Footer"
// import Heroimg2 from "./Heroimg2"

// import {Link} from "react-router-dom"

const Home =()=>{
    return(
        <div>
          {/* <Link to={"/"}>Home</Link> */}
          
          <Navbar/>
          <Heroimg></Heroimg>
          <Footer></Footer>
         
        
        </div>
    )
}

export default Home