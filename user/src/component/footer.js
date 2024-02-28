import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Import your CSS file for footer styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Isafjordsgatan 23, Kista, Sweden</p>
          <p>Phone: +46 70 123 45 67</p>
          <p>Email: waco@taxi.com</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
          <li><a href="/About">About</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect with Us</h2>
          <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} wacoTaxi. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;