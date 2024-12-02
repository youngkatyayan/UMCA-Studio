import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
// import Footer from './components/Footer.jsx'
function App() {

  return (
    <Router>
        <Home />
        {/* <Footer/> */}
    </Router>
  )
}

export default App
