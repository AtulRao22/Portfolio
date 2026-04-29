import React from 'react';
import './LabSection.css';

const LabSection = () => {
  const experiences = [
    {
      title: 'Shiv Shakti Suits - E-commerce Website',
      icon: '🛍️',
      desc: 'A full-stack e-commerce website for buying suits, featuring product listings, filtering, user authentication, and secure checkout with a focus on performance and usability.',
      link: 'https://github.com/AtulRao22/Shiv-Shakti-Suits'
    },
    {
      title: 'HomyGo - Property Listing Platform',
      icon: '🏡',
      desc: 'A full-stack property listing platform with user authentication, CRUD operations, and dynamic property management built using Node.js, Express, and MongoDB.',
      link: 'https://github.com/AtulRao22/HomyGo'
    },
    {
      title: 'Atul Rao - Portfolio Website',
      icon: '👨‍💻',
      desc: 'A modern, responsive portfolio website for showcasing my projects, skills, and experience.',
    },
    {
      title: 'BrainTiles - Simon Game',
      icon: '🧠',
      desc: 'A browser-based memory game built with HTML, CSS, and JavaScript, featuring increasing color sequences',
      link: 'https://github.com/AtulRao22/BrainTiles'
    }
  ];

  return (
    <section id="lab" className="lab-section">
      <div className="work-experience">
        <h2 className="section-title text-center">Project Experience</h2>
        <div className="cards-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card glass-panel">
              <div className="card-header">
                <div className="card-icon">{exp.icon}</div>
                <h3 className="card-title">{exp.title}</h3>
              </div>
              <p className="card-desc">{exp.desc}</p>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="learn-more">
                LEARN MORE →
              </a>            </div>
          ))}
        </div>
      </div>

      <div className="featured-project">
        <div className="project-info">
          <span className="text-accent project-label">Featured Project</span>
          <h2 className="project-title">Shiv Shakti Suits -MERN E-commerce Website</h2>
          <div className="project-desc glass-panel">
            <p>
              Shiv Shakti Suits is a full-stack e-commerce application developed to handle the complete shopping lifecycle for fashion retail. Powered by Node.js, Express, and MongoDB, this platform seamlessly integrates server-side EJS rendering with a robust REST API backend. It features secure user authentication via sessions, dynamic complex product variants handling (size, stock, attributes), integrated Razorpay checkout for seamless payments, and a private admin dashboard to handle inventory and orders.            </p>
          </div>
          <a href="https://www.shivshaktisuits.shop/" className="project-link">
            <span className="icon-globe">🌐</span>
          </a>
        </div>
        <div className="project-image-container glass-panel">
          {/* Real image would be an actual glowing robot image, we'll use a placeholder structure */}
          <div className="project-img-placeholder">
            <div className="robot-head">🛍️</div>
            <div className="neon-bg"></div>
            <div className="text-overlay-mock">Elevate Your Style with Premium Suits</div>
          </div>
        </div>
      </div>

      <div className="featured-project">
        <div className="project-info">
          <span className="text-accent project-label">Featured Project</span>
          <h2 className="project-title">HomyGo - Property Listing Platform</h2>
          <div className="project-desc glass-panel">
            <p>
              HomyGo is a full-stack property listing application designed to manage the complete rental lifecycle. Built using Node.js, Express, and MongoDB, the platform enables users to explore, add, and manage property listings with ease. It features secure user authentication, dynamic property management with CRUD operations, and efficient database handling for real-time data updates. The application focuses on delivering a smooth and scalable experience, allowing users to interact with listings seamlessly while maintaining performance and usability.</p>
          </div>
          <a href="https://wanderlust-ynlv.onrender.com" className="project-link">
            <span className="icon-globe">🌐</span>
          </a>
        </div>
        <div className="project-image-container glass-panel">
          {/* Real image would be an actual glowing robot image, we'll use a placeholder structure */}
          <div className="project-img-placeholder">
            <div className="robot-head">🏠</div>
            <div className="neon-bg"></div>
            <div className="text-overlay-mock">Find Your Perfect Place to Call Home</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
