import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'; // Import custom CSS file

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      {/* Left side - Logo */}
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src="https://t4.ftcdn.net/jpg/01/11/86/95/360_F_111869553_04OBDskYYU5r0b9PW3cfKfD3fkxlfAzW.jpg" // Replace with your logo URL
          alt="Company Logo"
          style={{ height: '50px' }}
        />
      </Navbar.Brand>

        {/* Right side - Navigation links */}
        <Nav className="ml-auto d-flex flex-row">
          <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link">About</Nav.Link>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          <Nav.Link href="#product" className="nav-link">Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
