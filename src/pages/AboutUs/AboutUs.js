import "./AboutUs.css"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row, Image} from 'react-bootstrap';

function AboutUs() {
    return (
      <div className="AboutUs">
        <Container fluid>
        <Row className="header_row">
            <div className="header">Board Of Directors</div>
        </Row>

        <Row className="image_and_text">
            <Row className="headshots">
                <Image src="../aitakubo.png" className="rounded-5 headshot"/>
                <Image src="../lea.png" className="rounded-5 headshot"/>
                <Image src="../alexisoh.png" className="rounded-5 headshot"/>
            </Row>
            <Row className="titles">
                <div className="caption"><b>Ai Takubo</b><br/><i>Co-Director of BCA Flash</i></div>
                <div className="caption"><b>Lea Smolyanskiy</b><br/><i>Co-Director of BCA Flash</i></div>
                <div className="caption"><b>Alexis Oh</b><br/><i>Director of Classes</i></div>
            </Row>
        </Row>
        <Row className="image_and_text top-pad">
            <Row className="headshots">
                <Image src="../elainenam.png" className="rounded-5 headshot"/>
                <Image src="../ellaerlich.png" className="rounded-5 headshot"/>
                <Image src="../emmalau.png" className="rounded-5 headshot"/>
            </Row>
            <Row className="titles">
                <div className="caption"><b>Elaine Nam</b><br/><i>Director of Classes</i></div>
                <div className="caption"><b>Ella Ehrlich</b><br/><i>Director of Classes</i></div>
                <div className="caption"><b>AEmma Lau</b><br/><i>Director of Volunteers</i></div>
            </Row>
        </Row>
        <Row className="image_and_text top-pad">
            <Row className="headshots">
                <Image src="../genevive.png" className="rounded-5 headshot"/>
            </Row>
            <Row className="titles bottom-pad">
                <div className="caption"><b>Genevieve Simmons</b><br/><i>Director of Public Relations</i></div>
            </Row>
        </Row>
        </Container>
      </div>
    );
  }
  
export default AboutUs;
  