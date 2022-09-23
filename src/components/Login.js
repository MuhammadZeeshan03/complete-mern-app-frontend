import { React, useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log(email, password)
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
