import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Login from './component/Login.js'; 
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route path="*" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Render Login component within a Route */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
