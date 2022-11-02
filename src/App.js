import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
//import { ReactDOM } from 'react'
//import { Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import ImagesContainer from './ImagesContainer'


function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>}  ></Route>
          <Route path='/shop' element={<Shop/>} ></Route>
        <Route path='/nav' element={<Navbar/>} ></Route>
        </Routes>
        <Navbar></Navbar>
        <ImagesContainer></ImagesContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          logo <code></code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pool Dance Camp
        </a>
      </header>
    </div>
  )
}


export default App
