import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Tools />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
