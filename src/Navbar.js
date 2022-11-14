import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Navbar.css'

const Home = () => <Home></Home>
const Shop = () => <Shop></Shop>
const Free = () => <Free></Free>
const About = () => <About></About>
const Contact = () => <Contact></Contact>
const Join = () => <Join></Join>

function Navbar() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={Home}></Route>
          <Route path='/shop' element={Shop}></Route>
          <Route path='/free' element={Free} ></Route>
          <Route path='/about' element={About}></Route>
          <Route path='/contact' element={Contact} ></Route>
          <Route></Route>
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
