import React from 'react';
import './AboutSection.css';
import nodejsimg from "../assets/Node.js.svg"
import FullStack from "../assets/app-development.png"

const AboutSection = () => {
  return (
    <section className="about-graphic-section">
      <div className="section-header text-center">
        <h2 className="team-heading">
          Seeking opportunities to grow as a <span className="text-accent">full-stack developer</span> and build real-world applications.
        </h2>
      </div>

      <div className="graphic-container">
        {/* Placeholder for the complex glowing node tree graphic */}
        <div className="tech-tree">
          <div className="tech-icons">
            <span className="icon java"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /></span>
            <span className="icon html">  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></span>
            <span className="icon css"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /></span>
            <span className="icon js">  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></span>
            <span className="icon react">  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></span>
            <span className="icon node">    <img src={nodejsimg} alt="Node.js" /></span>
            <span className="icon express"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" /></span>
            <span className="icon mongodb">  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /></span>
          </div>
          <div className="connecting-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <div className="line line-4"></div>
            <div className="line line-5"></div>
          </div>
          <div className="center-node">
            <span className="tech-logo"><img src={FullStack} alt="Full Stack" /></span>
            <div className="rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
