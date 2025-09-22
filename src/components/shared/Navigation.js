import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when clicking on nav links
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <img 
            src="/dhyota-logo.jpeg" 
            style={{ width: "200px", height: "auto" }} 
            alt="Dhyota Global Healthcare Solutions Logo" 
          /> 
        </Link>

        {/* Toggle Button */}
        <button
          className={`navbar-toggler hamburger ${isMenuOpen ? 'is-active' : ''}`}
          type="button"
          onClick={toggleMenu}
          style={{border: "none"}}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto ms-5 mid-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" style={{ color: '#999', cursor: 'not-allowed' }}>
                Who We Are
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" style={{ color: '#999', cursor: 'not-allowed' }}>
                Partners
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" style={{ color: '#999', cursor: 'not-allowed' }}>
                Campaign
              </span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={handleNavLinkClick}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
          
          {/* Right Side Button */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="main-btn orange" type="button">
                Discover
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;