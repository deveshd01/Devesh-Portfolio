import React from 'react';
import { skillCategories, techCircles } from '../data';

const Skills = () => {
  const skillLevels = {
    'Expert': { color: '#00ffff' },
    'Advanced': { color: '#ff00ff' },
    'Intermediate': { color: '#ffff00' },
    'Beginner': { color: '#00ff00' }
  };

  const getSkillLevel = (skill) => {
    const expertSkills = ['Python 3', 'ReactJS', 'AWS', 'Machine Learning', 'Docker'];
    const advancedSkills = ['JAVA', 'Spring boot', 'TensorFlow', 'Kubernetes', 'Terraform'];
    const intermediateSkills = ['C/C++', 'NodeJS', 'PostgreSQL', 'Git', 'Google Cloud', 'Azure'];
    
    if (expertSkills.includes(skill)) return 'Expert';
    if (advancedSkills.includes(skill)) return 'Advanced';
    if (intermediateSkills.includes(skill)) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-overview">
          <div className="skills-intro">
            <h3 className="skills-subtitle">My Expertise</h3>
            <p className="skills-description">
              I specialize in cloud technology, machine learning, and full-stack development. 
              My skills span across multiple domains with expertise in modern technologies.
            </p>
          </div>

          <div className="skill-levels">
            {Object.entries(skillLevels).map(([level, config]) => (
              <div key={level} className="skill-level">
                <div className="level-indicator" style={{ backgroundColor: config.color }}></div>
                <span className="level-text">{level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                <h3 className="category-title">{category.category}</h3>
                <div className="category-icon">
                  {index === 0 && '💻'}
                  {index === 1 && '🐍'}
                  {index === 2 && '🌐'}
                  {index === 3 && '☁️'}
                  {index === 4 && '🧠'}
                </div>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const level = getSkillLevel(skill);
                  const levelConfig = skillLevels[level];
                  
                  return (
                    <div key={skillIndex} className="skill-card">
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                        <span className="skill-level-badge" style={{ backgroundColor: levelConfig.color }}>
                          {level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-highlights">
          <h3 className="highlights-title">Core Technologies</h3>
          <div className="tech-highlights-grid">
            {techCircles.map((tech, index) => (
              <div key={index} className={`tech-highlight-card ${tech.type}`}>
                <div className="tech-icon">
                  {tech.name === 'Python' && '🐍'}
                  {tech.name === 'React' && '⚛️'}
                  {tech.name === 'Java' && '☕'}
                  {tech.name === 'AWS' && '☁️'}
                  {tech.name === 'ML' && '🤖'}
                  {tech.name === 'SQL' && '🗄️'}
                </div>
                <span className="tech-name">{tech.name}</span>
                <div className="tech-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <h4 className="summary-title">Specialization</h4>
            <p className="summary-text">Cloud Architecture & Machine Learning</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <h4 className="summary-title">Experience</h4>
            <p className="summary-text">4+ Years in Tech Industry</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4 className="summary-title">Projects</h4>
            <p className="summary-text">15+ Successful Deliveries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 