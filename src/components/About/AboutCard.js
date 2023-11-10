import React from "react";
import Card from "react-bootstrap/Card";
import Aboutcard from './AboutCard';
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chetna Chandra </span>
            from <span className="purple"> Jamshedpur, India.</span>
            <br /> I am a third year student pursuing an Bachelors in Computer Science (BSc) at Vellore Institute of Technology .
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chetna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
