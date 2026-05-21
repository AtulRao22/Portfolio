import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LabSection from '../components/LabSection';
import './LabPage.css';

const LabPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <main className="lab-page">
      <LabSection />
    </main>
  );
};

export default LabPage;
