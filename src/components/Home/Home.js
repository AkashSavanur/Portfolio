import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={15} className="home-header">
              <h1 style={{ paddingBottom: 35 }} className="main-name">
                Hello! I'm Akash
              </h1>
              <h2 style={{ paddingBottom: 15 }} className="main-name">
                I'm a Year 2 Computer Science student at Nanyang Technology University, Singapore. 
              </h2>
              <h2 style={{ paddingBottom: 15 }} className="main-name">
              I'm passionate about exploring diverse fields, including Software Development, Machine Learning, and Finance, where I continuously grow and innovate.
              </h2>
              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
