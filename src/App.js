import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Signup from './components/Signup'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<h1> Product Listing </h1>} />
            <Route path="/add" element={<h1> Add Product </h1>} />
            <Route path="/update" element={<h1> Update Product </h1>} />
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
