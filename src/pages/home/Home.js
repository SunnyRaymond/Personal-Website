import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/avatar.png";
import avatarMain from "../../assets/home-animation.gif";
import Particle from "../../components/common/Particle";
import Tilt from "react-parallax-tilt";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillWechat,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section>
      <Container className="home-content">
        <Particle />
        <Container fluid id="home">
          <Row fluid id="home">
            <Col xl={7}>
              <h1 className="home-primary-header fade-in">
                Welcome to my Profolio!{"  "}
                <span className="wave" role="img" aria-labelledby="wave">
                  {" "}
                  👋🏻{" "}
                </span>
              </h1>

              <h1 className="heading-name fade-in">
                I'm
                <strong className="primary-color"> Guo Yichen 郭奕辰 </strong>
              </h1>

              <div className="typewriter-wrapper-home fade-in">
                <Typewriter
                  options={{
                    strings: [
                      "> Student at Nanyang Technological University",
                      "> Frontend Developer",
                    ],
                    cursor: "_",
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                  }}
                />
              </div>
            </Col>

            <Col xl={5}>
              <Tilt>
                <img
                  src={avatarMain}
                  className="img-fluid fade-in"
                  style={{ maxHeight: "450px" }}
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
        <Container className={"section-divider"} fluid id="about">
          <Row>
            <Col xl={8}>
              <h1 className="fade-in section-header">
                LET ME <span className="primary-color"> INTRODUCE </span> MYSELF
              </h1>
              <p className="paragraph fade-in">
                I am a passionate year 2 student at{" "}
                <b className="primary-color">
                  {" "}
                  Nanyang Technological University
                </b>
                , pursuing a degree in{" "}
                <b className="primary-color">
                  Computer Science with second major in Business
                </b>{" "}
                with a GPA of 4.8/5.0. Currently striving towards a specialist
                in Frontend Development.
              </p>
              <p className="paragraph fade-in">
                Currently working as a
                <i>
                  <b className="primary-color"> Research Assistant </b> at
                  <b className="primary-color"> NTU's MICL Lab </b>
                </i>
                {"  "}
                under the URECA undergraduate research program, aim at develop
                an innovative visual analytics method through Web3 and tech
                frontiers.
              </p>
              <p className="paragraph fade-in">
                Besides, I am actively looking for{" "}
                <b className="primary-color">
                  Software Engineer (Frontend) internship
                </b>{" "}
                ( from May to Aug 2025 with further semester credit-bearing
                availability ) oppotunities.
              </p>

              <p className="primary-color fade-in">
                "花开堪折直须折，莫待花落空折枝。"{" "}
              </p>
              <footer className="blockquote-footer">金缕衣</footer>
            </Col>
            <Col xl={4} className="my-avtar">
              <img
                src={homeLogo}
                className="fade-in img-fluid"
                style={{ maxHeight: "400px" }}
                alt="avatar"
              />
            </Col>
          </Row>
        </Container>
        <Container className={"section-divider"} fluid id="contact">
          <h1 className="section-header fade-in">
            <span className="primary-color"> CONTACT </span> ME AT
          </h1>

          <p className="home-contact-info fade-in">
            <AiOutlineMail style={{ width: "40px", height: "40px" }} />
            yguo017@e.ntu.edu.sg
          </p>
          <p className="home-contact-info fade-in">
            <AiOutlinePhone style={{ width: "40px", height: "40px" }} /> +65
            8942 3938
          </p>

          <ul className="social_icon_list fade-in">
            <div className="social-icons">
              <a
                href="https://github.com/SunnyRaymond"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/yichen-guo-63756829a/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://raw.githubusercontent.com/SunnyRaymond/profile-wechat-image/refs/heads/main/IMG_6499.JPG"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <AiFillWechat />
              </a>
            </div>
          </ul>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
