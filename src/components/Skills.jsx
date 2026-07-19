import React from 'react';
import { Cpu, Code, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-tag">
          <Cpu size={14} /> Skills & Expertise
        </div>
        <h2 className="section-title">
          Tech Stack & <span className="gradient-text">Core Competencies</span>
        </h2>
        <p className="section-subtitle">
          The technologies, frameworks, and tools I utilize daily to build high-performance applications.
        </p>

        <div className="skills-categories">
          {skillCategories.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Sparkles;
            return (
              <div key={cat.id} className="glass-card">
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="category-title">{cat.title}</h3>
                </div>

                <div className="skill-tags">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="skill-tag">
                      <Sparkles size={12} color="var(--accent-cyan)" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
