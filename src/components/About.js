import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '20+', label: 'Technologies' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <div className="image-container">
                <div className="about-image-placeholder">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/1000039928.jpg`}
                    alt="Rakesh Al Yadin" 
                    className="about-profile-picture"
                  />
                </div>
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="about-subtitle">I'm a Creative Developer</h3>
              <p className="about-text">
                I'm a passionate full-stack developer with a love for creating beautiful,
                functional, and user-friendly web applications. With expertise in modern
                JavaScript frameworks and a keen eye for design, I bring ideas to life
                through code.
              </p>
              <p className="about-text">
                My journey in web development started with a curiosity about how websites
                work, and it has evolved into a career where I get to solve complex problems
                and create digital experiences that make a difference.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Clean & Modern Design</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Responsive Layout</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Fast & Optimized</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>SEO Friendly</span>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn-primary mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
        <div className="stats-section">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div className="stat-card">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

