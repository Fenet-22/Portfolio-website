// src/components/Skills/Skills.jsx

// Getting our building tools from the toolbox:
// React is our main tool for building website parts
import React from 'react';
// styles is our special coloring book for the Skills page
import styles from './Skills.module.css';

// This is our Skills component - like building a "My Toolbox" display
// It shows all the tools and technologies I know how to use!
const Skills = () => {
  // ========== SKILLS DATA ==========
  // This is like making a list of all my tools, sorted by category
  // skillsData is an array (list) of categories
  // Each category has a name and a list of skills inside
  const skillsData = [
    {
      category: 'Frontend',  // Category name (tools for the "front" of websites)
      skills: [  // List of frontend skills
        { name: 'React', level: 90 },      // Name and how good I am (0-100%)
        { name: 'JavaScript', level: 85 }, // Like a video game skill level!
        { name: 'HTML/CSS', level: 95 },   // HTML/CSS together as one skill
        
      ]
    },
    {
      category: 'Backend',  // Category name (tools for the "back" of websites)
      skills: [  // List of backend skills
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Python', level: 60 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      category: 'Tools & Others',  // Category name (other helpful tools)
      skills: [  // List of other skills
        { name: 'Git', level: 85 },  // For saving code versions
        { name: 'AWS', level: 65 },  // Cloud services
        
      ]
    }
  ];

  // ========== WHAT TO SHOW ON SCREEN ==========
  return (
    // <section> is a big box holding all our skills information
    <section className={styles.skillsSection}>
      
      {/* ========== HERO HEADER ========== */}
      {/* Big title at the top of the page */}
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          My <span className={styles.gradientText}>Skills</span>  {/* Colorful "Skills" word */}
        </h1>
        <p className={styles.heroSubtitle}>
          Technologies & tools I use to bring ideas to life
        </p>
      </div>

      {/* ========== STATS OVERVIEW ========== */}
      {/* Quick statistics - like a scorecard of my abilities */}
      <div className={`${styles.statsOverview} ${styles.glass}`}>
        {/* Stat 1: Number of technologies I know */}
        <div className={styles.statItem}>
          <i className="fas fa-code"></i>  {/* Code icon */}
          <div>
            <h3>10+</h3>  {/* The number */}
            <p>Technologies</p>  {/* What the number means */}
          </div>
        </div>
        
        {/* Stat 2: Number of projects I've built */}
        <div className={styles.statItem}>
          <i className="fas fa-project-diagram"></i>  {/* Project diagram icon */}
          <div>
            <h3>8+</h3>
            <p>Projects Built</p>
          </div>
        </div>
        
        {/* Note: There's a third stat commented out with // */}
        {/* In programming, // means "ignore this line" */}
      </div>

      {/* ========== SKILLS GRID ========== */}
      {/* Main display of all my skills with progress bars */}
      <div className={styles.skillsGrid}>
        {/* .map() goes through each category in skillsData and makes a box for it */}
        {skillsData.map((category, index) => (
          // Each category box needs a unique key (we use index: 0, 1, 2)
          <div key={index} className={`${styles.skillCategory} ${styles.glass}`}>
            {/* Category title */}
            <h2>{category.category}</h2>
            
            {/* List of skills inside this category */}
            <div className={styles.skillList}>
              {/* .map() goes through each skill in this category */}
              {category.skills.map((skill, skillIndex) => (
                // Each skill item needs a unique key (we use skillIndex)
                <div key={skillIndex} className={styles.skillItem}>
                  
                  {/* Top row: Skill name and percentage */}
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>  {/* Skill name */}
                    <span className={styles.skillPercent}>{skill.level}%</span>  {/* Skill level */}
                  </div>
                  
                  {/* Progress bar (like a thermometer showing how full it is) */}
                  <div className={styles.progressBar}>
                    {/* The colored part that fills up based on skill.level */}
                    {/* style={{ width: `${skill.level}%` }} means:
                        "Make this bar as wide as the skill percentage" */}
                    {/* If skill.level is 90, the bar is 90% wide! */}
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

      {/* ========== TECHNOLOGY STACK ICONS ========== */}
      {/* Pretty icons showing my main technologies */}
      <div className={`${styles.techStack} ${styles.glass}`}>
        <h2>Technology Stack</h2>  {/* Section title */}
        
        {/* Grid of technology icons */}
        <div className={styles.techIcons}>
          
          {/* React icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-react"></i>  {/* React logo */}
            <span>React</span>  {/* React name */}
          </div>
          
          {/* Node.js icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-node-js"></i>  {/* Node.js logo */}
            <span>Node.js</span>
          </div>
          
          {/* JavaScript icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-js"></i>  {/* JavaScript logo */}
            <span>JavaScript</span>
          </div>
          
          {/* HTML5 icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-html5"></i>  {/* HTML5 logo */}
            <span>HTML5</span>
          </div>
          
          {/* CSS3 icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-css3-alt"></i>  {/* CSS3 logo */}
            <span>CSS3</span>
          </div>
          
          {/* Git icon and label */}
          <div className={styles.techItem}>
            <i className="fab fa-git-alt"></i>  {/* Git logo */}
            <span>Git</span>
          </div>
          
          {/* MongoDB icon and label */}
          <div className={styles.techItem}>
            <i className="fas fa-database"></i>  {/* Database icon */}
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      {/* ========== CURRENTLY LEARNING ========== */}
      {/* Shows what I'm studying right now - like a "Now Learning" sign */}
      <div className={`${styles.learningNow} ${styles.glass}`}>
        <h2><i className="fas fa-graduation-cap"></i> Currently Learning</h2>  {/* Graduation cap icon */}
        
        {/* Three boxes showing what I'm learning */}
        <div className={styles.learningItems}>
          
          {/* Learning item 1: Next.js */}
          <div className={styles.learningItem}>
            <i className="fas fa-bolt"></i>  {/* Lightning bolt icon (for speed!) */}
            <h3>Next.js</h3>  {/* What I'm learning */}
            <p>Server-side rendering & static generation</p>  {/* What it does */}
          </div>
          
          {/* Learning item 2: Cloud Computing */}
          <div className={styles.learningItem}>
            <i className="fas fa-cloud"></i>  {/* Cloud icon */}
            <h3>Cloud Computing</h3>
            <p>AWS & Google Cloud Platform</p>
          </div>
          
          {/* Learning item 3: AI/ML */}
          <div className={styles.learningItem}>
            <i className="fas fa-robot"></i>  {/* Robot icon */}
            <h3>AI/ML</h3>
            <p>Machine Learning </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Put a label on our "My Toolbox" display so other parts can use it
export default Skills;