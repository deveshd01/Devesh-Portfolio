import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, heroStats, techStack, socialLinks } from '../data';

const Hero = () => {
  const textRef = useRef(null);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <div className="hero-intro">
              <span className="intro-greeting">Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">{personalInfo.name.split(' ')[0]} </span>
            </h1>
            
            <div className="hero-role">
              <span className="role-prefix">I'm a</span>
              <div className="role-animation">
                <span className="role-text">{personalInfo.title}</span>
                <div className="role-cursor"></div>
              </div>
            </div>
            
            <p className="hero-description">
              {personalInfo.description}
            </p>
            
            <div className="hero-highlights">
              <div className="tech-highlight">
                <span className="highlight-label">Specializing in:</span>
                <span className="highlight-tech">{techStack[currentTechIndex]}</span>
              </div>
            </div>
            
            <div className="hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="floating-card">
                <div className="card-header">
                  <h3 className="card-title">Tech Stack</h3>
                </div>
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className={`tech-item ${index === currentTechIndex ? 'active' : ''}`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="card-glow"></div>
              </div>
              
              <div className="floating-elements">
                <div className="element element-1">🚀</div>
                <div className="element element-2">⚡</div>
                <div className="element element-3">💡</div>
              </div>
              
              <div className="hero-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 