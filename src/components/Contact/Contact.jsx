// src/components/Contact/Contact.jsx

// Getting our tools from the toolbox:
// React is for building our website piece
// useState is a special hook (like a magic wand) that lets us remember and change information
import React, { useState } from 'react';
// styles is our coloring book with special colors and shapes for this Contact page
import styles from './Contact.module.css';

// This is our Contact component - like building a "Send Message" machine
const Contact = () => {
  // useState is like having a notebook where we write down form information
  // formData is the notebook, setFormData is the pencil to write in it
  // We start with empty pages (empty strings: '')
  const [formData, setFormData] = useState({
    name: '',     // Empty name box
    email: '',    // Empty email box
    subject: '',  // Empty subject box
    message: ''   // Empty message box
  });

  // Another notebook: isSubmitting tells us if we're sending the message right now
  // Like a traffic light - red (true) means stop, green (false) means go
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Another notebook: submitStatus tells us if message sent successfully
  // Empty string '' = nothing happened yet, 'sending' = sending now, 'sent' = all done!
  const [submitStatus, setSubmitStatus] = useState('');

  // This function runs when someone clicks the "Send Message" button
  // IMPORTANT FIX: We need to SEND the data to Formspree, not just prevent default!
  const handleSubmit = async (e) => {
    e.preventDefault(); // This says "Don't refresh the whole page when we click send!"
    
    setIsSubmitting(true); // Turn the traffic light red (we're sending now!)
    setSubmitStatus('sending'); // Write "sending" in our status notebook
    
    try {
      // We need to send our formData to Formspree like a mail carrier delivers letters
      // FormData() is like creating a package to send
      const formDataToSend = new FormData();
      
      // Put each piece of information in the package with labels
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // Add special notes for Formspree (like special delivery instructions)
      formDataToSend.append('_subject', 'New Message from Portfolio');
      formDataToSend.append('_replyto', formData.email); // Where to send reply
      
      // fetch() is like our mail carrier - it delivers the package
      // 'POST' means "here's some information to save"
      const response = await fetch('https://formspree.io/f/mqeqdwyj', {
        method: 'POST',
        body: formDataToSend,  // Our packaged data
        headers: {
          'Accept': 'application/json'  // We want a nice response back
        }
      });
      
      // Check if our mail carrier delivered successfully
      if (response.ok) {
        // SUCCESS! Package delivered to Formspree
        setSubmitStatus('sent'); // Write "sent" in our status notebook
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear all boxes
        
        // Wait 5 seconds, then erase the "sent" message (like cleaning a whiteboard)
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        // OOPS! Something went wrong with delivery
        setSubmitStatus('error'); // Write "error" in our status notebook
        console.log('Delivery failed! Formspree said:', await response.json());
      }
    } catch (error) {
      // BIG OOPS! Our mail carrier got lost or something broke
      setSubmitStatus('error'); // Write "error" in our status notebook
      console.log('Mail carrier error:', error);
    } finally {
      // No matter what happened, turn the traffic light green again
      setIsSubmitting(false);
    }
  };

  // This function runs every time someone types in a form box
  // It's like having a secretary who writes down everything you say
  const handleChange = (e) => {
    // We copy all the old form data (...formData is like photocopying)
    // Then we change just one field: [e.target.name] tells us which box changed
    // e.target.value is what they typed in that box
    setFormData({
      ...formData,                 // Keep everything else the same
      [e.target.name]: e.target.value  // Change only the box they typed in
    });
  };

  // Preparing a WhatsApp message - like writing a text message before sending
  const whatsappMessage = `Hello Fenet, I'm interested in your services. Can we chat?`;
  // encodeURIComponent is like putting the message in an envelope so it sends correctly
  const whatsappUrl = `https://wa.me/251704142652?text=${encodeURIComponent(whatsappMessage)}`;

  // Here's what we want to show on the screen!
  return (
    // <section> is like a big treasure chest holding all our contact information
    <section className={styles.contactSection}>
      
      {/* Top part: Big title and subtitle */}
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>
          Get In <span className={styles.gradientText}>Touch</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Have a project in mind? Let's work together!
        </p>
      </div>

      {/* Main content area with two big boxes side by side */}
      <div className={styles.contentGrid}>
        
        {/* LEFT BOX: All my contact information */}
        <div className={`${styles.contactInfo} ${styles.glass}`}>
          <h2><i className="fas fa-comments"></i> Contact Information</h2>
          
          {/* List of ways to contact me - like a phone book page */}
          <div className={styles.contactItems}>
            
            {/* Contact method 1: Email */}
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i> {/* Envelope icon */}
              <div>
                <h3>Email</h3>
                <p>fenetahmed30@gmail.com</p>
              </div>
            </div>
            
            {/* Contact method 2: Phone */}
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i> {/* Phone icon */}
              <div>
                <h3>Phone</h3>
                <p>+251 704 142 652</p>
              </div>
            </div>
            
            {/* Contact method 3: WhatsApp */}
            <div className={styles.contactItem}>
              <i className="fab fa-whatsapp"></i> {/* WhatsApp icon */}
              <div>
                <h3>WhatsApp</h3>
                <p>Chat directly via WhatsApp</p>
              </div>
            </div>
            
            {/* Contact method 4: Location */}
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i> {/* Map pin icon */}
              <div>
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Quick buttons for contacting me */}
          <div className={styles.contactActions}>
            <h3>Quick Contact Options</h3>
            <div className={styles.actionButtons}>
              {/* WhatsApp button - opens WhatsApp app with pre-written message */}
              <a 
                href={whatsappUrl} 
                target="_blank"   // Opens in new tab
                rel="noopener noreferrer"  // Safety feature
                className={`${styles.actionBtn} ${styles.whatsappBtn}`}
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              
              {/* Email button - opens your email app */}
              <a 
                href="mailto:fenetahmed30@gmail.com" 
                className={`${styles.actionBtn} ${styles.emailBtn}`}
              >
                <i className="fas fa-envelope"></i> Send Email
              </a>
            </div>
          </div>

          {/* Social media links - like friendship bracelets connecting us */}
          <div className={styles.socialConnect}>
            <h3>Connect with me</h3>
            <div className={styles.socialLinks}>
              {/* GitHub link - for seeing my code */}
              <a 
                href="https://github.com/Fenet-22" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <i className="fab fa-github"></i>
              </a>
              
              {/* LinkedIn link - for professional stuff */}
              <a 
                href="https://www.linkedin.com/in/fenet-ahmed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              
              {/* Twitter link - for tweets (currently empty #) */}
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

        {/* RIGHT BOX: The message sending form */}
        <div className={`${styles.contactForm} ${styles.glass}`}>
          <h2><i className="fas fa-paper-plane"></i> Send Message</h2>
          
          {/* <form> is like an envelope for your message */}
          {/* IMPORTANT FIX: We removed the action and method attributes because */}
          {/* we're now handling the submission ourselves with JavaScript */}
          <form 
            onSubmit={handleSubmit}  // When send is clicked, run OUR handleSubmit
            className={styles.form}
          >
            
            {/* Name input box */}
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <i className="fas fa-user"></i> Name
              </label>
              <input
                type="text"
                id="name"           // ID connects label to input (like name tags)
                name="name"         // This tells us which box this is
                value={formData.name} // Shows what's in our notebook for name
                onChange={handleChange} // When you type, run handleChange
                placeholder="Your name"  // Hint text inside empty box
                required            // You MUST fill this box
                disabled={isSubmitting} // Can't type while sending
              />
            </div>

            {/* Email input box */}
            <div className={styles.formGroup}>
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"        // Special box that checks for email format
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Subject input box */}
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

            {/* Message textarea (bigger box for longer messages) */}
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
                rows="5"            // How tall the box is
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Send button area */}
            <div className={styles.submitSection}>
              <button 
                type="submit"       // This button submits the form
                className={styles.submitBtn}
                disabled={isSubmitting} // Can't click while sending
              >
                {/* If sending, show spinner icon */}
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  // If not sending, show paper plane icon
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
              
              {/* Success message shows up after sending */}
              {submitStatus === 'sent' && (
                <div className={styles.successMessage}>
                  <i className="fas fa-check-circle"></i> Message sent successfully to Formspree!
                </div>
              )}
              
              {/* Error message if something went wrong */}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <i className="fas fa-exclamation-circle"></i> Failed to send. Please try again.
                </div>
              )}
            </div>
            
            {/* REMOVED: Hidden fields are now added in our handleSubmit function */}
            {/* We don't need them here because we're building the package manually */}
          </form>
        </div>
      </div>

      {/* FAQ section at the bottom - answers to common questions */}
      <div className={`${styles.faqSection} ${styles.glass}`}>
        <h2><i className="fas fa-question-circle"></i> Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          
          {/* FAQ 1 */}
          <div className={styles.faqItem}>
            <h3>What is your typical response time?</h3>
            <p>I usually respond within 24 hours via email and within a few hours on WhatsApp for urgent projects.</p>
          </div>
          
          {/* FAQ 2 */}
          <div className={styles.faqItem}>
            <h3>Do you work remotely?</h3>
            <p>Yes, I work remotely and can collaborate with teams from anywhere in the world.</p>
          </div>
          
          {/* FAQ 3 */}
          <div className={styles.faqItem}>
            <h3>What are your rates?</h3>
            <p>Rates vary based on project complexity and requirements. Contact me for a custom quote.</p>
          </div>
          
          {/* FAQ 4 */}
          <div className={styles.faqItem}>
            <h3>Preferred contact method?</h3>
            <p>For quick responses, use WhatsApp. For detailed project discussions, email or the contact form works best.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Put a label on our "Send Message" machine so other parts of the website can use it
export default Contact;