// src/App.jsx

// Getting our building tools from the toolbox:
// React is our main tool for building website parts
// useState is a magic wand that helps us remember and change things
import React, { useState } from 'react';

// ========== IMPORTING STYLES ==========
// This is like getting our main coloring book for the whole website
import './styles/globals.css';

// ========== IMPORTING COMPONENTS ==========
// These are like getting our building blocks (pre-made sections of our website)
// Sidebar is like the remote control/menu on the side
import Sidebar from './Components/Layout/Sidebar';
// About is the "About Me" page
import About from './components/About/About';
// Projects is the "My Projects" page
import Projects from './Components/Projects/Projects';
// Skills is the "My Skills" page
import Skills from './components/Skills/Skills';
// Contact is the "Contact Me" page
import Contact from './components/Contact/Contact';

// ========== OUR MAIN APP FUNCTION ==========
// This is like the CONSTRUCTION MANAGER of our entire website!
// It decides which parts to show and when to show them
function App() {
  // ========== STATE FOR ACTIVE SECTION ==========
  // useState is like having a notebook that remembers which page we're on
  // activeSection = what's written in the notebook right now (starts with 'about')
  // setActiveSection = the pencil to write new things in the notebook
  
  // Think of it like a TV remote:
  // activeSection = which channel is currently showing ('about' channel)
  // setActiveSection = the button you press to change channels
  const [activeSection, setActiveSection] = useState('about');

  // ========== RENDER SECTION FUNCTION ==========
  // This function is like a TV SWITCHER - it decides what to show on screen
  const renderSection = () => {
    // switch statement is like a multiple-choice question:
    // "What is the value of activeSection?"
    // It checks each case (possible answer) and does something different for each
    
    switch (activeSection) {
      case 'about':  // If activeSection is 'about'
        return <About setActiveSection={setActiveSection}/>;  // Show the About component
      
      case 'projects':  // If activeSection is 'projects'
        return <Projects />;  // Show the Projects component
      
      case 'skills':  // If activeSection is 'skills'
        return <Skills />;  // Show the Skills component
      
      case 'contact':  // If activeSection is 'contact'
        return <Contact />;  // Show the Contact component
      
      default:  // If activeSection is something else (shouldn't happen, but just in case!)
        return <About />;  // Show About as a safety net
    }
    // It's like: "If channel is 2, show Cartoons. If channel is 5, show News..."
  };

  // ========== WHAT THE APP SHOWS ON SCREEN ==========
  return (
    // This is the BIG CONTAINER that holds our entire website
    <div className="app-container">
      
      {/* ========== SIDEBAR COMPONENT ========== */}
      {/* The Sidebar is like the remote control/menu on the left side */}
      {/* We're passing two important things to the Sidebar: */}
      {/* 1. activeSection = which button should look pressed */}
      {/* 2. setActiveSection = the ability to change pages when buttons are clicked */}
      <Sidebar
        activeSection={activeSection}  // "Here's which page we're on right now"
        setActiveSection={setActiveSection}  // "Here's how you can change pages"
      />
      
      {/* ========== MAIN CONTENT AREA ========== */}
      {/* This is where the actual pages (About, Projects, etc.) show up */}
      <main className="main-content">
        {/* {renderSection()} means "Run the renderSection function and show what it returns" */}
        {/* It's like saying: "Show whatever page should be showing based on activeSection" */}
        {renderSection()}
      </main>
    </div>
  );
}

// ========== EXPORTING THE APP ==========
// This is like putting a big sign on our construction: "THIS IS THE MAIN APP!"
// "export default" means "this is the most important thing in this file"
// When someone imports from App.jsx, they get this App function
export default App;