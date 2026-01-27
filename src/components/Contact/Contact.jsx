// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');
    
    // Form will be handled by Formspree
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp message template
  const whatsappMessage = `Hello Fenet, I'm interested in your services. Can we chat?`;
  const whatsappUrl = `https://wa.me/251704142652?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className={styles.contactSection}>
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          Get In <span className={styles.gradientText}>Touch</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Have a project in mind? Let's work together!
        </p>
      </div>

      <div className={styles.contentGrid}>
        <div className={`${styles.contactInfo} ${styles.glass}`}>
          <h2><i className="fas fa-comments"></i> Contact Information</h2>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>fenetahmed30@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+251 704 142 652</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <i className="fab fa-whatsapp"></i>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat directly via WhatsApp</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <div className={styles.contactActions}>
            <h3>Quick Contact Options</h3>
            <div className={styles.actionButtons}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.whatsappBtn}`}
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a 
                href="mailto:fenetahmed30@gmail.com" 
                className={`${styles.actionBtn} ${styles.emailBtn}`}
              >
                <i className="fas fa-envelope"></i> Send Email
              </a>
            </div>
          </div>

          <div className={styles.socialConnect}>
            <h3>Connect with me</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/Fenet-22" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/fenet-ahmed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.contactForm} ${styles.glass}`}>
          <h2><i className="fas fa-paper-plane"></i> Send Message</h2>
          {/* Replace YOUR_FORM_ID with your actual Formspree form ID */}
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST" 
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <i className="fas fa-user"></i> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">
                <i className="fas fa-tag"></i> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className={styles.submitSection}>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'sent' && (
                <div className={styles.successMessage}>
                  <i className="fas fa-check-circle"></i> Message sent successfully!
                </div>
              )}
            </div>
            
            {/* Add a hidden field to help Formspree */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
            <input type="hidden" name="_format" value="plain" />
          </form>
        </div>
      </div>

      <div className={`${styles.faqSection} ${styles.glass}`}>
        <h2><i className="fas fa-question-circle"></i> Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>What is your typical response time?</h3>
            <p>I usually respond within 24 hours via email and within a few hours on WhatsApp for urgent projects.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Do you work remotely?</h3>
            <p>Yes, I work remotely and can collaborate with teams from anywhere in the world.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What are your rates?</h3>
            <p>Rates vary based on project complexity and requirements. Contact me for a custom quote.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Preferred contact method?</h3>
            <p>For quick responses, use WhatsApp. For detailed project discussions, email or the contact form works best.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;