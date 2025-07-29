import React from 'react';

const Deployments = () => {
  const deployments = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with React frontend and Node.js backend',
      url: 'https://example-ecommerce.com',
      status: 'Live',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern technologies',
      url: 'https://devesh-portfolio.com',
      status: 'Live',
      technologies: ['React', 'CSS3', 'JavaScript', 'Netlify'],
      features: ['Responsive Design', 'Dark Theme', 'Smooth Animations', 'Contact Form']
    },
    {
      title: 'Machine Learning API',
      description: 'RESTful API for machine learning model predictions',
      url: 'https://ml-api.example.com',
      status: 'Live',
      technologies: ['Python', 'Flask', 'TensorFlow', 'Docker'],
      features: ['Model Serving', 'API Documentation', 'Rate Limiting', 'Monitoring']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application for teams',
      url: 'https://taskmanager.example.com',
      status: 'Live',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Redis'],
      features: ['Real-time Collaboration', 'File Upload', 'Notifications', 'Analytics']
    }
  ];

  return (
    <section className="deployments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Live Deployments</h2>
          <div className="section-line"></div>
        </div>

        <div className="deployments-overview">
          <div className="deployments-intro">
            <h3 className="deployments-subtitle">Production Applications</h3>
            <p className="deployments-description">
              Explore my live applications and deployed projects that demonstrate real-world implementation 
              of modern technologies and best practices in software development.
            </p>
          </div>
        </div>

        <div className="deployments-grid">
          {deployments.map((deployment, index) => (
            <div key={index} className="deployment-card">
              <div className="deployment-header">
                <div className="deployment-title-section">
                  <h3 className="deployment-title">{deployment.title}</h3>
                  <div className="deployment-status">
                    <span className={`status-badge ${deployment.status.toLowerCase()}`}>
                      {deployment.status}
                    </span>
                  </div>
                </div>
                <div className="deployment-url">
                  <a 
                    href={deployment.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="url-link"
                  >
                    <span>Visit Site</span>
                    <span className="url-arrow">→</span>
                  </a>
                </div>
              </div>
              
              <p className="deployment-description">{deployment.description}</p>
              
              <div className="deployment-hover-details">
                <div className="deployment-technologies">
                  <h4 className="tech-label">Technologies Used:</h4>
                  <div className="tech-tags">
                    {deployment.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="deployment-features">
                  <h4 className="features-label">Key Features:</h4>
                  <ul className="features-list">
                    {deployment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet">•</span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="deployment-hover-indicator">
                <span className="hover-text">Hover for details</span>
              </div>
            </div>
          ))}
        </div>

        <div className="deployments-stats">
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <h4 className="stat-title">Live Applications</h4>
            <p className="stat-number">4</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h4 className="stat-title">Uptime</h4>
            <p className="stat-number">99.9%</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌐</div>
            <h4 className="stat-title">Global CDN</h4>
            <p className="stat-number">Active</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deployments; 