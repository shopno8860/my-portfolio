import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-widget">
                <h3 className="footer-title">Rakesh AL Yadin</h3>
                <p className="footer-description">
                  Full Stack Developer passionate about creating exceptional digital experiences
                  and building modern, responsive web applications.
                </p>
                <div className="footer-social-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="mailto:shopno8860@gmail.com" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                      <i className="fas fa-chevron-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                      <i className="fas fa-chevron-right"></i> About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
                      <i className="fas fa-chevron-right"></i> Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                      <i className="fas fa-chevron-right"></i> Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4 className="footer-heading">Contact Info</h4>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:shopno8860@gmail.com">shopno8860@gmail.com</a>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <a href="tel:+8801610560204">01610560204</a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Sector-10, Uttara, Dhaka</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4 className="footer-heading">Newsletter</h4>
                <p className="footer-newsletter-text">
                  Subscribe to get updates on my latest projects and articles.
                </p>
                <form className="footer-newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer-newsletter-input"
                  />
                  <button type="submit" className="footer-newsletter-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-copyright">
                &copy; {currentYear} <span className="copyright-name">Rakesh AL Yadin</span>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="footer-made-with">
                Made with <i className="fas fa-heart"></i> using React
              </p>
            </div>
          </div>
        </div>
      </div>
      <button 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;

