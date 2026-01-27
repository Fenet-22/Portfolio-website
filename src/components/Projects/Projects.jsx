// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Evangadi Forum',
      description: 'A full-stack community Q&A platform with real-time messaging, user authentication, voting system, and interactive discussions.',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
      image: '/src/assets/evangadi.png',
      demoUrl: 'https://evangadiforum.fenetahmed.com/',
      githubUrl: 'https://github.com/geeksforweb/Evangadi-Forum-G1-2025/tree/Main_Database',
    },
    {
      id: 2,
      title: 'Apple Website Clone',
      description: 'Pixel-perfect responsive clone of Apple\'s homepage with smooth animations and interactive components.',
      category: 'clone',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive'],
      image: '/src/assets/apple.png',
      demoUrl: 'https://profound-cannoli-9407ac.netlify.app/',
      githubUrl: 'https://github.com/Fenet-22/Apple-Clone',
    },
    {
      id: 3,
      title: 'Amazon E-commerce Clone',
      description: 'Full-featured e-commerce platform with product listings, shopping cart, and user authentication.',
      category: 'clone',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
      image: '/src/assets/amazon.png',
      demoUrl: 'https://imaginative-sundae-dd7427.netlify.app/',
      githubUrl: 'https://github.com/Fenet-22/Amazon-Frontend2',
    },
    {
      id: 4,
      title: 'Netflix Streaming Clone',
      description: 'Video streaming platform with user profiles, content categorization, and movie recommendations.',
      category: 'clone',
      tags: ['React', 'TMDB API', 'Firebase', 'Responsive'],
      image: '/src/assets/netflix.png',
      demoUrl: 'https://netflix-clone-2025-five.vercel.app/',
      githubUrl: 'https://github.com/Fenet-22/Netflix-Clone-2025',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className={styles.projects}>
      <h1 className={styles.sectionTitle}>My Projects</h1>
      <p className={styles.sectionSubtitle}>
        Demonstrating my expertise through practical full-stack development projects
      </p>

      <div className={styles.statsBar}>
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>{projects.length}</div>
          <div className={styles.statLabel}>Total Projects</div>
        </div>
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>Major Clones</div>
        </div>
        <div className={`${styles.statBox} ${styles.glass}`}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>Full-Stack Apps</div>
        </div>
      </div>

      <div className={styles.filterButtons}>
        <button 
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'fullstack' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('fullstack')}
        >
          Full-Stack Apps
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'clone' ? styles.active : ''} ${styles.glass}`}
          onClick={() => setFilter('clone')}
        >
          Major Clones
        </button>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={`${styles.projectCard} ${styles.glass}`}>
            <div className={styles.projectCategory}>
              <span className={`${styles.categoryTag} ${styles[project.category]}`}>
                {project.category === 'fullstack' ? 'Full-Stack' : 'Clone'}
              </span>
            </div>
            
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
              <div className={styles.projectOverlay}>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                >
                  Live Demo
                </a>
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
            
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
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

export default Projects;