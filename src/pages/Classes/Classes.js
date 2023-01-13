import './Classes.css';
import ClassCard from './ClassCard/ClassCard'

import Typewriter from "typewriter-effect"; 

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row } from 'react-bootstrap';



function Classes() {
  return (
    <div className="Classes">
        <Container fluid className="classesContainer">
            <Row className="classRow">
              <Typewriter
                onInit={(typewriter) => { 
                  typewriter

                  .typeString("Explore Our Classes")
                  .start();
                }}
              />
            </Row>
            <Row className = "cardRow">
                <ClassCard name="Rainbow in a bottle" 
                img="RainbowInABottle"
                text="Introduction into chemistry with a fun hands-on experiment"
                desc="Rainbow in a Bottle will teach students about density and its importance in our daily lives. In addition to this, students will perform a hands-on experiment to witness density in action first-hand that they'll then be able to take home."
                teachers="Kinjal Gupta, Christine Koushagjian, Josephine Serrano, Hailey Chin, Varshaa Venkitesh"
                />
            </Row>
        </Container>
    </div>
  );
}

export default Classes;
