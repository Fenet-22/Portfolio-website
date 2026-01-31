// src/components/Sidebar/Sidebar.jsx

// Getting our building tools from the toolbox:
// React is our main tool for building website parts
import React from 'react';
// styles is our special coloring book for the Sidebar
import styles from './Sidebar.module.css';
// profilePic is like importing a photo from a photo album
import profilePic from '../../assets/me.jpg';

// This is our Sidebar component - like building a menu on the side of the screen
// Think of it like a remote control for the website!
// ({ activeSection, setActiveSection }) are like getting two special gifts:
// 1. activeSection tells us which button is pressed RIGHT NOW
// 2. setActiveSection is like a magic wand to change which button is pressed
const Sidebar = ({ activeSection, setActiveSection }) => {
  
  // navItems is like making a list of buttons for our remote control
  // Each button has: 
  // - id: a secret code name (like "about")
  // - icon: a picture on the button (like a user icon)
  // - label: the words on the button (like "About")
  const navItems = [
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
    { id: 'skills', icon: 'fas fa-cogs', label: 'Skills' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' }
  ];

  // Here's what we want to show on the screen!
  return (
    // <aside> is like a special box that sits on the side of the page
    // ${styles.sidebar} gives it colors and shapes
    // ${styles.glass} makes it look like shiny glass
    <aside className={`${styles.sidebar} ${styles.glass}`}>
      
      {/* ========== PROFILE SECTION ========== */}
      {/* This shows who I am - like a name tag with a photo */}
      <div className={styles.profile}>
        {/* My profile picture - like putting a photo in a frame */}
        <img 
          src={profilePic}  // This is where the photo comes from
          alt="Profile"     // This is what screen readers say (for blind people)
          className={styles.profileImg}  // Makes the photo look nice
        />
        {/* My name in big letters */}
        <h2>Fenet Ahmed</h2>
        {/* What I do */}
        <p>Full Stack Developer</p>
      </div>

      {/* ========== NAVIGATION MENU ========== */}
      {/* <nav> means this is a navigation menu (like a remote control) */}
      <nav className={styles.navigation}>
        {/* We're going to make each button in our navItems list */}
        {/* .map() is like a cookie cutter - it makes one button for each item in the list */}
        {navItems.map(item => (
          // Each button needs a special "key" so React knows which is which
          // It's like putting a name tag on each cookie so we don't mix them up
          <button
            key={item.id}  // The secret code name becomes the key
            
            // className gives the button its look:
            // ${styles.navBtn} gives it basic button styling
            // ${activeSection === item.id ? styles.active : ''} is like saying:
            // "If this button's id matches the activeSection, add 'active' styling
            // Otherwise, add nothing"
            // This makes the pressed button look different!
            className={`${styles.navBtn} ${activeSection === item.id ? styles.active : ''}`}
            
            // onClick tells the button: "When someone clicks you, do this:"
            // () => setActiveSection(item.id) means:
            // "Use the magic wand to make THIS button's id the active one"
            onClick={() => setActiveSection(item.id)}
          >
            {/* The icon on the button (like a little picture) */}
            <i className={item.icon}></i>
            {/* The words on the button */}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* ========== SOCIAL MEDIA LINKS ========== */}
      {/* These are like friendship bracelets connecting to other websites */}
      <div className={styles.social}>
        {/* GitHub link - where I keep my code */}
        <a 
          href="https://github.com/Fenet-22"  // Where it goes when clicked
          className={styles.socialLink}       // How it looks
        >
          <i className="fab fa-github"></i>  {/* GitHub icon */}
        </a>
        
        {/* LinkedIn link - for professional stuff */}
        <a 
          href="https://www.linkedin.com/in/fenet-ahmed" 
          className={styles.socialLink}
        >
          <i className="fab fa-linkedin"></i>  {/* LinkedIn icon */}
        </a>
        
        {/* Twitter link - for tweets (currently empty #) */}
        <a 
          href="#"  // # means "don't go anywhere yet"
          className={styles.socialLink}
        >
          <i className="fab fa-twitter"></i>  {/* Twitter icon */}
        </a>
      </div>
    </aside>
  );
};

// This is like putting a name tag on our Sidebar component
// "export default" means "this is the main thing from this file"
// Now other parts of the website can use our Sidebar!
export default Sidebar;