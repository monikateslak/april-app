import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Navbar.css'

const Home = () => <Home></Home>

function Navbar() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={Home}></Route>
      </Routes>
    </Router>
      <div id='nav-css'>
        <ul>
          <li>logo</li>
          <li>home</li>
          <li>shop</li>
          <li>free</li>
          <li>about</li>
          <li>contact</li>
          <li>join</li>
        </ul>
        <p>RURA LEPSZA NIZ FURA</p>
      </div>
    </>
  )
}

export default Navbar
