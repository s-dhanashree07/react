import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import custom CSS file

function Footer() {
  return (
    <footer className="footer bg-light text-center py-4 sticky-footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </Col>
          <Col>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
