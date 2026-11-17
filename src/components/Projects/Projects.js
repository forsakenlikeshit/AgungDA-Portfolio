import { Col, Container, Row } from 'react-bootstrap';
import videobelajarbackend from '../../Assets/Projects/backend.webp';
import videobelajar from '../../Assets/Projects/videobelajar.png';
import stellarblade from '../../Assets/Projects/stellarblade.jpg';
import docugen from '../../Assets/Projects/docugen.png';
import Particle from '../Particle';
import ProjectCard from './ProjectCards';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docugen}
              isBlog={false}
              title="DocuGen - Automation Suite"
              description="Engineered a Python desktop automation suite (Tkinter, python-docx, Pillow, OpenXML) reducing procurement and civil works documentation time by ~80%. Automated image aspect-ratio scaling, table layout constraints, natural sorting, and progress comparison alignment, distributed as standalone .exe binaries."
              ghLink="https://github.com/forsakenlikeshit/docugen-automation-suite"
              demoLink="https://github.com/forsakenlikeshit/docugen-automation-suite/releases/tag/v1.0.0"
              demoText="Releases (.exe)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stellarblade}
              isBlog={false}
              title="Dynamic Gameplay Systems Mod"
              description="Developed an event-driven gameplay automation system in Lua (~3,000 LOC) for Stellar Blade, hooking into Unreal Engine runtime functions and lifecycles via RE-UE4SS. Features a pure-Lua binary parser to decode Unreal Engine save files (GVAS format), a state machine with Fisher-Yates shuffle algorithm for combat/zone transitions, and dynamic UMG HUD notifications."
              modLink="https://www.nexusmods.com/stellarblade/mods/4099"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videobelajar}
              isBlog={false}
              title="videobelajar"
              description="Developed a responsive e-learning platform using React.js, integrating REST APIs with Axios and managing global state through Zustand. Built features including course browsing and management (CRUD), reusable UI components, global loading indicators, toast notifications, modal alerts, and form validation, while following a component-based architecture and deploying the application on Vercel."
              ghLink="https://github.com/forsakenlikeshit/missionAdv2FE-harisenin"
              demoLink="https://missionadv2fe-harisenin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videobelajarbackend}
              isBlog={false}
              title="videobelajar-backend"
              description="Developed a RESTful backend API for an online course platform using Node.js, Express.js, Sequelize, and MySQL. Implemented user authentication and authorization with JWT and bcrypt, email verification using Nodemailer, protected routes with role-based access control, file uploads using Multer, and advanced course retrieval with filtering, sorting, and search query parameters. Designed and managed relational database models with Sequelize ORM and documented API endpoints for testing with Postman."
              ghLink="https://github.com/forsakenlikeshit/missionAdvBE1-harisenin"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
