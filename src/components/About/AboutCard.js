import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am <span className="purple">Chris Clapham, </span>a New Zealand
            born <span className="purple"> software developer</span>.
            <br />
            <br />
            In 2020 I made one of the best decisions of my life when I decided
            to step into a career in information technology. Through a Master’s
            in Software Development, I learnt computer programming fundamentals
            and cloud technology capabilities. While this academic venture was
            my first professional entryway into software development – building
            computers and developing software has featured throughout my life.
            <br />
            <br />
            I am passionate about uplifting cyber security capabilities and
            creating safer, more secure technology through software development,
            cyber strategy, threat intelligence gathering, open-source
            intelligence (OSINT), reconnaissance, reporting or security
            engineering. I thrive on joining the dots and problem-solving in a
            constantly evolving field.
            <br />
            <br />
            Bringing 6+ years of professional experience from my previous career
            as a media specialist (videography and creative imagery) to cyber
            security gives me a unique take on often complex and analytical
            problems. Having completed a Master of Software Development at
            Victoria University in Wellington, I have gained the necessary
            skills to approach new languages and technology with confidence and
            structure. Information technology is as much about understanding the
            specifics as it is about being able to constantly learn new things.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
