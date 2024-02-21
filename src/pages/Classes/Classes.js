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
            <Row className="header_row">
                <h1 className="header">Explore Our Classes</h1>
            </Row>

            <Row className="classRow">
              <h1>Computer Science</h1>
              <ClassCard className="Code a Game!" desc="Loreum iseps"></ClassCard>
            </Row>

            <Row className="classRow">
              <h1>Chemistry</h1>
              <ClassCard className="Rainbow in a Bottle" desc="Loreum iseps"></ClassCard>
            </Row>


        </Container>
    </div>
  );
}

export default Classes;
