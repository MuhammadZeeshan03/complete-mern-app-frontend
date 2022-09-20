import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Signup from './components/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1> Product Listing Component</h1>} />
          <Route path="/add" element={<h1> Add Product Component</h1>} />
          <Route path="/update" element={<h1> Update Product Component</h1>} />
          <Route path="/logout" element={<h1> Logout</h1>} />
          <Route path="/Profile" element={<h1> User Profile</h1>} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
