import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/images/Shopno_Resume.pdf';
    link.download = 'Shopno_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={`home-content ${isVisible ? 'fade-in' : ''}`}>
              <p className="greeting">Hello, I'm</p>
              <h1 className="name-title">
                <span className="name-highlight">Rakesh Al Yadin</span>
              </h1>
              <h2 className="role-title">Full Stack Developer</h2>
              <p className="description">
                I'm a passionate developer specializing in creating exceptional digital
                experiences. I build modern, responsive web applications using the latest
                technologies.
              </p>
              <div className="home-buttons">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Get In Touch
                </a>
                <button className="btn btn-outline-primary btn-lg" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </div>
              <div className="social-links">
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
          <div className="col-lg-6">
            <div className={`home-image ${isVisible ? 'fade-in-delay' : ''}`}>
              <div className="image-wrapper">
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <div className="profile-image">
                  <img 
                    src="/images/1000039928.jpg" 
                    alt="Rakesh AL Yadin" 
                    className="profile-picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}>
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;

