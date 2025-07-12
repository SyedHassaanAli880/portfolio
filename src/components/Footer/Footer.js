import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3" style={{ background: 'var(--bg-section)' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-md-start text-center mb-2 mb-md-0">
            <span style={{ color: '#fff' }}>Designed and developed by Syed Hassaan Ali</span>
          </Col>
          <Col xs={12} md={4} className="text-center mb-2 mb-md-0">
            <span style={{ color: '#fff' }}>&copy; 2024</span>
          </Col>
          <Col xs={12} md={4} className="text-md-end text-center">
            <a href="https://github.com/SyedHassaanAli880" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/sayyad-hassaan-ali-0135921a5" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://x.com/hassanali520" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.upwork.com/freelancers/~your-profile" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-upwork fa-lg"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
