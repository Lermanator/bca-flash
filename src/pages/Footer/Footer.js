import './Footer.css';
import { Container, Row} from 'react-bootstrap';

function Footer() {
  return (
    <div className="Footer">
        <footer>
          <Container fluid className="footerContainer">
            <Row>
              <div className="footerElement">
                BCA Flash 2023 Ⓒ
              </div>
            </Row>
            <Row>
            <div className="footerElement"> 
              Register <a href="https://tinyurl.com/registerbcaflash">Here</a>
            </div>
            </Row>
          </Container>
        </footer>
    </div>
  );
}

export default Footer;
