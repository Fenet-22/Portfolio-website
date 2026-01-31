// src/components/Home/Home.jsx

// Getting our building tools from the toolbox:
// React is our main tool for building website parts (like LEGO blocks)
import React from 'react';
// styles is our special coloring book with colors and designs for the Home page
import styles from './Home.module.css';

// This is our Home component - like building the front door and welcome mat of our website
// It's the first thing people see when they visit!
const Home = () => {
  // return tells the computer: "Here's what I want to show on the screen!"
  return (
    // <section> is like a big treasure chest that holds everything on the Home page
    <section className={styles.homeSection}>
      
      {/* ========== HERO SECTION ========== */}
      {/* The hero section is like a big welcome banner at the top of the page */}
      {/* glass class makes it look like shiny glass */}
      <div className={`${styles.heroSection} glass`}>
        <div className={styles.heroContent}>
          
          {/* LEFT SIDE: Words and buttons */}
          <div className={styles.heroText}>
            {/* Biggest title on the page - like a book title */}
            <h1 className={styles.heroMainTitle}>
              Crafting <span className={styles.heroHighlight}>Digital Experiences</span> That Captivate
            </h1>
            
            {/* Smaller title - tells who I am */}
            <h2 className={styles.heroSubtitle}>
              Hi, I'm <span className={styles.nameHighlight}>Fenet Ahmed</span> • Full-Stack Developer
            </h2>
            
            {/* Paragraph describing what I do */}
            <p className={styles.heroDescription}>
              I specialize in creating responsive, modern websites with cutting-edge design 
              and flawless functionality. With expertise in React, Node.js, and modern web 
              technologies, I transform ideas into exceptional digital experiences.
            </p>
            
            {/* Stats boxes - like a scoreboard of my achievements */}
            <div className={styles.heroStats}>
              
              {/* Stat 1: Projects completed */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-code"></i> {/* Code icon */}
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>15+</span> {/* Big number */}
                  <span className={styles.statLabel}>Projects</span> {/* What it means */}
                </div>
              </div>
              
              {/* Stat 2: Major clones made */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-rocket"></i> {/* Rocket icon */}
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Major Clones</span>
                </div>
              </div>
              
              {/* Stat 3: Client satisfaction */}
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-heart"></i> {/* Heart icon */}
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
              </div>
            </div>
            
            {/* Action buttons - things people can click */}
            <div className={styles.heroActions}>
              {/* Button 1: Goes to projects section */}
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-eye"></i> View My Work
              </a>
              
              {/* Button 2: Goes to contact section */}
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-paper-plane"></i> Let's Connect
              </a>
            </div>
          </div>
          
          {/* RIGHT SIDE: Floating icons and visual effects */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingElements}>
              
              {/* Floating icon 1: Laptop code */}
              <div className={`${styles.floatingElement} ${styles.element1}`}>
                <i className="fas fa-laptop-code"></i>
              </div>
              
              {/* Floating icon 2: Paint palette */}
              <div className={`${styles.floatingElement} ${styles.element2}`}>
                <i className="fas fa-palette"></i>
              </div>
              
              {/* Floating icon 3: Server */}
              <div className={`${styles.floatingElement} ${styles.element3}`}>
                <i className="fas fa-server"></i>
              </div>
              
              {/* Big center circle with sparkles */}
              <div className={styles.centralCircle}>
                <div className={styles.circleInner}>
                  <i className="fas fa-sparkles"></i> {/* Sparkles icon */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== QUICK NAVIGATION ========== */}
      {/* This is like a map showing where to go next on the website */}
      <div className={styles.quickNav}>
        <div className={styles.quickNavHeader}>
          <h3>Explore My Work</h3>
          <p>Discover my projects and skills</p>
        </div>
        
        {/* Three navigation cards in a row */}
        <div className={styles.quickNavGrid}>
          
          {/* Card 1: Goes to Projects section */}
          <a href="#projects" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-briefcase"></i> {/* Briefcase icon */}
            </div>
            <h4>Projects</h4> {/* Card title */}
            <p>View my completed work</p> {/* Card description */}
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i> {/* Arrow pointing right */}
            </div>
          </a>
          
          {/* Card 2: Goes to Skills section */}
          <a href="#skills" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-tools"></i> {/* Tools icon */}
            </div>
            <h4>Skills</h4>
            <p>See my technical expertise</p>
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
          
          {/* Card 3: Goes to About section */}
          <a href="#about" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-user"></i> {/* User icon */}
            </div>
            <h4>About Me</h4>
            <p>Learn about my journey</p>
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>

      {/* ========== FEATURED PROJECT PREVIEW ========== */}
      {/* This shows off my best project - like showing your best drawing */}
      <div className={styles.featuredPreview}>
        <div className={styles.previewHeader}>
          <h3>Featured Project</h3> {/* Section title */}
          <p>Apple Website Clone</p> {/* Project name */}
        </div>
        
        {/* The actual project card */}
        <div className={`${styles.previewCard} glass`}>
          
          {/* Left side: Project picture */}
          <div className={styles.previewImage}>
            {/* Shows a picture of the Apple website clone */}
            <img src="/assets/apple-clone.jpg" alt="Apple Clone" />
            
            {/* Overlay with button that appears when you hover */}
            <div className={styles.previewOverlay}>
              <button className={styles.previewButton}>
                <i className="fas fa-external-link-alt"></i> View Project
              </button>
            </div>
          </div>
          
          {/* Right side: Project information */}
          <div className={styles.previewInfo}>
            
            {/* Tags showing what technologies I used */}
            <div className={styles.previewTags}>
              <span className={styles.tag}>HTML5</span> {/* Technology tag */}
              <span className={styles.tag}>CSS3</span>   {/* Technology tag */}
              <span className={styles.tag}>JavaScript</span> {/* Technology tag */}
              <span className={styles.tag}>Responsive</span> {/* Technology tag */}
            </div>
            
            {/* Description of the project */}
            <p className={styles.previewDescription}>
              A pixel-perfect responsive clone of Apple's homepage with smooth animations 
              and interactive components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// This is like putting a name tag on our Home component
// "export default" means "this is the main thing from this file"
// Other parts of the website can now say "Hey Home component, show yourself!"
export default Home;