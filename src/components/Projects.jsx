import React, { useState } from 'react';
import { Layers, ExternalLink, Gamepad2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Game Dev', value: 'gamedev' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-tag">
          <Layers size={14} /> Featured Work
        </div>
        <h2 className="section-title">
          Selected Work <span className="gradient-text">I've Built</span>
        </h2>
        <p className="section-subtitle">
          A showcase of key software engineering work ranging from interactive Game Dev systems to Full-Stack web applications.
        </p>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filters.map(f => (
            <button
              key={f.value}
              className={`tab-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                <div className="project-overlay">
                  {project.itchLink ? (
                    <a
                      href={project.itchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      title="View on Itch.io"
                    >
                      <Gamepad2 size={16} /> Itch.io
                    </a>
                  ) : (
                    project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        title="View Source Code"
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    )
                  )}

                  <button
                    className="btn btn-primary"
                    onClick={() => onSelectProject && onSelectProject(project)}
                    title="View Project Details"
                  >
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="project-title">{project.title}</h3>
                  {project.category === 'gamedev' && (
                    <span className="badge-game" style={{
                      fontSize: '0.7rem',
                      background: 'rgba(234, 118, 0, 0.2)',
                      color: '#ea7600',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      border: '1px solid rgba(234, 118, 0, 0.4)',
                      fontWeight: '600'
                    }}>
                      GAME DEV
                    </span>
                  )}
                </div>
                {project.subtitle && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                    {project.subtitle}
                  </p>
                )}
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  className="view-project-text-link"
                  onClick={() => onSelectProject && onSelectProject(project)}
                >
                  View Project Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
