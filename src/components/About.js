import React from 'react';
import { personalInfo, academicData, areasOfInterest } from '../data';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {personalInfo.about}
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-text">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="academic-card">
              <h3 className="card-title">Academic Qualifications</h3>
              <div className="academic-list">
                {academicData.map((item, index) => (
                  <div key={index} className="academic-item">
                    <div className="academic-year">{item.year}</div>
                    <div className="academic-details">
                      <div className="academic-degree">{item.degree}</div>
                      <div className="academic-institute">{item.institute}</div>
                      <div className="academic-score">{item.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-card">
              <h3 className="card-title">Areas of Interest</h3>
              <div className="interests-grid">
                {areasOfInterest.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">•</span>
                    <span className="interest-text">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 