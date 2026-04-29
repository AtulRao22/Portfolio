import React from 'react';
import './HeroSection.css';
import atulimg from "../assets/Atul.jpeg";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="glow-circle"></div>

      <div className="hero-content">
        <div className="avatar-container">
          <div className="avatar-img-placeholder">
            <img src={atulimg} alt="Atul Rao" className="hero-avatar-img" />
          </div>

          <div className="avatar-annotation">
            <span className="annotation-text">Hello! I Am <span className="text-accent">Atul Rao</span></span>
            {/* <svg className="annotation-arrow" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70,20 Q10,20 10,95" stroke="rgba(199, 198, 198, 0.71)" strokeWidth="1.5" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
            </svg> */}
            <svg
              className="annotation-arrow"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 25 C60 10, 30 20, 25 70"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
              />

              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="5"
                  markerHeight="5"
                  refX="4"
                  refY="2.5"
                  orient="auto"
                >
                  <path
                    d="M0,0 L5,2.5 L0,5"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <div className="hero-text-block">
          <p className="hero-subtitle">A Full-Stack Developer Who</p>
          <p className="hero-title">
            Builds real-world <br />
            web <span className="highlight-outline">applications</span><span className="dots">...</span>
          </p>
          <p className="hero-caption">Focused on clean code, performance, and scalable solutions.</p>
        </div>
      </div>

      <div id="about" className="about-text-block">
        <h4 className="about-heading">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer (MERN)',
              1500,
              'Building Real-World Projects',
              1500,
              'Problem Solver',
              1500,
            ]}
            speed={60}
            repeat={Infinity}
            cursor={true}
          />
        </h4>
        <p className="about-subheading">
          I’m a BCA student and full-stack developer building real-world web applications using the MERN stack.
        </p>
        <p className="about-paragraph">
          I have hands-on experience developing projects with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.I enjoy solving real-world problems through code and continuously improving my development skills.</p>
      </div>
    </section>
  );
};

export default HeroSection;
