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

            <Row className="sponsorRow">
                <img className="InserraSponsorImg" src="../inserra.jpg"></img>
                <h3>Inserra Supermarkets a family-owned and operated company where third and fourth generation family members continue the family tradition of caring for our communities and all 25 of our stores provide unparalleled professional service, locally sourced specialty items, farm to table fresh produce, dairy, meats and poultry,  and the largest selection of brands at the best prices in the marketplace. And as one of the region’s largest employers, our family-owned chain provides full- and part-time positions to more than 5000 associates. Our stores are run at the local level and each of our stores is a neighborhood supermarket that serves the needs of the local community not a corporate office. The family ownership business model of families serving families is a ShopRite tradition and enables our family to meet the needs of the neighborhoods we serve with products, services and charitable support.</h3>
            </Row>
            <Row className="sponsorRow">
                <img className="ShackSponsorImg" src="../tutor-shack.jpg"></img>
                <h3>The Tutor Shack has the best tutors around! We know our subject matter inside and out, and we communicate that knowledge with caring and patience to every one of our students. We consider our students and their families to be part of OUR family. And that attitude is what sets us apart from other tutoring companies. It’s why we go the extra mile for our kids. It’s why our kids respond by going the extra mile for us. And it’s why we routinely see dramatic improvements in our students’ performance when they study here, no matter WHAT they study here. Whether the subject is Algebra II, AP Physics, or the SAT/ACT, the Tutor Shack is truly in a class by itself!</h3>
            </Row>

            <Row class="center">
                <img className="bottomSponsorImg" src="../kumon1.jpg"></img>
                <img className="bottomSponsorImg" src="../mathnasium.jpg"></img>
                <img className="bottomSponsorImg" src="../brainstorm.png"></img>
            </Row>



        </Container>

    );
}

export default Sponsors;