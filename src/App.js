import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login/Login'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Routes path="/" element={<Home />} />
          <Routes path="/login" element={<Login />} />

        </Routes>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
