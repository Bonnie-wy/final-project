import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <Logo />
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/workout">Workout</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
