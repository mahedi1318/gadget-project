import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    <>
      <div className='flex sora_font'>
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
      </div>
    </>
  )
}

export default NavItems
