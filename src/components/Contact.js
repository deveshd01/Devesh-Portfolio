import React from 'react';
import { contactInfo, socialLinks, footerMessage, personalInfo, academicData, areasOfInterest } from '../data';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        {/* About Me Section */}
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

        {/* Contact Section */}
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail">
                  <span className="contact-label">{info.label}:</span>
                  {info.link ? (
                    <a href={info.link} className="contact-link">{info.value}</a>
                  ) : (
                    <span className="contact-text">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="social-section">
            <h3 className="social-subtitle">Connect With Me</h3>
            <div className="social-links">
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

        <div className="contact-footer">
          <div className="footer-message">
            <p className="footer-text">
              {footerMessage.quote}
            </p>
            <p className="footer-subtext">
              {footerMessage.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 