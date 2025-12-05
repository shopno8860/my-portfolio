import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: 'fab fa-react' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
        { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
        { name: 'TypeScript', level: 75, icon: 'fab fa-js-square' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
        { name: 'Express.js', level: 75, icon: 'fas fa-server' },
        { name: 'MongoDB', level: 70, icon: 'fas fa-database' },
        { name: 'PostgreSQL', level: 65, icon: 'fas fa-database' },
        { name: 'REST API', level: 85, icon: 'fas fa-code' },
        { name: 'GraphQL', level: 60, icon: 'fas fa-project-diagram' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
        { name: 'GitHub', level: 90, icon: 'fab fa-github' },
        { name: 'Docker', level: 65, icon: 'fab fa-docker' },
        { name: 'AWS', level: 60, icon: 'fab fa-aws' },
        { name: 'Figma', level: 70, icon: 'fab fa-figma' },
        { name: 'VS Code', level: 95, icon: 'fas fa-code' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Here are some of the technologies and tools I work with
        </p>
        <div className="row">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-4 col-md-6 mb-4">
              <div className="skill-category-card">
                <h3 className="category-title">
                  <i className="fas fa-code"></i> {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-info">
                          <i className={skill.icon}></i>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

