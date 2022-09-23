import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })
  const handleLogin = async () => {
    console.log(email, password)

    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    console.log(result)

    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/')
    } else {
      alert('Please Enter Correct Details')
    }
  }
  return (
    <div className="login">
      <input
        type="text "
        className="inputBox"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />

      <input
        type="password "
        className="inputBox"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />

      <button className="appbutton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  )
}
