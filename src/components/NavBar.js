import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import Logo from './Logo'
import './NavBar.css'

const NavBar = () => {
  const { logout } = useAuth();

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link to="/"><Logo /></Link>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/workout">Workout</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <div className="navigation__logout">
          <Button
              label="Log out"
              onClick={logout}
              isPrimary={false}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
