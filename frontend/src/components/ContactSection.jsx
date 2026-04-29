import React, { useState } from 'react';
import './ContactSection.css';


const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to connect to server.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container text-center">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          I’m currently seeking opportunities to grow as a full-stack developer and build real-world web applications. Have a project in mind? Let’s connect.        </p>

        <a href="mailto:02atulrao@gmail.com" className="contact-email">02atulrao@gmail.com</a>

        {/* Added Contact Form for MERN Stack Requirement */}
        <form className="contact-form glass-panel" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="btn submit-btn">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/atul-rao-44b2212b8/" target="_blank">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" class="social-icon" />
          </a>
          <a href="https://github.com/AtulRao22" className="social-icon"><img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub" /></a>
          <a href="https://www.instagram.com/atulrao_288/" className="social-icon"><img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
            alt="Instagram" /></a>
        </div>
      </div>
      <footer className="footer">
        <p>© 2026 Atul Rao. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
