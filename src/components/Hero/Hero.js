import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioPicture from '../Home/PortfolioPicture.jpg';

// Custom hook for typing effect with auto-repeat
const useTypingEffect = (text, speed = 100, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Pause before starting over
        const pauseTimeout = setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, pauseTime);
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [currentIndex, text, speed, pauseTime, isTyping]);

  return displayText;
};

const Hero = () => {
  const typedName = useTypingEffect('Syed Hassaan Ali', 150, 2000);

  return (
    <section id="home" className="d-flex align-items-center justify-content-center min-vh-100 bg-section text-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-3 fw-bold mb-3">
              {typedName}
              <span className="typing-cursor">|</span>
            </h1>
            <h2 className="mb-3" style={{ color: 'var(--accent)' }}>Full Stack Developer</h2>
            <p className="lead mb-4">I build modern web applications with modern cutting-edge technologies.</p>
            <div className="mt-4">
              <a href="#" className="me-3 text-light"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="me-3 text-light"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="me-3 text-light"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="https://www.upwork.com/freelancers/~01ce67a365fb2f9e53" target="_blank" rel="noopener noreferrer" className="me-3 text-light"><i className="fas fa-briefcase fa-2x"></i></a>
              <a href="https://www.fiverr.com/syed_hassaanali/develop-and-fix-full-stack-react-and-dot-net-websites-for-you" target="_blank" rel="noopener noreferrer" className="text-light"><i className="fas fa-code fa-2x"></i></a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <Image src={PortfolioPicture} fluid alt="Profile" style={{ maxWidth: '650px', height: '540px', objectFit: 'cover', borderRadius: '2rem', border: '4px solid #fff', boxShadow: '0 4px 32px 0 rgba(255,255,255,0.10)' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 