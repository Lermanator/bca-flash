import './Home.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function About() {
  return (
    <div className="About">
        <Container fluid>
          <Row className="header_row">
            <div className="header">Welcome to BCA Flash 2023</div>
            <br/>
            <Button className="registerButton" href="https://tinyurl.com/registerbcaflash">Register Now</Button>
          </Row>
          <Row className="text_and_image" id="row1">
            <Col className="text_col">
              <div className="question"> What is BCA Flash? </div>
              <div className="answer">BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
	            Each class is led by a BCA student, who is eager to share their knowledge and passion. 
              </div>
            </Col>
            <Col className="image_col" id="col1">
              <div className="grid">
                  <Image src="../bcaflash1.png" className="rounded-5 fl1" width="75%"/>
                  <Image src="../bcaflash2.png" className="rounded-5 fl2" width="75%"/>
              </div>
            </Col>
          </Row>
          <Row className="text_and_image">
            <Col className="image_col" id="col2"> 
              <div className="grid">
                  <Image src="../bcaflash3.png" className="rounded-5 fl3" width="75%"/>
                  <Image src="../bcaflash4.png" className="rounded-5 fl4" width="75%"/>
              </div>
            </Col>
            <Col className="text_col">
              <div className="question"> When and Where is BCA Flash?</div>
              <div className="answer" id="answ2">Where: 200 Hackensack Ave, Hackensack, NJ 07601 <br/>
              When: Saturday, March 25th, 2023 (9AM - 4PM) <br/>
              <i>Please drop off your child earlier to optimize travel time and avoid traffic.</i>
             </div>
            </Col>
          </Row>
          <Row className="text_and_image">
            <Col className="text_col">
              <div className="question"> How can I sign up? </div>
              <div className="answer" id="answ3">Form sign-ups as well as admission fee waiver forms can be found on the website:<br/> <a href="https://tinyurl.com/registerbcaflash"> https://tinyurl.com/registerbcaflash</a> <br/>
              Deadline for sign-ups will most likely be March 11, 2023 at 11:59 PM
              </div>
            </Col>
            <Col className="image_col" id="col3"> 
              <div className="grid">
                  <Image src="../bcaflash5.png" className="rounded-5 fl1" width="75%"/>
                  <Image src="../bcaflash6.png" className="rounded-5 fl2" width="75%"/>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
