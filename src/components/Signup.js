import { React, useState } from 'react'
const Signup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const collectData = () => {
    console.log(name, email, password)
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
