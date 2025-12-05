import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="brand-text">Portfolio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

