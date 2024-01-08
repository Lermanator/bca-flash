import './Footer.css';
import { Container, Row} from 'react-bootstrap';
import React, { Component }  from 'react';

function Footer() {
  return (
      <div className="Footer">
          <footer>
            <Container fluid className="footerContainer">
              <div className="footertext">Ⓒ BCA Flash 2024</div>
              {/* <div className="footertext">Register <a href="https://tinyurl.com/registerbcaflash">Here</a></div> */}
            </Container>
          </footer>
      </div>
  );
  
}

export default Footer;
