import React, { useState } from 'react';
import { Layers, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
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
          <Layers size={14} /> Featured Projects
        </div>
        <h2 className="section-title">
          Selected Products <span className="gradient-text">I've Built</span>
        </h2>
        <p className="section-subtitle">
          A showcase of key software engineering projects ranging from Full-Stack web apps to RESTful APIs.
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    title="View Source Code"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    title="Live Preview"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
