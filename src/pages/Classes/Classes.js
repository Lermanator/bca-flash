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
                <ClassCard className="Physics" desc="Students will learn a variety of physics topics through different hands-on experiments. NA"></ClassCard>
                <ClassCard className="Lab Fundamentals" desc="Students will learn a variety of chemistry topics and learn the scientific method used for experiments. Students will use what they learn to create their own lava lamp, which they can take home."></ClassCard>
                <ClassCard className="Chemistry Basics" desc="Students will learn about the basics of chemistry through a hands-on experiment. Students will learn about various chemical reactions, then use what they learn to create a mini lemon volcano."></ClassCard>
                <ClassCard img="../astronomy.png" className="Astronomy and Space Exploration" desc="In this class, students will get to plan their own space exploration mission! Students will learn about what goes into planning a space mission, such as designing a spacesuit. Students will also get to create a constellation geoboard and share their love of astronomy with their classmates."></ClassCard>
              </Row>

              <Row className="classRow">
                <h1>Business</h1>
                <ClassCard img="../marketing.webp" className="Marketing" desc="Students will learn how to advertise products and how to adapt advertisements based on different environments. By performing various roleplay scenarios, students will practice their marketing skills in real-world situations."></ClassCard>
                <ClassCard img="../businessethics.avif" className="Business Ethics" desc="Students will learn how to make ethical decisions in business through the use of skits and improvised scenarios."></ClassCard>
                <ClassCard img="../codinginfinance.png" className="Coding in Finance" desc="Students will learn various financial ratios and understand how those are used to evaluate a companies performance. They will also learn how to code in Java and how coding can help solve finance problems."></ClassCard>
              </Row>

              <Row className="classRow">
                <h1>Medical</h1>
                <ClassCard className="Orthopedics" desc="Students will learn about the anatomy of the leg through a hands-on project. Working with clay, students will construct various bones in the leg while learning about their function."></ClassCard>
                <ClassCard img="../neurology.png" className="Neurology" desc="Students will learn about different parts of the brain using modelling. After learning about each part of the brain, students will break off into small groups and use play-doh to model the different parts."></ClassCard>
                <ClassCard img="../medicaldebate.png" className="Medical Debate Class" desc="Students will learn about the current biomedical debates and discuss their own thoughts about the topics. Students will be broken up into groups to take sides on the topic and research more about the science and ethics behind the topic. Students will learn different debate skills while also researching some of the biggest debates in modern medicine."></ClassCard>
                <ClassCard img="../emergency.webp" className="Life Threatening Situations" desc="Students will learn how to handle life-threatening situations and learn to use real EMT/CPR equipment. They will learn about the different skills needed to handle these situations, as well as the ethical concerns about first-aid."></ClassCard>
                <ClassCard img="../genetics.png" className="Genetics" desc="Students will learn about the structure and function of DNA using modelling. Students will create a strand of DNA out of candy, then analyze how things like genetic mutations can alter DNA strands."></ClassCard>
                <ClassCard img="../anatomyofthehumanbrain1.webp" className="Anatomy of the Human Brain" desc="Students will learn about the anatomy of the brain. After listening to a presentation about the brain, the student will complete a worksheet and play a Kahoot to see what they have learned."></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Art/Theater</h1>
                <ClassCard img="../characterdesign.png" className="Intro to Character Design" desc="Students will learn the basic of character design through a series of excerises.
                 They will be assigned a character description, then design the character and share their work with their classmates."></ClassCard>
                <ClassCard img="../dancetheater.png" className="Dance/Theater Basics" desc="Starting with jazz dance, students will learn basic stretching and movements, then learn trickier combinations.
                In the theater part of the class, students will learn how to sight-read a script and analyze the scene. The class will end with the students peforming a short scene using the skills they learned."></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Math/Engineering</h1>
                <ClassCard img="../topology.png" className="Topology, Map Coloring and the 4 Color Theorem" desc="Using a combination of math and art, students will learn the fundamental skills behind map-making and the 4-Color Theorem. The class consists of a variety of arts and crafts, ending with
                students making their own map using origami."></ClassCard>
                <ClassCard img="../arduino.webp" className="Arduino, Breadboarding, and Soldering" desc="Students will learn the basic commands for Arduino and use these skills to make patterns with LEDs. The students will also learn about soldering and will take home their own PCB."></ClassCard>
                <ClassCard img="../cadfusion360modeling.jpg" className="CAD, Fusion 360, Modeling, and Product Design" desc="Students will learn to use softwares to create 3D models. Using what they learn, they will apply their skills to develop their own novel product idea."></ClassCard>

              </Row>

              <Row className="classRow">
                <h1>Culinary</h1>
                <ClassCard img="../culinary.png" className="Culinary Basics" desc="NA"></ClassCard>
                <ClassCard img="../cupcakedecorating.webp" className="Cupcake Decorating" desc="Students will learn different frosting and piping techniques as they make their own cupcakes.
                At the end of the class, students will have time to eat their cupcakes, socialize with their classmates, and have a Q&A with BCA teachers."></ClassCard>
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
