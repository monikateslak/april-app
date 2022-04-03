import React from 'react'
import { ReactDOM } from 'react'
import { Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
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
