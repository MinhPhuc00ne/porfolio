import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container footer-container">
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. Designed & Built with{' '}
          <Heart size={14} color="var(--accent-rose)" style={{ display: 'inline', verticalAlign: 'middle' }} /> using React & Vite.
        </div>

        <button
          className="icon-btn back-to-top"
          onClick={scrollToTop}
          title="Về đầu trang"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
