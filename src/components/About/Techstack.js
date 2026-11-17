import { Col, Row } from 'react-bootstrap';
import Git from '../../Assets/TechIcons/Git.svg';
import Javascript from '../../Assets/TechIcons/Javascript.svg';
import Node from '../../Assets/TechIcons/Node.svg';
import ReactIcon from '../../Assets/TechIcons/React.svg';
import Zustand from '../../Assets/TechIcons/Zustand.svg';
import SQL from '../../Assets/TechIcons/SQL.svg';
import { SiPython, SiLua, SiUnrealengine } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython size={24} color="#3776ab" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLua size={24} color="#000080" />
        <div className="tech-icons-text">Lua</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Zustand} alt="Zustand" />
        <div className="tech-icons-text">Zustand</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine size={24} />
        <div className="tech-icons-text">Unreal Engine</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
