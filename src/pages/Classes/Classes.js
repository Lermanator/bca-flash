import './Classes.css';
import ClassCard from './ClassCard/ClassCard'

import Typewriter from "typewriter-effect"; 

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';




function Classes() {
  return (
    <div className="Classes">
        <Container fluid className="classesContainer">
          
            <Row className="header_row">
                <h1 className="header">Explore Our Classes</h1>
            </Row>

            <Fade top distance="6%">

              <Row className="classRow">
                <h1>Computer Science</h1>
                <ClassCard className="Code a Game!" desc="coding a game fr"></ClassCard>
              </Row>

              <Row className="classRow">
                <h1>Science</h1>
                <ClassCard className="Rainbow in a Bottle" desc="rainbowing a bottle"></ClassCard>
              </Row>

            </Fade>

            <SpaceRow />


        </Container>
    </div>
  );
}

function SpaceRow() {
  return (<button id="spaceBtn"></button>)
}

export default Classes;
