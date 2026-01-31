// src/components/Projects/Projects.jsx

// Getting our building tools from the toolbox:
// React is our main tool for building website parts
// useState is a magic wand that helps us remember and change things
import React, { useState } from 'react';
// styles is our special coloring book for the Projects page
import styles from './Projects.module.css';

// ========== IMPORTING PROJECT PICTURES ==========
// This is like getting photos from a photo album to show in our projects
// We need to import them correctly so the website can find them
// Think of these as "photo variables" - we store the photo in a box with a name
import evangadiImg from '../../assets/evangadi.png';  // Photo of Evangadi project
import appleImg from '../../assets/apple.png';        // Photo of Apple clone
import amazonImg from '../../assets/amazon.png';      // Photo of Amazon clone
import netflixImg from '../../assets/netflix.png';    // Photo of Netflix clone

// This is our Projects component - like building a "Show and Tell" wall for my projects
const Projects = () => {
  // useState is like having a notebook for remembering which filter is selected
  // filter = what's written in the notebook right now (starts with 'all')
  // setFilter = the pencil to write new things in the notebook
  const [filter, setFilter] = useState('all');

  // ========== PROJECTS LIST ==========
  // This is like making a list of all my toys to show off
  // Each project is an object (a box with information inside)
  const projects = [
    {
      id: 1,  // Like putting #1 on the toy so we know which is which
      title: 'Evangadi Forum',  // Name of the project
      description: 'A full-stack community Q&A platform with real-time messaging, user authentication, voting system, and interactive discussions.',
      category: 'fullstack',  // What type of project it is
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],  // Tools I used
      image: evangadiImg,  // USE THE VARIABLE - this is the photo we imported!
      demoUrl: 'https://evangadiforum.fenetahmed.com/',  // Where to see it live
      githubUrl: 'https://github.com/geeksforweb/Evangadi-Forum-G1-2025/tree/Main_Database',  // Where the code lives
    },
    {
      id: 2,
      title: 'Apple Website Clone',
      description: 'Pixel-perfect responsive clone of Apple\'s homepage with smooth animations and interactive components.',
      category: 'clone',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive'],
      image: appleImg,  // USE THE VARIABLE - the Apple photo
      demoUrl: 'https://profound-cannoli-9407ac.netlify.app/',
      githubUrl: 'https://github.com/Fenet-22/Apple-Clone',
    },
    {
      id: 3,
      title: 'Amazon E-commerce Clone',
      description: 'Full-featured e-commerce platform with product listings, shopping cart, and user authentication.',
      category: 'clone',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
      image: amazonImg,  // USE THE VARIABLE - the Amazon photo
      demoUrl: 'https://imaginative-sundae-dd7427.netlify.app/',
      githubUrl: 'https://github.com/Fenet-22/Amazon-Frontend2',
    },
    {
      id: 4,
      title: 'Netflix Streaming Clone',
      description: 'Video streaming platform with user profiles, content categorization, and movie recommendations.',
      category: 'clone',
      tags: ['React', 'TMDB API', 'Firebase', 'Responsive'],
      image: netflixImg,  // USE THE VARIABLE - the Netflix photo
      demoUrl: 'https://netflix-clone-2025-five.vercel.app/',
      githubUrl: 'https://github.com/Fenet-22/Netflix-Clone-2025',
    }
  ];

  // ========== FILTERING LOGIC ==========
  // This decides which projects to show based on the filter
  // filteredProjects = only the toys that match what we want to see
  // filter === 'all' ? means "if filter says 'all'"
  // ? projects means "then show ALL projects"
  // : projects.filter means "otherwise, only show projects that match the filter"
  const filteredProjects = filter === 'all' 
    ? projects  // Show everything!
    : projects.filter(project => project.category === filter);  // Show only matching ones

  // ========== WHAT TO SHOW ON SCREEN ==========
  return (
    // <section> is a big box holding all our projects
    <section className={styles.projects}>
      
      {/* ========== TITLE AND SUBTITLE ========== */}
      <h1 className={styles.sectionTitle}>My Projects</h1>
      <p className={styles.sectionSubtitle}>
        Demonstrating my expertise through practical full-stack development projects
      </p>

      {/* ========== STATISTICS BAR ========== */}
      {/* This shows numbers about my projects - like a scoreboard */}
      <div className={styles.statsBar}>
        {/* Box 1: Total projects count */}
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>{projects.length}</div> {/* Shows 4 */}
          <div className={styles.statLabel}>Total Projects</div>
        </div>
        
        {/* Box 2: Clones count */}
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>Major Clones</div>
        </div>
        
        {/* Box 3: Full-stack apps count */}
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>Full-Stack Apps</div>
        </div>
      </div>

      {/* ========== FILTER BUTTONS ========== */}
      {/* These are like sorting buttons - "Show me only red toys" or "Show me all toys" */}
      <div className={styles.filterButtons}>
        {/* Button 1: Shows ALL projects */}
        <button 
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('all')}  // When clicked, write 'all' in our notebook
        >
          All Projects
        </button>
        
        {/* Button 2: Shows only FULL-STACK projects */}
        <button 
          className={`${styles.filterBtn} ${filter === 'fullstack' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('fullstack')}  // Write 'fullstack' in notebook
        >
          Full-Stack Apps
        </button>
        
        {/* Button 3: Shows only CLONE projects */}
        <button 
          className={`${styles.filterBtn} ${filter === 'clone' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('clone')}  // Write 'clone' in notebook
        >
          Major Clones
        </button>
      </div>

      {/* ========== PROJECTS GRID ========== */}
      {/* This is where the projects actually show up - like shelves for our toys */}
      <div className={styles.projectsGrid}>
        {/* .map() is like a cookie cutter - makes one card for each filtered project */}
        {filteredProjects.map(project => (
          // Each project card needs a unique "key" so React knows which is which
          <div key={project.id} className={`${styles.projectCard} ${styles.glass}`}>
            
            {/* Category tag at top - shows what type of project it is */}
            <div className={styles.projectCategory}>
              {/* The tag changes color based on category (fullstack or clone) */}
              <span className={`${styles.categoryTag} ${styles[project.category]}`}>
                {project.category === 'fullstack' ? 'Full-Stack' : 'Clone'}
              </span>
            </div>
            
            {/* Project image with overlay buttons */}
            <div className={styles.projectImage}>
              {/* Show the project picture */}
              <img src={project.image} alt={project.title} />
              
              {/* Overlay buttons that appear when you hover */}
              <div className={styles.projectOverlay}>
                {/* Button 1: Live Demo - opens the actual website */}
                <a 
                  href={project.demoUrl} 
                  target="_blank"   // Opens in new tab
                  rel="noopener noreferrer"  // Safety feature
                  className={styles.projectLink}
                >
                  Live Demo
                </a>
                
                {/* Button 2: Source Code - opens the GitHub page */}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                >
                  Source Code
                </a>
              </div>
            </div>
            
            {/* Project information */}
            <div className={styles.projectContent}>
              {/* Project title */}
              <h3 className={styles.projectTitle}>{project.title}</h3>
              
              {/* Project description */}
              <p className={styles.projectDescription}>{project.description}</p>
              
              {/* Tags showing technologies used */}
              <div className={styles.projectTags}>
                {/* .map() makes one tag for each technology in the list */}
                {project.tags.map((tag, index) => (
                  // Each tag needs a key (we use index which is like 0, 1, 2, 3...)
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Put a label on our "Show and Tell" wall so other parts can use it
export default Projects;