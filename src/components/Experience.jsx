import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { timeline } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-tag">
          <Briefcase size={14} /> Hành Trình
        </div>
        <h2 className="section-title">
          Kinh Nghiệm & <span className="gradient-text">Học Vấn</span>
        </h2>
        <p className="section-subtitle">
          Quá trình học tập, phát triển kỹ năng và tích luỹ kinh nghiệm thực tế.
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
