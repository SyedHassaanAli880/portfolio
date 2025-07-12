import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';

// IMPORTANT: To make this work, you must:
// 1. Go to https://www.emailjs.com/ and create a free account.
// 2. Create an email service (e.g., Gmail) and a template with fields: name, email, message.
// 3. Get your Service ID, Template ID, and Public Key (user ID).
// 4. Replace the placeholders below with your actual EmailJS credentials.
// 5. Optionally, install emailjs-com: npm install emailjs-com

const SERVICE_ID = 'service_yjp5ld8'; // <-- Your EmailJS service ID
const TEMPLATE_ID = 'template_p3llfar'; // <-- Your EmailJS template ID
const USER_ID = 'UatyK01a3qyIyMEJu'; // <-- Your EmailJS public key

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = 'Email is invalid.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSuccess('');
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setErrorMsg('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'syedhassanali880@gmail.com', // recipient
        },
        USER_ID
      );
      setSuccess('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-5 text-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4 text-center">CONTACT</h2>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              <div className="text-center mb-3">
                <Button variant="primary" type="submit" disabled={sending}>
                  {sending ? <Spinner animation="border" size="sm" /> : 'Send Message'}
                </Button>
              </div>
              {success && <Alert variant="success" className="text-center">{success}</Alert>}
              {errorMsg && <Alert variant="danger" className="text-center">{errorMsg}</Alert>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 