import './Schedule.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Image} from 'react-bootstrap';

function Schedule() {
  return (
    <Container fluid className="scheduleContainer">
        <Image src="../flashSchedule.png" className="scheduleImage"/>
    </Container>
  );
}

export default Schedule;