import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                <div className="project-period">{project.period}</div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-hover-details">
                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-bullet">•</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="hover-indicator">
                <span className="hover-text">Hover for details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 