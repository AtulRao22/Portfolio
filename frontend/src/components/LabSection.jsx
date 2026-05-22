import React from 'react';
import './LabSection.css';

const LabSection = () => {
  const experiences = [
    {
      title: 'Shiv Shakti Suits - E-commerce Website',
      image: '/projects/shiv-shakti-suits.png',
      desc: 'A full-stack e-commerce website for buying suits, featuring product listings, filtering, user authentication, and secure checkout with a focus on performance and usability.',
      link: 'https://github.com/AtulRao22/Shiv-Shakti-Suits'
    },
    {
      title: 'HomyGo - Property Listing Platform',
      image: '/projects/homygo.png',
      desc: 'A full-stack property listing platform with user authentication, CRUD operations, and dynamic property management built using Node.js, Express, and MongoDB.',
      link: 'https://github.com/AtulRao22/HomyGo'
    },
    {
      title: 'Atul Rao - Portfolio Website',
      image: '/projects/portfolio.png',
      desc: 'A modern personal portfolio website built to showcase my projects, technical skills, and development journey. Designed to provide recruiters  with an interactive and professional experience.',
      link: 'https://github.com/AtulRao22/Portfolio'
    },
    {
      title: 'BrainTiles - Simon Game',
      image: '/projects/braintiles.png',
      desc: 'A browser-based memory game built with HTML, CSS, and JavaScript, featuring increasing color sequences',
      link: 'https://github.com/AtulRao22/BrainTiles'
    },
    {
      title: 'TaskFlow - Task Management Website',
      image: '/projects/taskflow.png',
      desc: 'Built a responsive task management web app using React that allows users to create, edit, delete, and manage daily tasks efficiently. Focused on clean UI, responsive design, and seamless task organization.',
      link: 'https://github.com/AtulRao22/TaskFlow'
    }
  ];

  const featuredProjects = [
    {
      title: 'Shiv Shakti Suits - MERN E-commerce Website',
      image: '/projects/shiv-shakti-suits.png',
      imageAlt: 'Shiv Shakti Suits e-commerce platform preview',
      liveUrl: 'https://www.shivshaktisuits.shop/',
      desc: 'Shiv Shakti Suits is a full-stack e-commerce application developed to handle the complete shopping lifecycle for fashion retail. Powered by Node.js, Express, and MongoDB, this platform seamlessly integrates server-side EJS rendering with a robust REST API backend. It features secure user authentication via sessions, dynamic complex product variants handling (size, stock, attributes), integrated Razorpay checkout for seamless payments, and a private admin dashboard to handle inventory and orders.',
    },
    {
      title: 'HomyGo - Property Listing Platform',
      image: '/projects/homygo.png',
      imageAlt: 'HomyGo property listing platform preview',
      liveUrl: 'https://wanderlust-ynlv.onrender.com',
      desc: 'HomyGo is a full-stack property listing application designed to manage the complete rental lifecycle. Built using Node.js, Express, and MongoDB, the platform enables users to explore, add, and manage property listings with ease. It features secure user authentication, dynamic property management with CRUD operations, and efficient database handling for real-time data updates.',
    },
  ];

  return (
    <section id="lab" className="lab-section">
      <div id="project-experience" className="work-experience">
        <h2 className="section-title text-center">Project Experience</h2>
        <div className="cards-grid">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-card glass-panel"
            >
              <div className="card-thumbnail">
                <img src={exp.image} alt="" className="card-thumbnail-img" />
              </div>
              <div className="card-header">
                <h3 className="card-title">{exp.title}</h3>
              </div>
              <p className="card-desc">{exp.desc}</p>
              <span className="learn-more">VIEW ON GITHUB →</span>
            </a>
          ))}
        </div>
      </div>

      {featuredProjects.map((project) => (
        <div key={project.title} className="featured-project">
          <div className="project-info">
            <span className="text-accent project-label">Featured Project</span>
            <h2 className="project-title">{project.title}</h2>
            <div className="project-desc glass-panel">
              <p>{project.desc}</p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link btn btn-secondary"
            >
              Visit Live Site →
            </a>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-image-container glass-panel"
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-preview-img"
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default LabSection;
