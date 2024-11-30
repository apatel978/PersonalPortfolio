import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshar Patel </span>
            from <span className="purple"> Lake City, Florda.</span>
            <br />
            I am currently looking for a career as a software engineer.
            <br />
            I have completed App Academy's 48-week bootcamp and finished a Java Course through HTD Talent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#ff3366" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akshar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
