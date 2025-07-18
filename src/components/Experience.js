import React, { useState } from 'react';
import { experiences } from '../data';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div 
                className="timeline-content"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                
                <div className={`experience-project ${hoveredIndex === index ? 'expanded' : 'collapsed'}`}>
                  <h4 className="project-title">Project: {exp.project}</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 