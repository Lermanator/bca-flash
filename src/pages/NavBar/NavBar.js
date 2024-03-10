import './NavBar.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

import NavLinks from './NavLinks/NavLinks';

function NavBar() {
  return (
    <Navbar className="navbar-color" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/sponsors" className="nav-link">Sponsors</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/classes" className="nav-link">Classes</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/aboutus" className="nav-link">About Us</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/schedule" className="nav-link">Schedule</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="https://forms.gle/F9JT15c29SrDfRuTA" className="nav-link">Register</Link>
            </Nav.Item>

              {/* <Nav.Link href="/" className="nav-links">Home</Nav.Link>
              <Nav.Link href="/sponsors" className="nav-links">Sponsors</Nav.Link>
              <Nav.Link href="/classes" className="nav-links">Classes</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-links">About Us</Nav.Link>
              <Nav.Link href="/schedule" className="nav-links">Schedule</Nav.Link>
              <Nav.Link href="https://forms.gle/F9JT15c29SrDfRuTA" target="_blank" className="nav-links">Register</Nav.Link> */}
            </Nav>
            {/* <NavLinks></NavLinks> */}
          </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;


{/* <Link to={props.link}> */}