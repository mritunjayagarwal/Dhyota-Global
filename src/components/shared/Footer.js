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
                    <p className="tagline">Empowering Men's Health Globally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4">
                  <h5 className="footer-list-head">Quick Links</h5>

                  <ul className="footer-list">
                    <li><a href="/">Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Pharma</a></li>
                    <li><a href='#'>Devices</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5 className="footer-list-head">Company</h5>

                  <ul className="footer-list">
                    <li><a href='/terms'>Terms Of Services</a></li>
                    <li><a href='/privacy'>Privacy & Policies</a></li>
                    <li><a href='/kyc'>KML & KYC Policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5 className="footer-list-head">Learn & Support</h5>

                  <ul className="footer-list">
                    <li><a href="#">Telegram Channel</a></li>
                    <li><a href="#">Medium - Blogs</a></li>
                    <li><a href="#">FAQ's & Support</a></li>
                    <li><a href="#">Tutorials ( Coming Soon )</a></li>
                  </ul>
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
