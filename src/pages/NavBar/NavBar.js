import './NavBar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar-color" variant="dark">
        <Navbar.Brand>
                {/* <img 
                    src="../logo.png"
                    width="200"
                    height="100"
                /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;
