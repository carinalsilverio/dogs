import React from  'react'
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Header />
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App

