import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(param.id)
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    console.log(param)
    let result = await fetch(`http://localhost:5000/product/${param.id}`)
    result = await result.json()
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const updateProduct = async () => {
    console.log(param.id)
    let result = await fetch(`http://localhost:5000/product/${param.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    result = await result.json()
    console.log(result)
    navigate('/')
  }

  const user_id = JSON.parse(localStorage.getItem('user')).user_id

  let result = fetch('http://localhost:5000/addproduct/', {
    method: 'get',
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
      <button onClick={updateProduct} className="appbutton" type="button">
        Add Product
      </button>
    </div>
  )
}

export default UpdateProduct
