// import Footer from './pages/Footer/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import './Sponsors.css';


function Sponsors() {
    return (
        <Container fluid className="classesContainer">
            <Row className="header_row">
                <h1 className="header">Sponsors</h1>
                <h2>Thank you to our sponsors for making BCA Flash possible!</h2>
            </Row>

            {/* <Row className="sponsorRow">
                <img className="sponsorImg" src="../kumon.png"></img>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </Row>

            <img className="sponsorImg" src="../kumon1.png"></img>
            <img className="sponsorImg" src="../kumon1.png"></img>
            <img className="sponsorImg" src="../kumon1.png"></img>
            <img className="sponsorImg" src="../kumon1.png"></img> */}
        </Container>

    );
}

export default Sponsors;