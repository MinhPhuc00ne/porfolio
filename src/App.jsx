import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Ambient Background Orbs */}
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onGoHome={handleGoHome}
        isDetailPage={Boolean(selectedProject)}
      />

      <main>
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={handleGoHome}
          />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={handleSelectProject} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
