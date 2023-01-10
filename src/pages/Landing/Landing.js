import './Landing.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect"; 

import { Container, Row, Col, Image } from 'react-bootstrap';


function Landing() {
  return (
    <div className="Landing">
        <Container fluid>
            <div className="title">
            <Typewriter
                onInit={(typewriter) => { 
                  typewriter

                  .typeString("BCA Flash 2023")
                  .start();
                }}
            />
            </div>
        </Container>
    </div>
  );
}

export default Landing;
