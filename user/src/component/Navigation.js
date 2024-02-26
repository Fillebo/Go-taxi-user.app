// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Navigation.css'; // Import the CSS file

function Navigation() {
  return (
    <nav className='nav'>
      <h1><Link to="/home">Home</Link></h1>
      <h1> <Link to="/about">About</Link></h1>
       <h1><Link to="/contact">Contact</Link></h1>
      
    </nav>
  );
}

export default Navigation;
