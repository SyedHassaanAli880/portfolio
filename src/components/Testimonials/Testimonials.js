import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kerry Bjam",
      text: "Syed's communication was excellent! He helped me to break the project down by tasks and easily understood milestones. He worked excellently well on the project and I am grateful for his input.",
      role: "Client",
    }
  ];

  return (
    <section id="testimonials" className="py-5 text-light">
      <Container>
        <h2 className="mb-5 text-center">CLIENT TESTIMONIALS</h2>
        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={12} sm={6} md={6} lg={4}>
              <Card className="h-100 shadow-lg border-0 bg-dark text-light transition-all duration-300 ease-in-out rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold mb-3 text-center">{testimonial.name}</Card.Title>
                  <div className="text-center mb-3">
                    <div className="text-lg font-bold text-gray-300 mb-1">5.0/5.0</div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className="fas fa-star text-yellow-400 mr-1"></i>
                      ))}
                    </div>
                  </div>
                  <Card.Text className="flex-grow-1 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
