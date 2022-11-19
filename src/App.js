import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
