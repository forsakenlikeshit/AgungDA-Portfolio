import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi everyone! I’m <span className="purple">Agung Dwi Aprizal</span> from{' '}
            <span className="purple">Karawang, Indonesia</span>.
            <br />
            I’m currently working as a <span className="purple">Freelance PC Technician</span>
            <br />I hold an Bachelor's degree in <span className="purple">
              English Education
            </span>{' '}
            from <span className="purple">Universitas Singaperbangsa Karawang</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Modding Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Analyzing Movies and TV Shows
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Agung Dwi Aprizal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
