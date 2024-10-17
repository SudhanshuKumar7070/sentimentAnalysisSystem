import React from 'react'
import "./navAi.css"
 
function Navbar() {
  return (
    <>
    <nav className="navbar">
      <h3>&copy; Sk</h3>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link home-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link services-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#info" className="navbar-link info-link">Info</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
