import './Classes.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCard from './ClassCard/ClassCard'

import { Container, Row, Col} from 'react-bootstrap';

function Classes() {
  return (
    <div className="Classes">
        <Container fluid className="">
            <Row className="classRow">
                <div id="topText">Discover the classes BCA Flash has to offer!</div>
            </Row>
            <Row>
                <ClassCard name="Cooking"/>
            </Row>
        </Container>
    </div>
  );
}

export default Classes;
