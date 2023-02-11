import './Home.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect"; 

import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <div className="About">
        <Container fluid>
          <Row className="header_row">
            <div class="header">Welcome to BCA Flash 2023</div>
          </Row>
          <Row className="text_and_image">
            <Col className="text_col">
              <div className="question"> What is BCA FLash? </div>
              <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            </Col>
            <Col className="image_col">
              <div className="grid">
                  <Image src="../bcaflash1.png" className="rounded-5 fl1" width="75%"/>
                  <Image src="../bcaflash2.png" className="rounded-5 fl2" width="75%"/>
              </div>
            </Col>
          </Row>
          <Row className="text_and_image">
            <Col className="image_col"> 
              <div className="grid">
                  <Image src="../bcaflash3.png" className="rounded-5 fl3" width="75%"/>
                  <Image src="../bcaflash4.png" className="rounded-5 fl4" width="75%"/>
              </div>
            </Col>
            <Col className="text_col">
              <div className="question"> When and Where is BCA Flash?</div>
              <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            </Col>
          </Row>
          <Row className="text_and_image">
            <Col className="text_col">
              <div className="question"> How can I sign up? </div>
              <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            </Col>
            <Col className="image_col"> 
              <div className="grid">
                  <Image src="../bcaflash5.png" className="rounded-5 fl1" width="75%"/>
                  <Image src="../bcaflash4.png" className="rounded-5 fl2" width="75%"/>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;