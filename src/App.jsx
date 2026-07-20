import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroCard from './components/IntroCard';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import BackToTop from './components/BackToTop';

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

      {/* Corner Back-to-Top Button */}
      <BackToTop />

      <main>
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={handleGoHome}
          />
        ) : (
          <>
            <Hero />
            <IntroCard />
            <Projects onSelectProject={handleSelectProject} />
            <About />
            <Skills />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
