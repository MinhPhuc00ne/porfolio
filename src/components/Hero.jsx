import React from 'react';
import { Mail, ArrowRight, Terminal, Code2, Sparkles, Atom, Leaf, Gamepad2, Infinity as InfinityIcon, Container, Database, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

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
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                <div className="avatar-placeholder">
                  <div className="hologram-ring hologram-ring-1"></div>
                  <div className="hologram-ring hologram-ring-2"></div>
                  <div className="hologram-icons">
                    <Gamepad2 className="icon-gamepad" size={32} />
                    <Terminal className="icon-terminal" size={28} />
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Badges around the outside */}
            <div className="outer-orbit-container">
              <div className="outer-orbit-ring"></div>
              <div className="outer-orbit-wrap">
                {/* Badge 1 - Tech Focus */}
                <div className="outer-orbit-pos-1">
                  <div className="orbit-badge-scaler">
                    <div className="floating-badge orbit-badge">
                      <div className="badge-icon" style={{ background: 'rgba(6, 182, 212, 0.2)', color: 'var(--accent-cyan)' }}>
                        <Code2 size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[System Core]</div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>React & Spring Boot</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Code Style */}
                <div className="outer-orbit-pos-2">
                  <div className="orbit-badge-scaler">
                    <div className="floating-badge orbit-badge">
                      <div className="badge-icon" style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-violet)' }}>
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[Quality Control]</div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Clean & Scalable Code</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge 3 - Game Engine */}
                <div className="outer-orbit-pos-3">
                  <div className="orbit-badge-scaler">
                    <div className="floating-badge orbit-badge">
                      <div className="badge-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)' }}>
                        <Gamepad2 size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[Game Core]</div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Unity & Game Dev</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge 4 - DevOps */}
                <div className="outer-orbit-pos-4">
                  <div className="orbit-badge-scaler">
                    <div className="floating-badge orbit-badge">
                      <div className="badge-icon" style={{ background: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent-rose)' }}>
                        <InfinityIcon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[Deployment Node]</div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Docker & DevOps</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
