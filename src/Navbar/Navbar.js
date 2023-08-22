import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  
  
    return (
    <nav className='navbar'>
        <div className='Container'>
        <h3 className='logo'>URLZenith</h3>
        </div>
        <ul className='nav-links'> 

        <Link to="/" className='Home'>
            <li>Home</li>
        </Link>

        <Link to="/about" className='about'>
            <li>About</li>
        </Link>
        

        <Link to="/todolist" className='todolist'>
            <li>TDL</li>
        </Link>
        

        {/* <Link to="/contact" className='contact'>
            <li>Contact</li>
        </Link> */}
        
        <Link to="/ContactUsPage" className='ContactUsPage'>
            <li>Contact US</li>
        </Link>

        <Link to="/signup" className='signup'>
            <li>Sign Up</li>
        </Link>
        
        
         </ul>

         

    </nav>
  )
}

export default Navbar
