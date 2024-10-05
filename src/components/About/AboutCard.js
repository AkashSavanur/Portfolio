import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Savanur </span>
            <br />
            I am currently in Year 2 studying Computer Science with a Second Major in Business at NTU, Singapore.
            <br />
          </p>
          <p style={{ textAlign: "justify" }}>
            My hobbies include:
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Suspense/Thriller movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
