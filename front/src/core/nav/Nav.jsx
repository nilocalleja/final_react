import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
const Nav = () => {
  return (
    <nav>
    
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Nav