import React, { useEffect, useRef } from 'react';
import { personalInfo, heroStats, techStack, socialLinks } from '../data';

const Hero = () => {
  const textRef = useRef(null);

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

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <h1 className="hero-title">
              <span className="title-line">{personalInfo.name.split(' ')[0]}</span>
              <span className="title-line">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            <div className="hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
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
          
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <div className="tech-stack">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
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