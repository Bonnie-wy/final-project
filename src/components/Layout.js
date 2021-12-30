import React from 'react'
import NavBar from './NavBar'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
