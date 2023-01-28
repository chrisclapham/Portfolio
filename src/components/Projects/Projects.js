import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import osint from "../../Assets/Projects/osint-app.png";
import goscan from "../../Assets/Projects/goscanner.png";
import website from "../../Assets/Projects/website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple">work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osint}
              isBlog={false}
              title="OSINT Application"
              description="Written in Python using the PyQT5 framework, a selection of OSINT tools packaged together for everyday cyber reconnaissance into an easy to use Windows GUI application."
              ghLink="https://github.com/ranCMD/WebTracer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goscan}
              isBlog={false}
              title="Port Scanner"
              description="Simple tool written in Go that allows you to scan a range of ports on a specified host to see which ones are open."
              ghLink="https://github.com/ranCMD/GoPortScanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="This website"
              description="My personal portfolio (chrisclapham.me) which features some of my GitHub projects as well as my résumé and technical skills. This project was built using React.js, Node.js, Express.js, CSS3 and VS Code."
              ghLink="https://github.com/ranCMD/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
