import './Schedule.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Image, Row} from 'react-bootstrap';

function Schedule() {
  return (
        <Fade top distance="6%">
          <Container fluid className="scheduleContainer">
            <img className="scheduleImg" src="../schedule.png"></img>
          </Container>
        </Fade>
  );
}

export default Schedule;