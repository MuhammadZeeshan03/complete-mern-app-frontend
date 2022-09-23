import { React, useState } from 'react'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')

  const handleClick = async () => {
    const user_id = JSON.parse(localStorage.getItem('user')).user_id

    let result = await fetch('http://localhost:5000/addproduct', {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, user_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = result.json()
    console.log(result)
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
      <input
        type="text "
        value={price}
        className="inputBox"
        onChange={(e) => {
          setPrice(e.target.value)
        }}
        placeholder="Enter Product Price"
      />
      <input
        type="text"
        className="inputBox"
        value={category}
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value)
        }}
      />
      <input
        type="text"
        className="inputBox"
        value={company}
        placeholder="Enter Product Company"
        onChange={(e) => {
          setCompany(e.target.value)
        }}
      />

      <button onClick={handleClick} className="appbutton" type="button">
        Add Product
      </button>
    </div>
  )
}

export default AddProduct
