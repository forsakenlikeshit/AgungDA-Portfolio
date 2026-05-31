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
              I'm an aspiring Frontend and Fullstack Developer with a background in education and
              digital learning content. My journey into software development began with a curiosity
              about how web applications are built and a desire to create products that are both
              useful and accessible to users.
              <br />
              <br />
              Through self-learning and intensive bootcamp training, I have developed experience
              building web applications using
              <i>
                <b className="purple"> JavaScript, React, HTML, CSS </b>
              </i>
              , and modern frontend development practices. I enjoy turning designs and ideas into
              interactive user experiences while continuously improving my problem-solving and
              technical skills.
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
