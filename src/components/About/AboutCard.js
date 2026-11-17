import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify', lineHeight: '1.7' }}>
            Hello everyone! I’m <span className="purple">Agung Dwi Aprizal</span> based in{' '}
            <span className="purple">Karawang, Indonesia</span>.
            <br />
            <br />
            I am a multi-disciplinary developer with hands-on experience spanning{' '}
            <span className="purple">Full-Stack Web Development</span> (React.js, Node.js, Express, MySQL),{' '}
            <span className="purple">Desktop Process Automation</span> (Python, Tkinter, OpenXML, Pillow), and{' '}
            <span className="purple">Game Systems Modding</span> (Lua, Unreal Engine RE-UE4SS, GVAS binary parsing).
            <br />
            <br />
            Alongside software development, I have over five years of experience as a{' '}
            <span className="purple">PC & IT Support Technician</span> specializing in hardware diagnostics,
            server maintenance, and diskless systems management (CCBoot). I hold a Bachelor's degree from{' '}
            <span className="purple">Universitas Singaperbangsa Karawang</span>.
            <br />
            <br />
            Outside of programming, here are some activities I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Game Modding & Systems Scripting
            </li>
            <li className="about-activity">
              <ImPointRight /> Hardware Optimization & Custom PC Builds
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinema & Narrative Analysis
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)', marginTop: '20px' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Agung Dwi Aprizal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
