import React from 'react';
import { Mail, ArrowRight, Terminal, Code2, Sparkles } from 'lucide-react';
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
              Xin chào, Tôi là <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-description">
              Một <strong style={{ color: 'var(--accent-cyan)' }}>{personalInfo.title}</strong> tràn đầy nhiệt huyết.
              Chuyên thiết kế và phát triển các hệ thống phần mềm web hiện đại, tối ưu hoá hiệu năng từ ý tưởng đến sản phẩm hoàn chỉnh.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Khám phá Dự án <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={18} /> Liên hệ với tôi
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
                  <Terminal size={48} />
                  <span>&lt;MP /&gt;</span>
                </div>
              </div>
            </div>

            <div className="floating-badge badge-1">
              <div className="badge-icon" style={{ background: 'rgba(6, 182, 212, 0.2)', color: 'var(--accent-cyan)' }}>
                <Code2 size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tech Focus</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>React & Spring Boot</div>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <div className="badge-icon" style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-violet)' }}>
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Code Style</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Clean & Scalable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
