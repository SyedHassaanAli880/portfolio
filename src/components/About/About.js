import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 text-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">ABOUT ME</h2>
            <p className="lead">I am a passionate full stack developer with experience in building web applications using modern technologies. I love solving problems and learning new things.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 