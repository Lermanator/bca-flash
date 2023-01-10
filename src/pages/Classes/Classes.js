import './Classes.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCard from './ClassCard/ClassCard'
import Typewriter from "typewriter-effect"; 

import { Container, Row, Col} from 'react-bootstrap';

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
                {/* <div id="topText">Discover the classes BCA Flash has to offer!</div> */}
            </Row>
            <Row className = "cardRow">
                <ClassCard name="Cooking"/>
            </Row>
        </Container>
    </div>
  );
}

export default Classes;
