import './Home.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import HomeCard from './HomeCard/HomeCard';
import HomeCardModified from './HomeCard/HomeCardModified';
import HomeCardFinal from './HomeCard/HomeCardFinal';
import Fade from 'react-reveal/Fade';


function About() {
  return (
    <div className="About">
        <Container fluid>
          <Row className="header_row">
            <div className="header">Welcome to BCA Flash 2024!</div>
          </Row>
          
          <Fade top distance="6%">
            <Container>
              <Row>
                <Col>
                  <HomeCard question="What is BCA Flash?" answer="BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                  Each class is led by a BCA student, who is eager to share their knowledge and passion." btn="Explore Our Classes" link="/classes"></HomeCard>
                </Col>

                <Col>
                <HomeCardModified question="When and where is BCA Flash?" answer="BCA Flash is hosted at  the Bergen County Academies in Hackensack, NJ. The event takes place on Sunday, April 14th, 2024 from 11am to 4pm."
                btn="View Schedule" link="/schedule" btn2 = "BCA Google Map View" link2="https://www.google.com/maps/dir//200+Hackensack+Ave,+Hackensack,+NJ+07601/@40.9023266,-74.1168286,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2fa74ecafb78d:0x56dae96ee3b758b!2m2!1d-74.0344278!2d40.9023559?entry=ttu"></HomeCardModified>
                </Col>

                <Col>
                  <HomeCardFinal question="How can I sign up?" answer="Registration for BCA Flash 2024 has closed; thank you for your interest!" image="../logo.png"></HomeCardFinal>
                </Col>

              </Row>
            </Container>
          </Fade>

        </Container>
    </div>
  );
}

export default About;
