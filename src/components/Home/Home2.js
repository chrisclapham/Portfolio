import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/Animoji-cutout.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="home-about-description" style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself...
            </h1>
            <p className="home-about-body">
              In 2020 I fell in love with programming and cyber security. I have
              always had a fascination with computers growing up but this was
              the year I decided to make it more than just that.
              <br />
              <br />I am experienced in
              <i>
                <b className="purple"> Java, Python, Javascript, HTML and CSS </b>
              </i>
              programming languages.
              <br />
              <br />
              My field of interest is building and securing
              <i>
                <b className="purple"> cloud based applications </b> as well as{" "}
                <b className="purple">modernising legacy software</b>
              </i>
              . Something in mind? I would love to hear about it!
              <br />
              <br />
              Alongside regular hackathons, capture-the-flag events, software
              development courses and personal software development projects, I
              have been able to develop and refine skills pertaining to the
              development of{" "}
              <i>
                <b className="purple">
                  secure, forward-thinking, practical and sustainable software
                  development.
                </b>
              </i>{" "}
              In addition to these technical skills,
              <i>
                <b className="purple">
                  {" "}I am a highly interpersonal, team-orientated, empathetic and
                  driven individual.
                </b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>Connect</h2>
            <p>
              Feel free to <span className="purple">say hi </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rancmd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/christopher-clapham/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/christopher-clapham/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
