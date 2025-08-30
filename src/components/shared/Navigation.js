import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src = "/android-chrome-192x192.png" style={{ width: "40px", height: "40px" }} alt="Dhyota Logo" /> Dhyota <span style={{ color: "#FF6F00", "marginLeft": "-2px"}}>Global</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-5 mid-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Who We Are</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Brands</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Associated Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Campaign</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
          </ul>
          <ul className="me-auto navbar-nav">
            <li className="nav-item">
              <button className="main-btn orange" type="button">Discover</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
