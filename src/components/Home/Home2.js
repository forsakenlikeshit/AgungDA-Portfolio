import { Col, Container, Row } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import myImg from '../../Assets/avatar.svg';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a versatile developer and technician passionate about building clean
              web applications, automating workflows, and reverse-engineering game systems.
              <br />
              <br />
              My technical work spans:
              <br />
              <i>
                <b className="purple">
                  {' '}
                  • Full-Stack Web Development (JavaScript, React.js, Node.js, Express, MySQL)
                </b>
              </i>
              <br />
              <i>
                <b className="purple">
                  {' '}
                  • Desktop Process Automation (Python, Tkinter, Pillow, OpenXML)
                </b>
              </i>
              <br />
              <i>
                <b className="purple">
                  {' '}
                  • Game Systems Modding (Lua, Unreal Engine RE-UE4SS, Binary File Parsing)
                </b>
              </i>
              <br />
              <br />
              Backed by over five years of hands-on experience in PC hardware diagnostics and server/network maintenance,
              I combine practical troubleshooting with modern software development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
