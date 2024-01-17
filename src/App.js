import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div>
    <Router>
      <div className="AppContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
       
      </div>
    </Router>
  
    </div>
  );
}

export default App;

