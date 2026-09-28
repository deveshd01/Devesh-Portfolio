import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './motion.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Deployments from './components/Deployments';
import Skills from './components/Skills';
import Notes from './components/Notes';
import Colab from './components/Colab';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';
import MotionEffects from './components/MotionEffects';

function MainContent() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'deployments', 'projects', 'skills', 'notes', 'colab', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <BackgroundAnimation />
      <MotionEffects />
      <Header currentSection={currentSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="deployments">
          <Deployments />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="notes">
          <Notes />
        </section>
        <section id="colab">
          <Colab />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
