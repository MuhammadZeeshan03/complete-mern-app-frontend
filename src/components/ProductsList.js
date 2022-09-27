import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProductsList() {
  const [products, setProducts] = useState([])

  // const navigate = useNavigate()
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products', {
      headers: { authorizations: JSON.parse(localStorage.getItem('token')) },
    })
    result = await result.json()
    setProducts(result)
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: 'DELETE',
    })
    result = await result.json()
    if (result) {
      getProducts()
    }
  }

  const searchHandle = async (event) => {
    console.log(event.target.value)
    let search = event.target.value
    if (search) {
      let result = await fetch(`http://localhost:5000/search/${search}`)
      result = await result.json()
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts()
    }
  }
  const resultAray =
    products.length > 0 ? (
      products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={'/update/' + item._id}>Update</Link>
          </li>
        </ul>
      ))
    ) : (
      <h1 style={{ color: 'red' }}>No Data Found</h1>
    )

  return (
    <div className="product-list">
      <h3>Product list</h3>
      <input
        type="text"
        className="search_box"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>
      {resultAray}
    </div>
  )
}

export default ProductsList
