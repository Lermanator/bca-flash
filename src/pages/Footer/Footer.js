import './Footer.css';
import { Container, Row} from 'react-bootstrap';

function Footer() {
  return (
    <div className="Footer">
        <footer>
          <Container fluid className="footerContainer">
            <div>Ⓒ BCA Flash 2023</div>
            <div>Register <a href="https://tinyurl.com/registerbcaflash">Here</a></div>
          </Container>
        </footer>
    </div>
  );
}

export default Footer;
