import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const collectData = async () => {
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'Application/json',
      },
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem('user', JSON.stringify(result))
    if (result) {
      navigate('/')
    }
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
        className="inputBox"
        placeholder="Enter Name"
      />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="inputBox"
        placeholder="Enter Enmail"
      />
      <input
        type="password"
        className="inputBox"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        placeholder="Enter Password"
      />
      <button type="button" onClick={collectData} className="appbutton">
        Signup
      </button>
    </div>
  )
}

export default Signup
