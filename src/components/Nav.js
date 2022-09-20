import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/"> Home page</Link>
        </li>

        <li>
          <Link to="/add"> Add Product</Link>
        </li>
        <li>
          <Link to="/update"> Update Product</Link>
        </li>
        <li>
          <Link to="/logout"> logout</Link>
        </li>
        <li>
          <Link to="/Profile"> Profile </Link>
        </li>
        <li>
          <Link to="/signup"> Signup </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
