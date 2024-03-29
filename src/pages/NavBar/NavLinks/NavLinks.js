import './NavLinks.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function NavLinks() {
  return (
        <Nav className="me-auto">
            {/* <img 
                    src="../logored.png"
                    id="logo"
                /> */}
            <Nav.Link href="/" className="nav-links">Home</Nav.Link>
            <Nav.Link href="/sponsors" className="nav-links">Sponsors</Nav.Link>
            <Nav.Link href="/classes" className="nav-links">Classes</Nav.Link>
            <Nav.Link href="/aboutus" className="nav-links">About Us</Nav.Link>
            <Nav.Link href="/schedule" className="nav-links">Schedule</Nav.Link>
            <Nav.Link href="https://forms.gle/F9JT15c29SrDfRuTA" target="_blank" className="nav-links">Register</Nav.Link>
        </Nav>
    );
}

export default NavLinks;


{/* <Link to={props.link}> */}