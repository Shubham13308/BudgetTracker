import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>We are dedicated to helping you manage your budget efficiently.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
