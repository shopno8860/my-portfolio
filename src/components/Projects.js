import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['Html', 'Css', 'Bootstrap', 'javascript'],
      githubUrl: 'https://github.com/shopno8860/class-10-homework',
      image: '🛒'
    },
    {
      title: 'QuizZone',
      description: 'An online quiz system enabling users to answer MCQs, validate responses, and receive automatic scoring with summary review. Clean UI with structured question flow',
      technologies: ['Html', 'Css', 'Bootstrap', 'c#','dotnet'],
      githubUrl: 'https://github.com/shopno8860/Online-Quiz-Final/tree/master',
      image: '📋'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using a weather API.',
      technologies: ['React', 'JavaScript', 'OpenWeather API'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      image: '🌤️'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user insights, and engagement metrics.',
      technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      image: '📊'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with rich text editing, comment system, user profiles, and SEO optimization.',
      technologies: ['React', 'Next.js', 'Sanity CMS'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      image: '✍️'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and contact information with smooth animations.',
      technologies: ['React', 'Bootstrap', 'CSS3'],
      githubUrl: 'https://github.com/shopno8860/my-portfolio',
      image: '💼'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Click on any project to view the code on GitHub.
        </p>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-overlay">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

