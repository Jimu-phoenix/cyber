import React from 'react';
import cxpath from '../assets/logos/cyberxpoxwtrmrk.png'
import '../styles/Footer.css'

export default function SciFiFooter() {
  return (
<div className="page-wrapper">
    <footer className="scifi-footer">

      <div className="grid-background"></div>
      
      <div className="glow-line"></div>

      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-section brand-section">
            <div className="brand-header">
             <img src={cxpath} alt="logo" className='cxlogo'/>
              <h3 className="brand-title">CyberExpoX</h3>
            </div>
            <p className="brand-description">
              Building the future of eSports in Malawi with cutting-edge technology and innovation.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

         
          <div className="footer-section">
            <h4 className="section-title">Events</h4>
            <ul className="footer-links">
              <li><a href="#">Expos</a></li>
              <li><a href="#">Weebcon</a></li>
              <li><a href="#">Tournaments</a></li>
              {/* <li><a href="#">Integration</a></li> */}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Useful Links</h4>
            <ul className="footer-links">
              <li><a href="#">Ticketing</a></li>
              <li><a href="#">Athletes</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h4 className="section-title">Stay Updated</h4>
            <p className="newsletter-text">Get the latest updates and news.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter email" className="newsletter-input" />
              <button className="newsletter-button" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 Cyber ExpoX. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="corner-accent"></div>
    </footer>
  </div>
  );
}