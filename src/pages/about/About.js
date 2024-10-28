import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import laptopImg from "../../assets/about.png";
import { ImPointRight } from "react-icons/im";
import FadeIn from "../../effect/FadeIn";
import React from "react";
import {
  Framework,
  Language,
  Topics,
  Tool,
} from "../../components/about/StackCard";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <Container fluid className="about-content">
      <Particle />
      <Container>
        <Row>
          <Col xl={7}>
            <div className="section-header fade-in">
              Know Who <strong className="primary-color">I AM</strong>
            </div>

            <p className="paragraph fade-in">
              Hi everyone! I'm <span className="primary-color">Guo Yichen</span>{" "}
              , a Computer Science student from Nanyang Technological
              University, Singapore.
            </p>

            <p className="paragraph fade-in">
              I'm a self-motivated and detail-oriented team player, proficient
              in <span className="primary-color">JavaScript</span> ,{" "}
              <span className="primary-color">React.js</span> , and{" "}
              <span className="primary-color">Web development</span> , eager to
              contribute to dynamic projects and apply frontend expertise in
              real-world scenarios.
            </p>
            <ul className="about-activity">
              <li className="fade-in">
                <ImPointRight /> Academic Research, Web Projects
              </li>
              <li className="fade-in">
                <ImPointRight /> Sports - Running, Work-out
              </li>
            </ul>
            <div className="primary-color fade-in">
              <p>"花开堪折直须折，莫待花落空折枝。" </p>
              <footer className="blockquote-footer">金缕衣</footer>
            </div>
          </Col>
          <Col xl={5}>
            <img
              src={laptopImg}
              className="about-image img-fluid fade-in"
              style={{ maxHeight: "400px" }}
              alt="about"
            />
          </Col>
        </Row>
      </Container>
      {
        <Container className="section-divider">
          <h1
            className="section-header fade-in"
            style={{ paddingBottom: "20px" }}
          >
            I wanna | <strong style={{ color: "#ed9b37" }}>Code</strong>
          </h1>
          {/*<img
            className="github-stats img-fluid fade-in"
            src={
              "https://github-readme-streak-stats.herokuapp.com/?user=Yuanxyyds&theme=halloween&card_width=496&background=000000"
            }
            alt="github"
          />*/}
          <div className="typewriter-wrapper-about fade-in">
            <Typewriter
              options={{
                strings: [
                  '> System.out.println("Hello, world!");',
                  '> print("你好，世界！");',
                  '> console.log("Hola, mundo!");',
                  '> printf("Bonjour, monde!");',
                  '> echo "Hallo, Welt!";',
                  '> alert("こんにちは、世界！");',
                  '> cout << "Привет, мир!" << endl;',
                  '> Write-Host "Ciao, mondo!";',
                  '> fmt.Println("안녕하세요, 세계!");',
                  '> Console.WriteLine("Olá, mundo!");',
                  '> puts "नमस्ते दुनिया!";',
                  '> Log.i("مرحبا بالعالم!");',
                ],
                cursor: "_",
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </Container>
      }
      <Container className="section-divider">
        <h1 className="section-header fade-in">
          Programming Language <strong className="primary-color">Skill </strong>
        </h1>
        <Language className="fade-in" />
      </Container>
      <Container className="about-skill-divider">
        <h1 className="section-header fade-in">
          Framework and System <strong className="primary-color">Skill </strong>
        </h1>
        <Framework className="fade-in" />
      </Container>
      <Container className="about-skill-divider">
        <h1 className="section-header fade-in">
          Service and Tool <strong className="primary-color">Skill </strong>
        </h1>
        <Tool className="fade-in" />
      </Container>
      <Container className="about-skill-divider">
        <h1 className="section-header fade-in">
          Learning <strong className="primary-color">Topics </strong>
        </h1>
        <Topics className="fade-in" />
      </Container>
    </Container>
  );
}

export default About;
