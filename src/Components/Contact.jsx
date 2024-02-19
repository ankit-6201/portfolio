import React from 'react'
import Navbar from "./Navbar"
import Heroimg2 from "./Heroimg2"
import Footer from "./Footer"
import Form from "./Form"

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading="CONTACT." text="Lets have a chat" ></Heroimg2>
     <Form></Form>
     <Footer/>

    </div>
  )
}

export default Contact
