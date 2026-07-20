import React from 'react';
import { User, MapPin, Mail, Award, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { personalInfo, stats, timeline } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about-deep-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">
          <User size={14} /> About Me & Story
        </div>
        
        <h2 className="section-title">
          Engineering Scalable Software & <br />
          <span className="gradient-text">Crafting Immersive Digital Experiences</span>
        </h2>

        <p className="section-subtitle">
          Discover my complete background, technical mindset, academic journey, and career roadmap.
        </p>

        {/* Detailed Story & Career Aspiration Grid */}
        <div className="glass-card deep-about-card" style={{ marginTop: '30px' }}>
          <div className="deep-about-grid">
            <div className="deep-about-bio">
              <h3 className="sub-heading-title">
                <Code2 size={20} color="var(--accent-cyan)" /> Technical Philosophy & Background
              </h3>
              
              <p className="bio-paragraph">
                {personalInfo.bio}
              </p>

              <p className="bio-paragraph" style={{ marginTop: '12px' }}>
                As a senior Computer Science student at International University (VNUHCM), my technical focus spans both enterprise full-stack development and real-time interactive systems. I thrive at the junction where robust backend architecture meets pixel-perfect frontend experiences.
              </p>

              <div className="info-meta-list">
                <div className="info-meta-item">
                  <MapPin size={18} color="var(--accent-cyan)" />
                  <span><strong>Location:</strong> {personalInfo.location}</span>
                </div>
                <div className="info-meta-item">
                  <Mail size={18} color="var(--accent-cyan)" />
                  <span><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`} className="text-link">{personalInfo.email}</a></span>
                </div>
                <div className="info-meta-item">
                  <GraduationCap size={18} color="var(--accent-cyan)" />
                  <span><strong>University:</strong> International University – VNUHCM</span>
                </div>
              </div>

              <div className="check-highlights-grid">
                <div className="check-item">
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Full-Stack RESTful & Microservice Architecture
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Clean & Maintainable Software Engineering
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Unity 3D Gameplay & Physics Engine Systems
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Rapid Technology Adoption & Problem Solving
                </div>
              </div>
            </div>

            {/* Right Side: Aspirations & Focus */}
            <div className="deep-aspirations-box">
              <div className="aspiration-header">
                <Award size={20} color="var(--accent-cyan)" /> Career Vision & Focus
              </div>
              <p className="aspiration-desc">
                Aiming to evolve into a <strong>Senior Software Architect & Full-Stack Engineer</strong>. I systematically study distributed system design, high-concurrency microservices, and modern web graphics to deliver resilient, high-impact digital solutions.
              </p>

              <div className="aspiration-badges">
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">Unity & C#</span>
                <span className="tech-pill">Docker & PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline: Experience & Education */}
        <div style={{ marginTop: '50px' }}>
          <div className="section-tag">
            <Briefcase size={14} /> Journey & Timeline
          </div>
          <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '10px' }}>
            Academic & <span className="gradient-text">Professional Roadmap</span>
          </h3>

          <div className="timeline" style={{ marginTop: '30px' }}>
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

        {/* Key Stats counters grid */}
        <div className="stats-grid" style={{ marginTop: '40px' }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
