import './Home.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import HomeCard from './HomeCard/HomeCard';

function About() {
  return (
    <div className="About">
        <Container fluid>
          <Row className="header_row">
            <div className="header">Welcome to BCA Flash 2024!</div>
            <br/>
            <button className="registerBtn" href="https://tinyurl.com/registerbcaflash">Register Now</button>
          </Row>

          {/* <Col className="gradientBg">
                <div className="answer">BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. 
                </div>
          </Col> */}

          {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, textAlign: "center" }}>
            <p>What is BCA Flash?</p>
            <p>When & where is BCA Flash?</p>
            <p>How can I sign up?</p>
          </div> */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 1, textAlign: "center" }}>

            <HomeCard question="What is BCA Flash?" answer="BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. "></HomeCard>

            <HomeCard question="What is BCA Flash" answer="BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. "></HomeCard>

            <HomeCard question="What is BCA Flash?" answer="BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. "></HomeCard>

            {/* <div className="gradientBg1" id="answer">
                BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion.
              <button className="registerBtn">Explore our Classes!</button>
            </div>
            <div className="gradientBg2" id="answer">
            Where: 200 Hackensack Ave, Hackensack, NJ 07601 <br></br>
            When: Saturday, April 13th 2024 <br></br>
            <i>Please drop off your child earlier to optimize travel time and avoid traffic.</i>
            </div>
            <div className="gradientBg3" id="answer">
              More information coming soon.
            </div> */}


          </div>

          {/* <Row className="gradientBg">
                <div className="answer">BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. 
                </div>
          </Row> */}

          {/* <Row className="text_and_image" id="row1">
            <Col className="text_col">
              <Row className="gradientBg">
                <div className="question"> What is BCA Flash? </div>
                <div className="answer">BCA Flash is a student-led organization hosting an educational event open to all middle school students in Bergen County. It is an amazing opportunity for kids to gain exposure to the unique learning experience exclusively at Bergen County Academies from current students themselves.
                Each class is led by a BCA student, who is eager to share their knowledge and passion. 
                </div>
              </Row>
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
            <div className="gradientBg">
              <div className="question"> Where and When is BCA Flash?</div>
              <div className="answer" id="answ2">Where: 200 Hackensack Ave, Hackensack, NJ 07601 <br/>
              When: TBD <br/>
              <i>Please drop off your child earlier to optimize travel time and avoid traffic.</i>
             </div>
            </div>
            </Col>
          </Row>
          <Row className="text_and_image">
            <Col className="text_col">
            <div className="gradientBg">
              <div className="question"> How can I sign up? </div>
              <div className="answer" id="answ3">More information coming soon.
              </div>
            </div>
            </Col>
            <Col className="image_col" id="col3"> 
              <div className="grid">
                  <Image src="../bcaflash5.png" className="rounded-5 fl1" width="75%"/>
                  <Image src="../bcaflash6.png" className="rounded-5 fl2" width="75%"/>
              </div>
            </Col>
          </Row> */}
          {/* <Row className="sponsors-row">
            <Row className="sponsors">Thank You to Our Sponsors!</Row>
            <Image src="../Sponsors.png" className="sponsors-img"/>
        </Row>*/}
        </Container>
    </div>
  );
}

export default About;
