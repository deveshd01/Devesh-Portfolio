import React from 'react';
import { contactInfo, socialLinks, footerMessage } from '../data';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="section-header">
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