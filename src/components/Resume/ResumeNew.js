import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf1 from "../../Assets/../Assets/AkashSavanurResume.pdf"; // First resume PDF
import pdf2 from "../../Assets/../Assets/Akash_Savanur_Resume.pdf"; // Second resume PDF
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        
        {/* Row with two resumes side by side */}
        <Row className="resume d-flex justify-content-center">
          {/* First Resume Column - Finance Resume */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <h4 style={{ marginBottom: "20px" }}>Finance Resume</h4>
            <Document file={pdf1} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
            </Document>
          </Col>

          {/* Second Resume Column - Tech Resume */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <h4 style={{ marginBottom: "20px" }}>Tech Resume</h4>
            <Document file={pdf2} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
