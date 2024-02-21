import "./AboutUs.css";
import DirectorCard from './DirectorCard/DirectorCard';

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Container, Row, Image} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


function AboutUs() {
    return (
        
      <div className="AboutUs">
        <Row className="header_row">
            <h1 className="header">Board Of Directors</h1>
        </Row>

        <Fade top distance="5%">
            <EventRow />
            <ClassesRow />
            <OperationsRow />
            <FinanceRow />
            <TechnologyRow />
            <PublicRelationsRow />
            <SpaceRow />
        </Fade>

      </div>
    );
}


function EventRow() {
    return (
        <Row className="boardRow">
            <h1>Directors of Event</h1>
            <DirectorCard img="../sofiya.JPG" firstName = "Sofiya" lastName = "Doroshenko" desc = "Hello! My name is Sofiya Doroshenko; I am a senior in the academy for medical science and technology (AMST). I am looking forward to working with all of our amazing board members and making this the best BCA Flash event ever!" />
            <DirectorCard img="../dishaKalia.png" firstName = "Disha" lastName = "Kalia" desc = "Hi everyone, my name is Disha Kalia, and I'm a senior in the Academy for Engineering and Design Technology (AEDT). I previously taught the Astronomy and Space Exploration class, and am so excited to help run the event this year!"/>
        </Row>
    )

}

function ClassesRow() {
    return (
        <Row className="boardRow">
            <h1>Directors of Classes</h1>
            <DirectorCard img="../alicefomin.png" firstName = "Alice" lastName = "Fomin" desc = "Hi! My name is Alice Fomin and I'm a junior in the Academy for Business and Finance (ABF). I'm looking forward to creating another amazing year of Flash!"/>
            <DirectorCard img="../nevinroy.jpg" firstName = "Nevin" lastName = "Roy" desc = "Hello! My name is Nevin Roy. I'm a junior in the medical science academy (AMST). I can't wait to have an amazing Flash this year!" />
            <DirectorCard img="../beccaslaten.png" firstName = "Becca" lastName = "Slaten" desc = "My name is Becca Slaten, and I'm a junior in the culinary arts and hospitality administration academy (ACAHA). I'm so excited to help organize the classes for you all, and I can't wait to see everyone there!" />
        </Row>
    )
}

function OperationsRow() {
    return (
        <Row className="boardRow">
            <h1>Directors of Operations</h1>
            <DirectorCard img="../haileychin.jpg" firstName = "Hailey" lastName = "Chin" desc = "My name is Hailey Chin. I'm a senior in the Academy for the Advancement of Science and Technology (AAST). I'm excited to help make this year's Flash great!" />
            <DirectorCard img="../ibrahim.png" firstName = "Ibrahim" lastName = "Wichka" desc = "Hi! My name is Ibrahim Wichka and I’m a junior in the science academy (AAST). I’m looking forward to meeting you all at BCA Flash this year and helping you get to know the environment here at the Academies!" />
            <DirectorCard img="../isabella.JPG" firstName = "Isabella" lastName = "Zelaya Alves" desc = "Hi everyone! My name is Isabella Zelaya Alves and I am a junior in AMST (Medical Science). I hope you all have a great time at BCA Flash this year and walk away with newfound knowledge and friends! "/>
        </Row>
    )

}

function FinanceRow() {
    return (
        <Row className="boardRow">
            <h1>Director of Finance</h1>
            <DirectorCard img="../brannonzee.png" firstName = "Brannon" lastName = "Zee" desc = "Hi, I'm Brannon and I'm in the Academy of Business and Finance (ABF). I'm excited to work with and see y'all at BCA Flash!"/>
        </Row>
    )
}

function TechnologyRow() {
    return (
        <Row className="boardRow">
            <h1>Directors of Technology</h1>
            <DirectorCard img="../ishatyagi.jpg" firstName = "Isha" lastName = "Tyagi" desc = "Hey guys! My name is Isha Tyagi; I am a junior in the computer science academy (ATCS). I am so excited to meet you all at Flash this year!"/>
            <DirectorCard img="../jeannelle.png" firstName = "Jeannelle" lastName = "Tellado" desc="Hi everyone! My name is Jeannelle Tellado, and I am a junior in the Academy of Technology and Computer Science (ATCS). I'm so excited to meet you all, and I can't wait to have an amazing BCA Flash!!" />
        </Row>
    )
}

function PublicRelationsRow() {
    return (
        <Row className="boardRow" id="publicRelations">
            <h1>Directors of Public Relations</h1>
            <DirectorCard img="../sueahchoi.png" firstName = "Sue-Ah" lastName = "Choi" desc = "Hey everyone! My name is Sue-Ah Choi and I am a current junior in AVPA-V. It's great to be with everyone at Flash this year!"/>
            <DirectorCard img="../michelle.jpeg" firstName = "Michelle" lastName = "Rozenfeld" desc = "Hi everyone! I’m Michelle Rozenfeld; a junior in the Culinary and Hospitality academy (ACAHA). I can’t wait to meet you all at BCA Flash 2024! "/>
        </Row>
    )
}

function SpaceRow() {
    return (<button id="spaceBtn"></button>)
}
  
export default AboutUs;
  