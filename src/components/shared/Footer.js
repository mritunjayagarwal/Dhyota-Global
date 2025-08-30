import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-lg-5">
                             <img src="/assets/img/shared/logo.png" className="img-fluid" alt="Dhyota Logo" />
              <div className="footer-desc">
                <p>Empowering men's health with innovation and empathy</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4">
                  <h5 className="footer-list-head">Links</h5>

                  <ul className="footer-list">
                    <li><a href="/">Home</a></li>
                    <li><a href='/download'>Downloads</a></li>
                    <li><a href='/referral'>Referrals</a></li>
                    <li><a href='/fees'>Fees</a></li>
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
