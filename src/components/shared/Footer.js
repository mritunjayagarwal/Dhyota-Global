import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-brand">
                <div className="d-flex align-items-start mb-2">
                  <img 
                    src="/android-chrome-192x192.png" 
                    className="img-fluid me-3" 
                    alt="Dhyota Logo" 
                  />
                  <div className="brand-content">
                    <span className="brand-text">
                      Dhyota <span style={{ color: "#FF6F00" }}>Global</span>
                    </span>
                    <p className="tagline" style={{marginTop: "-10px"}}>Healthcare Solutions Pvt Ltd</p>
                  </div>
                </div>
                <p className="footer-description" style={{marginTop: "10px", fontSize: "0.9rem", textAlign: "left", lineHeight: "1.4", maxWidth: "400px"}}>
                  The Guiding Light in Men's Health - Pioneering comprehensive wellness solutions through innovative pharmaceuticals, advanced medical devices, and cutting-edge technology to empower men's health worldwide.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-6 col-lg-4">
                  <h5 className="footer-list-head">Quick Links</h5>

                  <ul className="footer-list">
                    <li><a href="/">Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Pharma</a></li>
                    <li><a href='#'>Devices</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-4">
                  <h5 className="footer-list-head">Company</h5>

                  <ul className="footer-list">
                    <li><a href='/terms'>Terms Of Services</a></li>
                    <li><a href='/privacy'>Privacy & Policies</a></li>
                    <li><a href='/kyc'>KML & KYC Policy</a></li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <h5 className="footer-list-head">Contact Information</h5>

                  <ul className="footer-list">
                    <li>Email: askme@dhyota.com</li>
                    <li>Phone: +91 964-964-7108</li>
                    <li>Landline: +91 40-453-77055</li>
                  </ul>
                  <div className="social-icon mt-3">
                    <a href="https://x.com/drragoori" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-x-twitter" style={{ fontSize: "1.5rem", color: "#FF6F00" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>
            <p className="my-auto">© 2025 Dhyota Global. All rights reserved. Committed to men's health with dignity and care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
