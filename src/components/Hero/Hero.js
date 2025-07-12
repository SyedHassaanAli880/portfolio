import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioPicture from '../Home/PortfolioPicture.jpg';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center min-vh-100 bg-section text-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-3 fw-bold mb-3">Syed Hassaan Ali</h1>
            <h2 className="mb-3" style={{ color: 'var(--accent)' }}>Full Stack Developer</h2>
            <p className="lead mb-4">I build modern web applications with modern cutting-edge technologies.</p>
            <div className="mt-4">
              <a href="#" className="me-3 text-light"><i className="fab fa-github fa-2x"></i></a>
              <a href="#" className="me-3 text-light"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-light"><i className="fab fa-twitter fa-2x"></i></a>
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