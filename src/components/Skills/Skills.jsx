// src/components/Skills/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Python', level: 60 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'AWS', level: 65 },
        
      ]
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          My <span className={styles.gradientText}>Skills</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Technologies & tools I use to bring ideas to life
        </p>
      </div>

      <div className={`${styles.statsOverview} ${styles.glass}`}>
        <div className={styles.statItem}>
          <i className="fas fa-code"></i>
          <div>
            <h3>10+</h3>
            <p>Technologies</p>
          </div>
        </div>
        <div className={styles.statItem}>
          <i className="fas fa-project-diagram"></i>
          <div>
            <h3>8+</h3>
            <p>Projects Built</p>
          </div>
        </div>
        
      </div>

      <div className={styles.skillsGrid}>
        {skillsData.map((category, index) => (
          <div key={index} className={`${styles.skillCategory} ${styles.glass}`}>
            <h2>{category.category}</h2>
            <div className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.techStack} ${styles.glass}`}>
        <h2>Technology Stack</h2>
        <div className={styles.techIcons}>
          <div className={styles.techItem}>
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className={styles.techItem}>
            <i className="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div className={styles.techItem}>
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className={styles.techItem}>
            <i className="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div className={styles.techItem}>
            <i className="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div className={styles.techItem}>
            <i className="fab fa-git-alt"></i>
            <span>Git</span>
          </div>
          
          <div className={styles.techItem}>
            <i className="fas fa-database"></i>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      <div className={`${styles.learningNow} ${styles.glass}`}>
        <h2><i className="fas fa-graduation-cap"></i> Currently Learning</h2>
        <div className={styles.learningItems}>
          <div className={styles.learningItem}>
            <i className="fas fa-bolt"></i>
            <h3>Next.js</h3>
            <p>Server-side rendering & static generation</p>
          </div>
          <div className={styles.learningItem}>
            <i className="fas fa-cloud"></i>
            <h3>Cloud Computing</h3>
            <p>AWS & Google Cloud Platform</p>
          </div>
          <div className={styles.learningItem}>
            <i className="fas fa-robot"></i>
            <h3>AI/ML</h3>
            <p>Machine Learning </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;