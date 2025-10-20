import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import CaseStudies from './components/CaseStudies';
import Impact from './components/Impact';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero scrollY={scrollY} />
        <About />
        <Expertise />
        <CaseStudies />
        <Impact />
        <Contact />
      </main>
    </div>
  );
}

export default App;
