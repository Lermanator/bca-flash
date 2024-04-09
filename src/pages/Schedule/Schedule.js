import './Schedule.css';
// import '..\Classes\Classes.css';
import React from 'react';
//import Typewriter from "typewriter-effect"; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import { Container, Image, Row} from 'react-bootstrap';

function Schedule() {
  return (
    // <div className="Classes">
    //     <Container fluid className="classesContainer">
    //         <Row className="classRowHeader">
    //           <Typewriter
    //             onInit={(typewriter) => { 
    //               typewriter

    //               .typeString("Schedule coming soon!")
    //               .start();
    //             }}
    //           />
    //         </Row>
    //     </Container>
    // </div>
    // <Container className="scheduleContainer">
    //     <img className="scheduleImage" src="../flashSchedule.png"></img>
    // </Container>
            <Container fluid className="scheduleContainer">

                <img className="scheduleImg" src="../bcaflashschedule2024.jpeg"></img>

{/* 
            <Row class="center">
                <img className="bottomSponsorImg" src="../kumon1.jpg"></img>
                <img className="bottomSponsorImg" src="../mathnasium.jpg"></img>
                <img className="bottomSponsorImg" src="../brainstorm.png"></img>
            </Row> */}

        </Container>
  );
}

export default Schedule;