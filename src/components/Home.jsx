import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><NavLink to='/game'>Play</NavLink></li>
      </ul>
    </div>

  )
}

export default Home