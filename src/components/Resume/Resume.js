import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">RESUME</h2>
            <p className="lead mb-4">Download my resume to learn more about my experience, education, and skills.</p>
            <Button
              variant="primary"
              size="lg"
              href="/Hassan Ali - resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
