import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="global-site-footer">
      <div className="container footer-content-wrap">
        {/* Greeting Banner */}
        <div className="footer-greeting">
          Thanks for stopping by, let's chat! 👋
        </div>

        {/* 3-Column Footer Grid matching reference screenshot */}
        <div className="footer-cols-grid">
          {/* Column 1: Contact Me */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT ME 💌</h4>
            <a href={`mailto:${personalInfo.email}`} className="footer-email-link">
              {personalInfo.email}
            </a>
          </div>

          {/* Column 2: Let's Connect */}
          <div className="footer-col">
            <h4 className="footer-col-title">LET'S CONNECT 🤝</h4>
            <div className="footer-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="footer-social-btn"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="footer-social-btn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="footer-social-btn"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 3: Copyright & Credits */}
          <div className="footer-col footer-col-right">
            <div className="footer-copyright">
              © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
            </div>
            <div className="footer-made-with">
              Made with 💛 & 💻
            </div>
          </div>
        </div>

        {/* Floating / Aligned Back to Top Button */}
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
