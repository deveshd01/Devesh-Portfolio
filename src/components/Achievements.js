import React from 'react';
import { achievements, highlightCards } from '../data';

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Activities</h2>
          <div className="section-line"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((category, index) => (
            <div key={index} className="achievement-card">
              <h3 className="achievement-title">{category.title}</h3>
              <div className="achievement-list">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="achievement-item">
                    <span className="achievement-icon">🏆</span>
                    <span className="achievement-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-highlight">
          {highlightCards.map((card, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{card.icon}</div>
              <div className="highlight-content">
                <h4 className="highlight-title">{card.title}</h4>
                <p className="highlight-description">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 