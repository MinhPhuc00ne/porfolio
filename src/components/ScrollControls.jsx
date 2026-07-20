import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'intro', name: 'Intro' },
  { id: 'projects', name: 'Work' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' }
];

const ScrollControls = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    if (currentIndex >= 0 && currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <aside className="floating-scroll-controls" aria-label="Section Navigation">
      <button
        className="scroll-arrow-btn scroll-prev"
        onClick={scrollPrev}
        title="Scroll Up"
        aria-label="Scroll Up"
      >
        <ChevronUp size={18} />
      </button>

      <div className="scroll-dots-wrapper">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={`scroll-dot ${activeSection === sec.id ? 'active' : ''}`}
            onClick={() => scrollToSection(sec.id)}
            title={sec.name}
            aria-label={`Jump to ${sec.name}`}
          >
            <span className="dot-tooltip">{sec.name}</span>
          </button>
        ))}
      </div>

      <button
        className="scroll-arrow-btn scroll-next"
        onClick={scrollNext}
        title="Scroll Down"
        aria-label="Scroll Down"
      >
        <ChevronDown size={18} />
      </button>
    </aside>
  );
};

export default ScrollControls;
