import React from 'react';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToNext = () => {
    const el = document.getElementById('intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-minimal-theme">
      {/* Clean Ambient Lighting & Subtle Grid Background */}
      <div className="hero-minimal-bg">
        <div className="hero-subtle-glow"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-minimal-container">
        <div className="hero-center-content">
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <p className="hero-tag-text">
            {personalInfo.title}
          </p>

          <h1 className="hero-name-title">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="hero-sub-text">
            Senior Software Engineer at FPT University
          </p>
        </div>

        {/* Down Arrow Button at Bottom Center */}
        <div className="hero-bottom-arrow">
          <button
            onClick={scrollToNext}
            className="hero-arrow-btn"
            aria-label="Scroll to introduction"
            title="Scroll Down"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
