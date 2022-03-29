import React from 'react'
import logo from '../logo.svg';
import "../style.css"
function Navbar() {
  return (
    <nav>
        <img src={logo} alt='logo'  width={40}/>
        <h3>ReactFacts</h3>
        <h4>React Course-Project 1</h4>

    </nav>
  )
}

export default Navbar