import React from 'react';
import { Mail, ArrowRight, Gamepad2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import meImg from '../assets/ME.png';

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
              specializing in architecting full-stack web applications and interactive 3D game engines. Dedicated to building clean, scalable backend services, responsive modern interfaces, and high-performance real-time game systems with exceptional user experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>

              <a href={`mailto:${personalInfo.email}`} className="btn btn-outline">
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
                src={meImg}
                alt="Jos Nguyen"
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
