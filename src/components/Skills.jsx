import React from 'react';
import { Cpu, Laptop } from 'lucide-react';

// Tech SVG Icons Dictionary matching user's image
const techIcons = {
  unity: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#FFF" d="M64 24l36 21v42L64 108 28 87V45z"/>
      <path fill="#000" d="M64 36l24 14v28L64 92 40 78V50z"/>
    </svg>
  ),
  blender: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#EA7600" d="M64 38c-14.3 0-26 11.7-26 26s11.7 26 26 26 26-11.7 26-26-11.7-26-26-26zm0 38c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
      <path fill="#22578A" d="M64 58a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
      <path fill="#EA7600" d="M84 32L68 50M44 32l16 18M64 16v24"/>
    </svg>
  ),
  csharp: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#68217A"/>
      <text x="64" y="80" fill="#FFF" fontSize="52" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C#</text>
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
      <rect x="-15" y="-15" width="30" height="30" rx="6" fill="#22272e"/>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <circle cx="64" cy="64" r="40" fill="#000" stroke="#FFF" strokeWidth="3"/>
      <path d="M50 44v40M78 44l-28 40M78 44v40" stroke="#FFF" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#3178C6"/>
      <text x="40" y="90" fill="#FFF" fontSize="56" fontWeight="bold" fontFamily="sans-serif">T</text>
      <text x="76" y="90" fill="#FFF" fontSize="56" fontWeight="bold" fontFamily="sans-serif">S</text>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
      <path d="M67.31 104c3.4 5.97 8.01 10.35 15.65 10.35 6.6 0 10.82-3.32 10.82-7.93 0-5.51-4.36-7.51-11.66-10.66l-4.14-1.78c-11.91-5.06-19.82-11.41-19.82-24.8 0-12.3 9.44-21.6 24.11-21.6 10.45 0 17.97 3.79 23.09 12.65l-10.45 6.78c-2.99-5.17-6.19-7.35-12.52-7.35-6.09 0-9.88 3.79-9.88 7.93 0 5.4 3.79 7.47 11.26 10.7l4.14 1.78c13.78 5.86 20.73 12.18 20.73 25.4 0 14.59-11.37 23.32-27.46 23.32-15.63 0-25.04-7.58-29.75-18.04l10.36-6.75zM22.5 104c2.8 4.7 6.1 8.2 11.9 8.2 5.5 0 9.1-2.4 9.1-11.6V48.5h15.2v52.6c0 17.5-10.2 24.9-24.3 24.9-13.6 0-21.8-7.3-25.4-15.3l13.5-6.7z" fill="#000"/>
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#E34F26"/>
      <path fill="#FFF" d="M28 20h72l-6.5 74L64 108 34.5 94 30 42h44"/>
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#1572B6"/>
      <path fill="#FFF" d="M28 20h72l-6.5 74L64 108 34.5 94 30 42h44"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#06B6D4" d="M32 40c6.4-12.8 16-19.2 28.8-19.2 19.2 0 24 14.4 33.6 16.8C100.8 39.2 107.2 36 112 28c-6.4 12.8-16 19.2-28.8 19.2-19.2 0-24-14.4-33.6-16.8C43.2 38.4 36.8 41.6 32 40zm-16 38.4c6.4-12.8 16-19.2 28.8-19.2 19.2 0 24 14.4 33.6 16.8 6.4 1.6 12.8-1.6 17.6-9.6-6.4 12.8-16 19.2-28.8 19.2-19.2 0-24-14.4-33.6-16.8C27.2 76.8 20.8 80 16 78.4z"/>
    </svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#7952B3"/>
      <text x="64" y="90" fill="#FFF" fontSize="72" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">B</text>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#339933" d="M64 16L20 41.5v51L64 118l44-25.5v-51L64 16zm0 25.5l26.5 15.3v30.6L64 102.7 37.5 87.4V56.8L64 41.5z"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <text x="64" y="80" fill="#FFF" fontSize="48" fontWeight="300" textAnchor="middle" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#E76F00" d="M48.2 92.5s-4.6 3.8 3.3 5c9.6 1.4 20.3 1.5 30.6-1.5 0 0 2.4 1.5 5.5 2.9-12.8 6.7-36.2 5-46.7-.4-3.7-1.9 7.3-6 7.3-6z"/>
      <path fill="#5382A1" d="M63.8 15.6c-4.4 5.3-6.8 10.7-6.8 16.3 0 10.9 9.1 16.2 9.1 26.5 0 8.3-6.3 13.9-6.3 13.9s4.8-2.6 6.9-6.5c3.2-5.9 3.5-12.2 3.5-17.7 0-12.8-10.9-18.4-10.9-27 0-2 1.3-4 4.5-5.5z"/>
    </svg>
  ),
  spring: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#6DB33F" d="M100 32C88 18 64 20 46 36c-17 15-25 36-21 54 1 4 3 7 6 10 7 6 18 6 26-1 2-1 2-4 1-5-1-2-4-2-5-1-5 4-12 4-16 0-2-2-3-4-4-6C31 73 38 55 52 42c15-13 35-14 46-2 10 10 7 28-5 43-2 2-1 4 1 6 2 1 4 1 6-1 16-18 18-41 4-56z"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#3776AB" d="M62.6 15.5c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.8v3.4H30.1S13 38.8 13 63.8c0 25 15 24.1 15 24.1h8.9V75.4s-.5-15 14.8-15h25.4s14.2.2 14.2-13.8V29.3s1.5-13.8-28.7-13.8z"/>
      <path fill="#FFD43B" d="M65.3 112.5c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H64.7v-3.4h33.1s17.1 1.9 17.1-23.1c0-25-15-24.1-15-24.1h-8.9v12.5s.5 15-14.8 15H60.8s-14.2-.2-14.2 13.8v17.3s-1.5 13.8 28.7 13.8z"/>
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#059669"/>
      <path fill="#FFF" d="M72 16L32 72h28l-4 40 40-56H68l4-40z"/>
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#336791" d="M64 20C40 20 24 36 24 64s16 44 40 44 40-16 40-44-16-44-40-44zm0 72c-15 0-26-11-26-28s11-28 26-28 26 11 26 28-11 28-26 28z"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#00758F" d="M64 24C41.9 24 24 41.9 24 64s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"/>
      <path fill="#F29111" d="M44 64c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#47A248" d="M64.6 16C64 16 63 16.6 63 17.8c0 23.4-17.4 34.2-17.4 57.2 0 21.8 12 36 18.2 41 1.6 1.3 2 4 2 5.5v2h2v-2c0-1.5.4-4.2 2-5.5 6.2-5 18.2-19.2 18.2-41 0-23-17.4-33.8-17.4-57.2 0-1.2-1-1.8-1.4-1.8z"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#D82C20"/>
      <path fill="#FFF" d="M34 44l30-14 30 14-30 14-30-14zm0 20l30 14 30-14-30 14-30-14zm0 20l30 14 30-14-30 14-30-14z"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#2496ED"/>
      <path fill="#FFF" d="M24 72c0 17.7 14.3 32 32 32h24c17.7 0 32-14.3 32-32 0-8.8-3.6-16.7-9.4-22.4H24V72z"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#F05032"/>
      <path fill="#FFF" d="M89.8 59.8L70.8 40.8V30.8c2.3-1.1 3.9-3.5 3.9-6.3 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 2.8 1.6 5.2 3.9 6.3v27.2c-2.3 1.1-3.9 3.5-3.9 6.3 0 2.6 1.4 4.8 3.5 6l-8.9 8.9c-1.2-.6-2.5-.9-3.9-.9-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9c0-1.4-.3-2.7-.9-3.9l9.3-9.3c1.2.6 2.5.9 3.9.9 2.8 0 5.2-1.6 6.3-3.9l9.8 9.8c-1.6 2.7-1.4 6.4 1 8.8 2.9 2.9 7.6 2.9 10.5 0 2.9-2.9 2.9-7.6 0-10.5z"/>
    </svg>
  ),
  actions: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#2088FF"/>
      <circle cx="44" cy="64" r="16" fill="#FFF"/>
      <circle cx="84" cy="40" r="12" fill="#FFF"/>
      <circle cx="84" cy="88" r="12" fill="#FFF"/>
      <path stroke="#FFF" strokeWidth="6" d="M44 64l40-24M44 64l40 24"/>
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#FF6C37"/>
      <circle cx="64" cy="64" r="32" fill="#FFF"/>
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#007ACC"/>
      <path fill="#FFF" d="M96 24L52 64l44 40V24zM32 44l20 20-20 20V44z"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 128 128" width="100%" height="100%">
      <rect width="128" height="128" rx="20" fill="#22272e"/>
      <path fill="#FFD43B" d="M64 20c-18 0-28 20-28 44 0 18 5 30 15 38-7 0-12 3-12 7 0 3 8 7 25 7s25-4 25-7c0-4-5-7-12-7 10-8 15-20 15-38 0-24-10-44-28-44z"/>
      <circle cx="54" cy="48" r="5" fill="#000"/>
      <circle cx="74" cy="48" r="5" fill="#000"/>
      <polygon points="64,54 58,64 70,64" fill="#FFA500"/>
    </svg>
  )
};

// Data definition matching the exact technical matrix in user's image
const techMatrix = [
  {
    domain: "Game Dev & 3D",
    tools: [
      { id: "unity", name: "Unity", icon: techIcons.unity },
      { id: "blender", name: "Blender", icon: techIcons.blender },
      { id: "csharp", name: "C#", icon: techIcons.csharp },
      { id: "meshy", name: "Meshy.ai 3D AI Assets", isBadge: true, badgeText: "Meshy.ai", badgeSub: "3D AI Assets" }
    ]
  },
  {
    domain: "Frontend",
    tools: [
      { id: "react", name: "React.js", icon: techIcons.react },
      { id: "nextjs", name: "Next.js", icon: techIcons.nextjs },
      { id: "typescript", name: "TypeScript", icon: techIcons.typescript },
      { id: "javascript", name: "JavaScript", icon: techIcons.javascript },
      { id: "html5", name: "HTML5", icon: techIcons.html5 },
      { id: "css3", name: "CSS3", icon: techIcons.css3 },
      { id: "tailwind", name: "Tailwind CSS", icon: techIcons.tailwind },
      { id: "bootstrap", name: "Bootstrap", icon: techIcons.bootstrap }
    ]
  },
  {
    domain: "Backend",
    tools: [
      { id: "nodejs", name: "Node.js", icon: techIcons.nodejs },
      { id: "express", name: "Express.js", icon: techIcons.express },
      { id: "java", name: "Java", icon: techIcons.java },
      { id: "spring", name: "Spring Boot", icon: techIcons.spring },
      { id: "python", name: "Python", icon: techIcons.python },
      { id: "fastapi", name: "FastAPI", icon: techIcons.fastapi }
    ]
  },
  {
    domain: "Data & DB",
    tools: [
      { id: "postgres", name: "PostgreSQL", icon: techIcons.postgres },
      { id: "mysql", name: "MySQL", icon: techIcons.mysql },
      { id: "mongodb", name: "MongoDB", icon: techIcons.mongodb },
      { id: "redis", name: "Redis", icon: techIcons.redis },
      { id: "python-db", name: "Python", icon: techIcons.python }
    ]
  },
  {
    domain: "DevOps & Tools",
    tools: [
      { id: "docker", name: "Docker", icon: techIcons.docker },
      { id: "git", name: "Git", icon: techIcons.git },
      { id: "actions", name: "GitHub Actions", icon: techIcons.actions },
      { id: "postman", name: "Postman", icon: techIcons.postman },
      { id: "vscode", name: "VS Code", icon: techIcons.vscode },
      { id: "linux", name: "Linux", icon: techIcons.linux }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="technical-skills-section">
      <div className="container">
        {/* Title Block matching user's image */}
        <div className="tech-matrix-header">
          <Laptop size={28} className="matrix-title-icon" />
          <h2 className="matrix-main-title">Tech Stack & Ecosystem</h2>
        </div>

        {/* Technical Matrix Table */}
        <div className="tech-table-card glass-card">
          <div className="table-responsive">
            <table className="tech-matrix-table">
              <thead>
                <tr>
                  <th className="th-domain">Domain</th>
                  <th className="th-tools">Tools & Technologies</th>
                </tr>
              </thead>
              <tbody>
                {techMatrix.map((row, idx) => (
                  <tr key={idx} className="matrix-row">
                    <td className="td-domain">
                      <span className="domain-label">{row.domain}</span>
                    </td>
                    <td className="td-tools">
                      <div className="tools-flex-wrap">
                        {row.tools.map((item, itemIdx) => {
                          if (item.isBadge) {
                            return (
                              <div key={itemIdx} className="meshy-ai-pill" title={item.name}>
                                <span className="meshy-name">{item.badgeText}</span>
                                <span className="meshy-tag">{item.badgeSub}</span>
                              </div>
                            );
                          }

                          return (
                            <div key={itemIdx} className="tech-icon-box" title={item.name}>
                              <div className="icon-inner">{item.icon}</div>
                              <span className="icon-tooltip">{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
