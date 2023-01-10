import './NavBar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar-color justify-content-center" expand="lg" variant="dark">
        <Navbar.Brand>
                <img 
                    src="../logored.png"
                    width="200"
                    height="80"
                    id="logo"
                />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Container className="linksContainer">
              <Nav.Link href="/" className="nav-links">Home</Nav.Link>
              <Nav.Link href="/about" className="nav-links">About</Nav.Link>
              <Nav.Link href="/classes" className="nav-links">Classes</Nav.Link>
            </Container>
            </Nav>
          </Navbar.Collapse>
        
    </Navbar>

  );
}

export default NavBar;
