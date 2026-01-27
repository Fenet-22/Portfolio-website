// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
    { id: 'skills', icon: 'fas fa-cogs', label: 'Skills' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' }
  ];

  return (
    <aside className={`${styles.sidebar} ${styles.glass}`}>
      <div className={styles.profile}>
        <img src="/src/assets/me.jpg" alt="Profile" className={styles.profileImg} />
        <h2>Fenet Ahmed</h2>
        <p>Full Stack Developer</p>
      </div>

      <nav className={styles.navigation}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`${styles.navBtn} ${activeSection === item.id ? styles.active : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.social}>
        <a href="https://github.com/Fenet-22" className={styles.socialLink}>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/fenet-ahmed" className={styles.socialLink}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className={styles.socialLink}>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;