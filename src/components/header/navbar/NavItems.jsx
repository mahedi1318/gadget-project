import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    <>   
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/statistics">Statistics</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/portfolio">Portfolio</Link>
        </li>      
    </>
  )
}

export default NavItems
