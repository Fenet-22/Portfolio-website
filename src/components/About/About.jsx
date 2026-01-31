// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';

// Note: Now we accept setActiveSection as a prop
const About = ({ setActiveSection }) => {
  return (
    <section className={styles.aboutSection}>
      
      <div className={`${styles.heroHeader} ${styles.glass}`}>
        <h1 className={styles.heroTitle}>
          Hello, I'm <span className={styles.gradientText}>Fenet Ahmed</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Full Stack Developer & UI/UX Designer
        </p>
        
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          
          <div className={styles.stat}>
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          
          <div className={styles.stat}>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        
        <div className={`${styles.aboutCard} ${styles.glass}`}>
          <h2><i className="fas fa-user"></i> About Me</h2>
          <p>
            Passionate Full Stack Developer with expertise in modern web technologies.
            I create beautiful, functional, and user-friendly applications that solve
            real-world problems.
          </p>
          <p>
            My journey in web development started 2 years ago, and since then
            I've worked on various projects ranging from e-commerce platforms
            to social media applications.
          </p>
          
          <div className={styles.ctaButtons}>
            {/* FIXED: Now uses setActiveSection to switch to contact */}
            <button 
              onClick={() => setActiveSection('contact')}
              className={styles.primaryBtn}
               style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-paper-plane"></i> Get In Touch
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>

        <div className={`${styles.experienceCard} ${styles.glass}`}>
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
          
          <div className={styles.timeline}>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Full Stack Developer</h3>
                <p className={styles.date}>2024 - Present</p>
                <p>Developing web applications using React, Node.js, and MongoDB</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Frontend Developer</h3>
                <p className={styles.date}>2024 - present</p>
                <p>Creating responsive user interfaces with React and modern CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.servicesCard} ${styles.glass}`}>
          <h2><i className="fas fa-laptop-code"></i> Services</h2>
          
          <div className={styles.servicesGrid}>
            
            <div className={styles.serviceItem}>
              <i className="fas fa-code"></i>
              <h3>Web Development</h3>
              <p>Full-stack web applications with modern technologies</p>
            </div>
            
            <div className={styles.serviceItem}>
              <i className="fas fa-paint-brush"></i>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user interfaces</p>
            </div>
            
            <div className={styles.serviceItem}>
              <i className="fas fa-mobile-alt"></i>
              <h3>Responsive Design</h3>
              <p>Perfect on all devices and screen sizes</p>
            </div>
            
            <div className={styles.serviceItem}>
              <i className="fas fa-rocket"></i>
              <h3>Performance</h3>
              <p>Fast and optimized web applications</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;