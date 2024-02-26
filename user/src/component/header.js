import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger menu icon



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };
    console.log(Header)
  
    return (
      <header className="header">
        <div className="logo">Your Logo</div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {isMenuOpen && (
          <div className="menu">
            {/* Menu items go here */}
            <ul>
              <li>Travel</li>
              <li>Contact Us</li>
              <li>EXTRA</li>
            </ul>
          </div>
        )}
      </header>
    );
  }


export default Header;


