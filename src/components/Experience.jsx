import React from 'react';
import { Briefcase } from 'lucide-react';
import { timeline } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-tag">
          <Briefcase size={14} /> Career Journey
        </div>
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          My academic roadmap, professional development, and practical software engineering accomplishments.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="glass-card">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-details">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
