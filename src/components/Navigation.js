import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

const Navigation = () => (
  <Navbar bg="secondary" expand="lg">
    <Navbar.Brand href="home">Aidan Writes Creatively!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="blog">Blog</Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="fiction">Fiction</NavDropdown.Item>
          <NavDropdown.Item href="poetry">Poetry</NavDropdown.Item>
          <NavDropdown.Item href="nonfiction">Non-Fiction</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
