// src/App.jsx
import React, { useState } from 'react';
import './styles/globals.css';
import Sidebar from './Components/Layout/Sidebar';
import About from './components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';




function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;