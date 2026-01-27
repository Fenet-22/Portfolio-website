import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.homeSection}>
      {/* Hero Section */}
      <div className={`${styles.heroSection} glass`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroMainTitle}>
              Crafting <span className={styles.heroHighlight}>Digital Experiences</span> That Captivate
            </h1>
            <h2 className={styles.heroSubtitle}>
              Hi, I'm <span className={styles.nameHighlight}>Fenet Ahmed</span> • Full-Stack Developer
            </h2>
            <p className={styles.heroDescription}>
              I specialize in creating responsive, modern websites with cutting-edge design 
              and flawless functionality. With expertise in React, Node.js, and modern web 
              technologies, I transform ideas into exceptional digital experiences.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-code"></i>
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-rocket"></i>
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Major Clones</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-heart"></i>
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
              </div>
            </div>
            <div className={styles.heroActions}>
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-eye"></i> View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-paper-plane"></i> Let's Connect
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingElements}>
              <div className={`${styles.floatingElement} ${styles.element1}`}>
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className={`${styles.floatingElement} ${styles.element2}`}>
                <i className="fas fa-palette"></i>
              </div>
              <div className={`${styles.floatingElement} ${styles.element3}`}>
                <i className="fas fa-server"></i>
              </div>
              <div className={styles.centralCircle}>
                <div className={styles.circleInner}>
                  <i className="fas fa-sparkles"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className={styles.quickNav}>
        <div className={styles.quickNavHeader}>
          <h3>Explore My Work</h3>
          <p>Discover my projects and skills</p>
        </div>
        <div className={styles.quickNavGrid}>
          <a href="#projects" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Projects</h4>
            <p>View my completed work</p>
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
          
          <a href="#skills" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-tools"></i>
            </div>
            <h4>Skills</h4>
            <p>See my technical expertise</p>
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
          
          <a href="#about" className={`${styles.navCard} glass`}>
            <div className={styles.navCardIcon}>
              <i className="fas fa-user"></i>
            </div>
            <h4>About Me</h4>
            <p>Learn about my journey</p>
            <div className={styles.navArrow}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>

      {/* Featured Project Preview */}
      <div className={styles.featuredPreview}>
        <div className={styles.previewHeader}>
          <h3>Featured Project</h3>
          <p>Apple Website Clone</p>
        </div>
        <div className={`${styles.previewCard} glass`}>
          <div className={styles.previewImage}>
            <img src="/assets/apple-clone.jpg" alt="Apple Clone" />
            <div className={styles.previewOverlay}>
              <button className={styles.previewButton}>
                <i className="fas fa-external-link-alt"></i> View Project
              </button>
            </div>
          </div>
          <div className={styles.previewInfo}>
            <div className={styles.previewTags}>
              <span className={styles.tag}>HTML5</span>
              <span className={styles.tag}>CSS3</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>Responsive</span>
            </div>
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

export default Home;