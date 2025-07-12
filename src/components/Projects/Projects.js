import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Carousel } from 'react-bootstrap';
import GP from './GP.png';
import maxipureImage from '../../assets/maxipure/1.png';
import maxipureImage2 from '../../assets/maxipure/2.png';
import maxipureImage3 from '../../assets/maxipure/3.png';
import globalPostImage1 from '../../assets/global post/4.png';
import globalPostImage2 from '../../assets/global post/5.png';
import globalPostImage3 from '../../assets/global post/6.png';
import globalPostSSPImage1 from '../../assets/global post ssp/image (1).png';
import globalPostSSPImage2 from '../../assets/global post ssp/image (2).png';
import globalPostSSPImage3 from '../../assets/global post ssp/image (3).png';
import './Projects.css';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Simple fix for ResizeObserver error
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0] && typeof args[0] === 'string' && args[0].includes('ResizeObserver')) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  const projectData = [
    {
      id: 1,
      title: 'Global Post',
      description: "GlobalPost offers a range of domestic and international shipping solutions that simplifies parcel shipping while saving you money. By combining our easy-to-use technology and seamless integrations with the world's top shipping platforms, we help e-commerce and warehouse sellers succeed domestically and around the world. Global Post is built using .NET 8 microservices architecture, React.js, MS SQL Server and REST APIs. Global Post is not an open-source software.",
      imageUrl: GP,
      repoUrl: null,
      liveUrl: 'https://www.goglobalpost.com/',
      technologies: ['.NET 8', 'React.js', 'SQL Server', 'REST APIs', 'Microservices'],
      gallery: [
        { type: 'image', src: globalPostImage1, alt: 'Global Post Screenshot 1' },
        { type: 'image', src: globalPostImage2, alt: 'Global Post Screenshot 2' },
        { type: 'image', src: globalPostImage3, alt: 'Global Post Screenshot 3' }
      ]
    },
    {
      id: 2,
      title: 'MaxiPure',
      description: 'A modern landing page for a water filter and RO products shop. Built with React.js, this responsive website showcases water purification products with an elegant design and smooth user experience. The site features product displays, contact information, and a professional layout optimized for customer engagement.',
      imageUrl: maxipureImage,
      repoUrl: null,
      liveUrl: 'https://maxipure.netlify.app/',
      technologies: ['React.js', 'CSS3', 'Netlify', 'Responsive Design', 'Landing Page'],
      gallery: [
        { type: 'image', src: maxipureImage, alt: 'MaxiPure Screenshot 1' },
        { type: 'image', src: maxipureImage2, alt: 'MaxiPure Screenshot 2' },
        { type: 'image', src: maxipureImage3, alt: 'MaxiPure Screenshot 3' }
      ]
    }
    // {
    //   id: 3,
    //   title: 'Global Post Self Service Portal',
    //   description: 'A comprehensive self-service portal for Global Post users to manage their shipments, track orders, view history, and handle account details. Built with modern web technologies to provide a seamless user experience.',
    //   imageUrl: globalPostSSPImage1,
    //   repoUrl: null,
    //   liveUrl: null,
    //   technologies: ['.NET', 'React.js', 'SQL Server', 'Web API'],
    //   gallery: [
    //     { type: 'image', src: globalPostSSPImage1, alt: 'Global Post SSP Screenshot 1' },
    //     { type: 'image', src: globalPostSSPImage2, alt: 'Global Post SSP Screenshot 2' },
    //     { type: 'image', src: globalPostSSPImage3, alt: 'Global Post SSP Screenshot 3' }
    //   ]
    // }
  ];

  const handleQuickView = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-5 text-light">
        <Container>
          <h2 className="mb-5 text-center fw-bold">PROJECTS</h2>
          <Row className="g-4 justify-content-center">
            {projectData.map((project) => (
              <Col key={project.id} xs={12} sm={6} md={6} lg={4}>
                <Card className="h-100 shadow-lg border-0 bg-dark text-light project-card">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={project.imageUrl} 
                      alt={project.title} 
                      style={{ height: '200px', objectFit: 'cover' }} 
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <Badge bg="primary" className="fw-bold">Featured</Badge>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                    <Card.Text style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {project.description}
                    </Card.Text>
                    {/* Technology Tags */}
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          bg="secondary" 
                          className="me-1 mb-1 fw-normal"
                          style={{ fontSize: '0.75rem' }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="mt-auto d-flex flex-column gap-2">
                      <Button 
                        variant="outline-info" 
                        onClick={() => handleQuickView(project)}
                        className="fw-bold"
                        size="sm"
                      >
                        <i className="fas fa-eye me-2"></i>Quick View
                      </Button>
                      <div className="d-flex gap-2">
                        {project.repoUrl && (
                          <Button 
                            variant="outline-primary" 
                            href={project.repoUrl} 
                            target="_blank" 
                            className="flex-fill fw-bold"
                            size="sm"
                          >
                            <i className="fab fa-github me-2"></i>GitHub
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button 
                            variant="primary" 
                            href={project.liveUrl} 
                            target="_blank" 
                            className="flex-fill fw-bold"
                            size="sm"
                          >
                            <i className="fas fa-external-link-alt me-2"></i>Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quick View Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="xl" 
        centered
        className="project-modal"
        dialogClassName="modal-xxl"
      >
        <Modal.Header closeButton className="bg-dark text-light border-0">
          <Modal.Title className="fw-bold">
            {selectedProject?.title} - Project Gallery
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light p-0">
          {selectedProject && (
            <Carousel 
              interval={null} 
              indicators={true}
              controls={true}
              className="project-carousel"
            >
              {selectedProject.gallery.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === 'image' ? (
                    <img
                      className="d-block w-100"
                      src={item.src}
                      alt={item.alt}
                      style={{ height: '700px', objectFit: 'contain' }}
                    />
                  ) : (
                    <video
                      className="d-block w-100"
                      controls
                      style={{ height: '700px', objectFit: 'contain' }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light border-0">
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {selectedProject?.liveUrl && (
            <Button variant="primary" href={selectedProject.liveUrl} target="_blank">
              <i className="fas fa-external-link-alt me-2"></i>Visit Live Site
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Projects;
