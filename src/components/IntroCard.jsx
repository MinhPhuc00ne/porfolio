import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import meImg from '../assets/ME.png';

const IntroCard = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHero = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="intro-section">
      <div className="container">
        <div className="intro-card-wrapper">
          <div className="intro-card-grid">
            {/* Left: Avatar Frame using Jos's photo (ME.png) */}
            <div className="intro-avatar-container">
              <div className="avatar-sketch-frame">
                <img
                  src={meImg}
                  alt="Jos Nguyen"
                  className="avatar-sketch-img"
                />
              </div>
            </div>

            {/* Right: Intro Details for Jos Nguyen */}
            <div className="intro-content">
              <h2 className="handwriting-heading">
                Hello, I'm Jos Nguyen !
              </h2>

              <p className="intro-text">
                A final-year Computer Science student with a strong passion for the intersection of design and technology. I enjoy building websites that are not only visually appealing but also intuitive and user-friendly. I'm on a journey to become a well-rounded developer — someone who writes clean, efficient code while also caring deeply about user experience and design. My goal is to create meaningful digital products that are both functional and aesthetically thoughtful.
              </p>

              <div className="intro-actions">
                <a
                  href="#about"
                  onClick={scrollToAbout}
                  className="story-link-btn"
                >
                  👉 Let discover my story
                </a>
              </div>
            </div>
          </div>

          {/* Up & Down Scroll Arrows */}
          <div className="intro-card-arrows">
            <button
              onClick={scrollToHero}
              className="arrow-nav-btn arrow-up"
              title="Scroll Up to Top"
              aria-label="Scroll Up"
            >
              <ChevronUp size={24} />
            </button>
            
            <button
              onClick={scrollToWork}
              className="arrow-nav-btn arrow-down"
              title="Scroll Down to Work"
              aria-label="Scroll Down"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
