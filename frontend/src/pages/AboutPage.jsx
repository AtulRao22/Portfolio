import React from 'react';
import './AboutPage.css';
import atulImg from '../assets/Atul.jpeg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="glow-circle about-glow-1"></div>
      <div className="glow-circle about-glow-2"></div>

      <div className="about-container">
        <header className="about-header text-center">
          <h1 className="about-title">About <span className="text-accent">Me</span></h1>
          <p className="about-subtitle">Full-Stack Developer passionate about building robust applications.</p>
        </header>

        <section className="about-content">
          <div className="about-profile glass-panel">
            <div className="profile-image-container">
              <img src={atulImg} alt="Atul Rao" className="profile-image" />
            </div>
            <div className="profile-details">
              <h2>Who am I?</h2>
              <p>
                I’m Atul Rao, a Full Stack Developer specializing in the MERN stack, focused on building scalable, high-performance web applications.
                I bridge frontend and backend seamlessly to deliver clean, efficient, and user-centric solutions.
                With a strong problem-solving mindset and commitment to modern development practices, I continuously strive to create impactful digital experiences.
              </p>
              <div className="resume-section">
                <a href="/resume.pdf" download className="btn download-btn">
                  Download Resume
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2 className="section-heading text-center">My <span className="text-accent">Education</span></h2>
            <div className="timeline">

              <div className="timeline-item glass-panel">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Bachelor of Computer Application (BCA)</h3>
                  <h4 className="text-accent">University of Rajasthan, Jaipur</h4>
                  <span className="timeline-date">2023 - 2026</span>
                  <p>Pursuing Bachelor of Computer Applications (BCA), with a strong foundation in core computer science subjects. Developed multiple full-stack applications using the MERN stack, focusing on scalable design and software engineering best practices.</p>                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>High School</h3>
                  <h4 className="text-accent">M.D Sr Sec School, Chirawa</h4>
                  <span className="timeline-date">2021 - 2023</span>
                  <p>Completed higher secondary education in Physics, Chemistry, and Mathematics (PCM), building a solid analytical foundation. Participated in competitions, enhancing problem-solving and logical reasoning skills.</p>                </div>
              </div>

            </div>
          </div>

          <div className="tech-stack-section">
            <h2 className="section-heading text-center">My <span className="text-accent">Tech Stack</span></h2>
            
            <div className="tech-category">
              <h3>Languages & Core Technologies</h3>
              <div className="tech-grid">
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /><span>Java</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /><span>HTML5</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /><span>CSS3</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><span>React</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span>Node.js</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="invert-icon" /><span>Express</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span>MongoDB</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /><span>MySQL</span></div>
              </div>
            </div>

            <div className="tech-category">
              <h3>Frameworks & Libraries</h3>
              <div className="tech-grid">
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /><span>Bootstrap</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /><span>Tailwind CSS</span></div>
              </div>
            </div>

            <div className="tech-category">
              <h3>Developer Tools</h3>
              <div className="tech-grid">
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="invert-icon" /><span>GitHub</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/render.svg" alt="Render" className="invert-icon" /><span>Render</span></div>
                <div className="tech-item glass-panel"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify" /><span>Netlify</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
