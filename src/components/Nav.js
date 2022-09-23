import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')

  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div>
      <img
        className="logo"
        src="https://propakistani.pk/how-to/wp-content/uploads/2020/06/1-27.jpg"
        alt="logo"
      />
      {auth ? (
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
            <Link to="/Profile"> Profile </Link>
          </li>

          <li>
            <Link onClick={logout} to="/signup">
              logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup"> Signup </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Nav
