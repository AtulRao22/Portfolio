import React, { useState } from 'react';
import './ContactSection.css';


const ContactSection = () => {

  
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          I’m currently seeking opportunities to grow as a full-stack developer and build real-world web applications. Have a project in mind? Let’s connect.        </p>

        <a href="mailto:02atulrao@gmail.com" className="contact-email">02atulrao@gmail.com</a>

        {/* Added Contact Form for MERN Stack Requirement */}
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/atul-rao-44b2212b8/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/AtulRao22" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/atulrao_288/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="" />
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>© 2026 Atul Rao. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
