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
                text=""
                />
            </Row>
        </Container>
    </div>
  );
}

export default Classes;
