import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/#home" className="logo">
          Atul Rao
        </a>
        <nav className="nav-links">
          <a href="/#home">Home</a>
          <Link to="/about">About</Link>
          <a href="/#lab">Lab</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
