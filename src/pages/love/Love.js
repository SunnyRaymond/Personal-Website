import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import FadeIn from "../../effect/FadeIn";
import "../../style/Love.css";
import profilePic from "../../assets/love/Hannah.jpg";

const timelineData = [
  {
    date: "2025-05-12",
    title: "First Meeting",
    description: "We met for the first time. It was magical!",
    icon: <FaRegHeart />,
  },
  {
    date: "2025-05-20",
    title: "First Date",
    description: "Our first date together. Unforgettable moments.",
    icon: <FaRegHeart />,
  },
];

function Love() {
  return (
    <Container fluid className="love-content">
      <Particle />
      <Container>
        <Row>
          <Col xl={7} className="love-profile-text">
            <div className="section-header fade-in">
              My Love <strong className="primary-color">Hannah Niu</strong>
            </div>
            <p className="paragraph fade-in">
              This page is dedicated to my wonderful girlfriend, <span className="primary-color">Hannah Niu</span>.
              <br />
              <span className="love-quote">“You are my today and all of my tomorrows.”</span>
            </p>
            <ul className="love-profile-links fade-in">
              <li>
                <a href="https://github.com/HannahNiu06" target="_blank" rel="noopener noreferrer" className="love-social-icon">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nanmianhui/" target="_blank" rel="noopener noreferrer" className="love-social-icon">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col xl={5} className="love-profile-pic">
            <img
              src={profilePic}
              className="img-fluid fade-in love-image"
              style={{ maxHeight: "400px", borderRadius: "20px", boxShadow: "0 0 40px #ab31de55" }}
              alt="Hannah Niu"
            />
          </Col>
        </Row>
      </Container>
      <Container className="section-divider love-timeline-section">
        <h1 className="section-header fade-in">
          Our <strong className="primary-color">Memories</strong>
        </h1>
        <div className="love-timeline fade-in">
          {timelineData.map((event, idx) => (
            <div className="love-timeline-event" key={idx}>
              <div className="love-timeline-icon">{event.icon}</div>
              <div className="love-timeline-content">
                <div className="love-timeline-date">{event.date}</div>
                <div className="love-timeline-title">{event.title}</div>
                <div className="love-timeline-desc">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="love-ending-quote fade-in">
          <p>“Every love story is beautiful, but ours is my favorite.”</p>
        </div>
      </Container>
    </Container>
  );
}

export default Love; 