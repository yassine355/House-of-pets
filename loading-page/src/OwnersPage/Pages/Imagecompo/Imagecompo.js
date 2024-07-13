import React from 'react';
import './Imagecompo.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from './logo hop.png';
import iStore from './ios.png';
import aStore from './android.png';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
       
      <div className="footer-container">
      <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a team of dedicated professionals committed to providing the
            best service to our customers.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>123 Main Street, Anytown USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <h3 className='telecharger'>Téléchargez l'application</h3>
          <div className="store">
              <img src={iStore} alt="iStore" className="iStore" />
              <img src={aStore} alt="aStore" className="aStore" />
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;