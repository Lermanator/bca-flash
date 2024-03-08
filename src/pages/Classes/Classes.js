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
                {/* cut down on some of the descriptions */}
                <ClassCard className="Code a Game!" desc="Students will code their own choose-your-own adventure game while learn how to use HTML and CSS. This class will teach students
                about both the functionality and the design aspects of website development and will offer students a hands-on opportunity to learn more about coding."></ClassCard>
                <ClassCard className="Python Programming" desc="Students will learn the basics of python programming
                by codng a game of Rock, Paper, Scissors. After making this game, they will also learn to code another game
                based on their skill level. These games will have the students break up into seperate groups to create different games."></ClassCard>
                <ClassCard className="Machine Learning Basic" desc="Students will learn about three different types of machine learning, then
                implement what they learn to create an AI model. Students will learn how to create a K-Nearest Neighbor model, as well as learning how to upload a dataset."></ClassCard>
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
