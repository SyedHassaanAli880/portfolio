import React, { useEffect } from 'react';
import './App.css';
import CustomNavbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
