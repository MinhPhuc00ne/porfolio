import React from 'react';
import { Mail, ArrowRight, Gamepad2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import skillsGif from '../assets/Skills_Animation_Dark.gif';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>{personalInfo.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-description">
              A passionate <strong style={{ color: 'var(--accent-cyan)' }}>{personalInfo.title}</strong> based in Vietnam,
              combining core software engineering with interactive game development. Dedicated to building modern web applications and high-performance game logic.
            </p>

            {/* Character RPG HUD */}
            <div className="character-hud">
              <div className="hud-header">
                <span className="hud-class">CLASS: DEV & GAME ENGINE ARCHITECT</span>
                <span className="hud-level">LVL 24</span>
              </div>
              <div className="hud-stats-list">
                <div className="hud-stat-item">
                  <div className="hud-stat-info">
                    <span className="hud-stat-name">HP (Coding & Full-Stack)</span>
                    <span className="hud-stat-val">95%</span>
                  </div>
                  <div className="hud-bar-bg">
                    <div className="hud-bar-fill hud-bar-hp" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="hud-stat-item">
                  <div className="hud-stat-info">
                    <span className="hud-stat-name">MP (Game Dev & Unity)</span>
                    <span className="hud-stat-val">90%</span>
                  </div>
                  <div className="hud-bar-bg">
                    <div className="hud-bar-fill hud-bar-mp" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="hud-stat-item">
                  <div className="hud-stat-info">
                    <span className="hud-stat-name">EXP (Active Learning)</span>
                    <span className="hud-stat-val">88%</span>
                  </div>
                  <div className="hud-bar-bg">
                    <div className="hud-bar-fill hud-bar-exp" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={18} /> Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Facebook Profile"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-gif-wrapper">
              <img
                src={skillsGif}
                alt="Tech Stack Animation GIF"
                className="hero-tech-gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
