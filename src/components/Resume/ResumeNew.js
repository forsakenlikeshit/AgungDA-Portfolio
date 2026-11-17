import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/AgungDwiAprizal.pdf';
import resumePage1 from '../../Assets/resume_page_1.png';
import resumePage2 from '../../Assets/resume_page_2.png';
import { AiOutlineDownload } from 'react-icons/ai';

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative', marginBottom: '25px' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Agung_Dwi_Aprizal_CV.pdf"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex flex-column align-items-center" style={{ gap: '25px' }}>
          <div className="resume-page-wrapper text-center">
            <img
              src={resumePage1}
              alt="Agung Dwi Aprizal Resume Page 1"
              className="img-fluid rounded"
              style={{
                maxWidth: '850px',
                width: '100%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>
          <div className="resume-page-wrapper text-center">
            <img
              src={resumePage2}
              alt="Agung Dwi Aprizal Resume Page 2"
              className="img-fluid rounded"
              style={{
                maxWidth: '850px',
                width: '100%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative', marginTop: '25px' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Agung_Dwi_Aprizal_CV.pdf"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
