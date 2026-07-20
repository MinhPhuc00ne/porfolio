import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ theme, toggleTheme, onGoHome, isDetailPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (isDetailPage) return;

      const sections = ['hero', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const handleNavClick = (e, targetId) => {
    if (isDetailPage) {
      e.preventDefault();
      onGoHome();
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          className="logo"
          onClick={(e) => {
            if (isDetailPage) {
              e.preventDefault();
              onGoHome();
            }
          }}
        >
          <span className="brand-logo-text">JOS <span className="gradient-text">NGUYEN</span></span>
        </a>

        {/* Right: Nav Links + Theme Toggle */}
        <div className="nav-right-group" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id && !isDetailPage ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            {isDetailPage && (
              <button className="btn btn-outline" onClick={onGoHome} style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
                <ArrowLeft size={14} /> Back
              </button>
            )}

            <button
              className="icon-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="icon-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
