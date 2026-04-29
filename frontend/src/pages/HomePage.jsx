import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import LabSection from '../components/LabSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LabSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
