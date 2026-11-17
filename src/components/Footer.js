import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaGamepad } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center text-center">
        <Col md="12" className="footer-body d-flex justify-content-center align-items-center">
          <ul className="footer-icons d-flex justify-content-center align-items-center m-0 p-0">
            <li className="social-icons">
              <a
                href="https://github.com/forsakenlikeshit"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/agungaprizal/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.nexusmods.com/stellarblade/mods/4099"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                title="NexusMods"
              >
                <FaGamepad />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:agungdwiafrizal@gmail.com"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
