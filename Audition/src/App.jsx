import React, { useState } from 'react';
import './App.css'
import Home from './components/Home.jsx'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
// import Footer from './components/Footer.jsx'
function App() {


  // inspect is disabled 
  //   useEffect(() => {
  //     const disableDevTools = (e) => {
  //         if (
  //             (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
  //             e.key === "F12"
  //         ) {
  //             e.preventDefault();
  //             // alert("Inspecting is disabled!");
  //         }
  //     };

  //     document.addEventListener("keydown", disableDevTools);
  //     return () => document.removeEventListener("keydown", disableDevTools);
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
