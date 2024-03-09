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
                <ClassCard className="Code a Game!" img ="../codeagame.png" desc="Students will code their own choose-your-own adventure game while learn how to use HTML and CSS. This class will teach students
                about both the functionality and the design aspects of website development and will offer students a hands-on opportunity to learn more about coding."></ClassCard>
                <ClassCard className="Python Programming" img ="../python.png" desc="Students will learn the basics of python programming
                by coding a game of Rock, Paper, Scissors.
                based on their skill level. These games will have the students break up into seperate groups to create different games."></ClassCard>
                <ClassCard className="Machine Learning Basics" img ="../machinelearning.png" desc="Students will learn about three different types of machine learning, then
                implement what they learn to create an AI model. Students will learn how to create a K-Nearest Neighbor model, as well as learning how to upload a dataset."></ClassCard>
              </Row>

              <Row className="classRow">
                <h1>Science</h1>
                <ClassCard className="Physics" img ="../physics.png" desc="Students will understand physics through different experiments that cover a wide range of fundamental topics, from general motion to resisting forces (focus on mechanics). By the end of the class, students will have an appreciation for why physics is so important to our everyday lives."></ClassCard>
                <ClassCard className="Lab Fundamentals" img ="../labfundamentals.png" desc="Students learn about density and polarity apply this knowledge to the real-world. Students will conduct a science experiment involving a take-home lava lamp creation. Students will learn the scientific method and make hypotheses and make observations along the way."></ClassCard>
                <ClassCard className="Chemistry Basics" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Astronomy and Space Exploration" desc="rainbowing a bottle"></ClassCard>
              </Row>

              <Row className="classRow">
                <h1>Business</h1>
                <ClassCard className="Marketing" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Business Ethics" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Coding in Finance" desc="rainbowing a bottle"></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Medical</h1>
                <ClassCard className="Orthopedics" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Neurology" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Medical Debate Class" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Life Threatening Situations" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Genetics" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Anatomy of the Human Brain" desc="rainbowing a bottle"></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Art/Theater</h1>
                <ClassCard className="Intro to Character Design" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Dance/Theater Basics" desc="rainbowing a bottle"></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Math/Engineering</h1>
                <ClassCard className="Topology, Map Coloring and the 4 Color Theorem" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="Arduino, Breadboarding, and Soldering" desc="rainbowing a bottle"></ClassCard>
                <ClassCard className="CAD, Fusion 360, Modeling, and Product Design" desc="rainbowing a bottle"></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Culinary</h1>
                <ClassCard className="Culinary Basics" desc="NA"></ClassCard>
                <ClassCard className="Cupcake Decorating" desc="NA"></ClassCard>
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
