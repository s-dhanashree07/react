
import 'bootstrap/dist/css/bootstrap.min.css';

// src/components/VerticalNavbar.js
import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';

function VerticalNavbar() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="bg-light p-3" style={{ minHeight: '100vh' }}>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col xs={10} className="p-4">
          <h1>Main Content Area</h1>
          {/* Your other content */}
        </Col>
      </Row>
    </Container>
  );
}

export default VerticalNavbar;
