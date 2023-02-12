import './NavBar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar-color" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <img 
                    src="../logored.png"
                    id="logo"
                />
              <Nav.Link href="/" className="nav-links">Home</Nav.Link>
              <Nav.Link href="/classes" className="nav-links">Classes</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-links">About Us</Nav.Link>
              <Nav.Link href="https://tinyurl.com/registerbcaflash" className="nav-links">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
    </Navbar>

  );
}

export default NavBar;
