import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phishing from "../../Assets/Projects/phsihing.png";
import slv from "../../Assets/Projects/SLV.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishing}
              isBlog={false}
              title="Phishing Email Detection"
              description="This project aims to accurately classify and detect phishing emails, providing practical insights to prevent individuals from falling victim to phishing attacks in real-world scenarios."
              ghLink="https://github.com/AkashSavanur/Phishing-Email-Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slv}
              isBlog={false}
              title="Temple Management Software"
              description="A full-fledged temple management software that facilitates user registration, bookings, donations, fund-raising and administration."
              ghLink="https://github.com/SLVTemple/Frontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
