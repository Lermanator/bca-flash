import './Landing.css';
import { React  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect"; 

import { Container, Row } from 'react-bootstrap';


function Landing() {
  return (
    <div className="Landing">
        <Container fluid className="titleContainer">
         <Row className="title">
            <Typewriter
                onInit={(typewriter) => { 
                  typewriter

                  .typeString("BCA Flash 2023")
                  .start();
                }}
            />
            </Row>
        </Container>
    </div>
  );
}

export default Landing;
