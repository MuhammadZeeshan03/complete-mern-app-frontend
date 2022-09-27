import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleClick = async () => {
    console.log(name)
    if (!name || !price || !category || !company) {
      setError(true)
      return false
    }

    const user_id = JSON.parse(localStorage.getItem('user')).user_id

    let result = await fetch('http://localhost:5000/addproduct', {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, user_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(result)
    if (result.status === 200) {
      alert('Product added')
      navigate('/')
    }
  }

  return (
    <div className="product">
      <h1>add Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      {error && !name && <span className="error">Enter valid name</span>}
      <input
        type="text "
        value={price}
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value)
        }}
        placeholder="Enter Product Price"
      />
      {error && !price && <span className="error">Enter valid Price</span>}
      <input
        type="text"
        className="inputBox"
        value={category}
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      />
      {error && !category && (
        <span className="error">Enter valid category</span>
      )}
      <input
        type="text"
        className="inputBox"
        value={company}
        placeholder="Enter Product Company"
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      />
      {error && !company && <span className="error">Enter valid Company</span>}
      <button onClick={handleClick} className="appbutton" type="button">
        Add Product
      </button>
    </div>
  )
}

export default AddProduct
