import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Gamepad2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

// High quality logo PNG images saved in src/assets/tech/
import unityImg from '../assets/tech/unity.png';
import blenderImg from '../assets/tech/blender.png';
import mongodbImg from '../assets/tech/mongodb.png';
import csharpImg from '../assets/tech/csharp.png';
import socketioImg from '../assets/tech/socketio.png';
import mixamoImg from '../assets/tech/mixamo.png';
import reactImg from '../assets/tech/react.png';
import tailwindImg from '../assets/tech/tailwind.png';
import postgresImg from '../assets/tech/postgres.png';
import redisImg from '../assets/tech/redis.png';
import expressImg from '../assets/tech/express.png';

const techImageMap = {
  unity: unityImg,
  blender: blenderImg,
  mongodb: mongodbImg,
  csharp: csharpImg,
  socketio: socketioImg,
  mixamo: mixamoImg,
  react: reactImg,
  tailwind: tailwindImg,
  postgres: postgresImg,
  redis: redisImg,
  express: expressImg,
};

// Helper to render bold formatted text from Markdown-style **text**
const renderFormattedParagraph = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  const techList = project.techIcons || [
    { name: "Unity", key: "unity" },
    { name: "Blender", key: "blender" },
    { name: "MongoDB", key: "mongodb" },
    { name: "C#", key: "csharp" },
    { name: "Socket.io", key: "socketio" },
    { name: "Mixamo", key: "mixamo" }
  ];

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Navigation Top Bar */}
        <div className="project-detail-topbar">
          <button className="btn btn-outline back-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Work
          </button>
        </div>

        {/* 2-Column Header Section matching user reference screenshot */}
        <div className="project-header-section">
          <div className="project-header-left">
            <h1 className="detail-project-title">{project.title}</h1>
            {project.subtitle && (
              <p className="detail-project-subtitle">{project.subtitle}</p>
            )}
            
            <div className="detail-action-buttons">
              {project.itchLink && (
                <a
                  href={project.itchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary itch-btn"
                >
                  <Gamepad2 size={18} /> Play on Itch.io
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <GithubIcon size={18} /> Source Code
                </a>
              )}
              {project.demo && project.demo !== '#' && !project.itchLink && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="project-header-right">
            {project.paragraphs && project.paragraphs.map((p, idx) => (
              <p key={idx} className="detail-paragraph">
                {renderFormattedParagraph(p)}
              </p>
            ))}
          </div>
        </div>

        {/* Images Gallery Section */}
        <div className="project-gallery-section">
          <div className="gallery-grid">
            {(project.galleryImages || [project.image, project.image]).map((imgSrc, idx) => (
              <div key={idx} className="gallery-card glass-card">
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section with saved PNG logo images */}
        <div className="project-tech-stack-section">
          <div className="tech-stack-container">
            {/* Left Column: Tech details list */}
            <div className="tech-info-column">
              <h2 className="tech-section-title">TECH STACK</h2>
              
              <div className="tech-summary-list">
                {project.techStackSummary ? (
                  Object.entries(project.techStackSummary).map(([cat, desc], idx) => (
                    <div key={idx} className="tech-summary-item">
                      <strong className="tech-cat-name">{cat}:</strong> {desc}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="tech-summary-item">
                      <strong>Engine & 3D:</strong> Unity, Blender, Mixamo Animation
                    </div>
                    <div className="tech-summary-item">
                      <strong>Programming:</strong> C# (State Machine & Physics)
                    </div>
                    <div className="tech-summary-item">
                      <strong>Real-time & Networking:</strong> Socket.io, Node.js
                    </div>
                    <div className="tech-summary-item">
                      <strong>Database:</strong> MongoDB (Persistent Dynamic Schema)
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Circular Orbiting Stack Animation */}
            <div className="tech-orbit-column">
              <div className="skills-wrapper">
                <div className="skills" id="circle">
                  {techList.map((tech, idx) => {
                    const angle = (360 / techList.length) * idx;
                    const logoImg = techImageMap[tech.key] || unityImg;
                    return (
                      <div
                        key={idx}
                        className="square"
                        title={tech.name}
                        style={{
                          '--start-angle': `${angle}deg`,
                        }}
                      >
                        <img src={logoImg} alt={tech.name} className="square-card-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Context & Project Brief Section (Matching reference screenshot) */}
        {project.contextData && (
          <div className="project-context-section">
            {/* Row 1: Context */}
            <div className="context-row">
              <div className="context-left-col">
                <h3 className="context-side-title">Context</h3>
              </div>
              
              <div className="context-right-col">
                {/* Motivation */}
                {project.contextData.motivation && (
                  <div className="context-block">
                    <h4 className="context-subheading">Motivation</h4>
                    <p className="context-text">{project.contextData.motivation}</p>
                  </div>
                )}

                {/* My Role */}
                {project.contextData.myRole && (
                  <div className="context-block">
                    <h4 className="context-subheading">My Role</h4>
                    {project.contextData.myRole.intro && (
                      <p className="context-text role-intro">{project.contextData.myRole.intro}</p>
                    )}

                    {project.contextData.myRole.primaryFocus && (
                      <div className="role-group">
                        <h5 className="role-group-title">Primary Focus:</h5>
                        <ul className="context-bullet-list">
                          {project.contextData.myRole.primaryFocus.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.contextData.myRole.backendSystems && (
                      <div className="role-group">
                        <h5 className="role-group-title">Backend & Systems:</h5>
                        <ul className="context-bullet-list">
                          {project.contextData.myRole.backendSystems.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.contextData.myRole.collaboration && (
                      <div className="role-group">
                        <h5 className="role-group-title">Collaboration & Architecture:</h5>
                        <ul className="context-bullet-list">
                          {project.contextData.myRole.collaboration.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Project Brief */}
            <div className="context-row">
              <div className="context-left-col">
                <h3 className="context-side-title">Project Brief</h3>
              </div>
              
              <div className="context-right-col">
                {project.contextData.keyFeatures && (
                  <div className="context-block">
                    <h4 className="context-subheading">Key Features</h4>
                    <p className="context-text">
                      <strong>{project.title}</strong> is a project that enables users to:
                    </p>
                    <ul className="context-bullet-list">
                      {project.contextData.keyFeatures.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;
