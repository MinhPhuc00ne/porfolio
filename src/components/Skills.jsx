import React from 'react';
import { Laptop } from 'lucide-react';
import skillsGif from '../assets/Skills_Animation_Dark.gif';

const Skills = () => {
  return (
    <section id="skills" className="technical-skills-section">
      <div className="container">
        {/* Title Block */}
        <div className="tech-matrix-header">
          <Laptop size={28} className="matrix-title-icon" />
          <h2 className="matrix-main-title">Tech Stack & Ecosystem</h2>
        </div>

        {/* Tech Stack GIF Animation Display */}
        <div className="tech-table-card glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={skillsGif} 
            alt="Tech Stack & Ecosystem Animation" 
            className="tech-stack-gif-img"
            style={{ width: '100%', maxHeight: '550px', objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
