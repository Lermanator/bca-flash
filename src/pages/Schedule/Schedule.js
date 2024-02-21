import './Schedule.css';
// import '..\Classes\Classes.css';
import React from 'react';
import Typewriter from "typewriter-effect"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Image, Row} from 'react-bootstrap';

function Schedule() {
  return (
    <div className="Classes">
        <Container fluid className="classesContainer">
            <Row className="classRowHeader">
              <Typewriter
                onInit={(typewriter) => { 
                  typewriter

                  .typeString("Schedule coming soon!")
                  .start();
                }}
              />
            </Row>
        </Container>
    </div>
    // <Container fluid className="scheduleContainer">
    //     <Image src="../flashSchedule.png" className="scheduleImage"/>
    // </Container>
  );
}

export default Schedule;