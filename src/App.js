import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Signup from './components/Signup'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import ProductsList from './components/ProductsList'
import UpdateProduct from './components/UpdateProduct'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<ProductsList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1> Logout</h1>} />
            <Route path="/Profile" element={<h1> User Profile</h1>} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
