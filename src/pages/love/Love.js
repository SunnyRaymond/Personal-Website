import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaHandHoldingHeart, FaRegHeart } from "react-icons/fa";
import FadeIn from "../../effect/FadeIn";
import "../../style/Love.css";
import profilePic from "../../assets/love/Hannah.jpg";

const timelineData = [
  {
    date: "2025-05-12",
    title: "We are together !",
    description: "Beneath Shichahai's twilight, our embrace entrenches.", //中文是：在什刹海的黄昏下，我们的拥抱深深扎根。
    icon: <FaRegHeart />,
    img: require("../../assets/love/memories/shishahai.jpg"),
  },
  {
    date: "2025-05-20",
    title: "First 520 with Surprise 😘",
    description: "A breath of mist fall upon your skin, long of tenderness.", //中文是：一缕薄雾轻抚你的肌肤，长久的温柔。
    icon: <FaHandHoldingHeart />,
    img: require("../../assets/love/memories/first520.jpg"),
  },
  {
    date: "2025-06-21",
    title: "3 Days in Heaven ✨",
    description: "A weekend in paradise, where time stands still.", //中文是：天堂的三天，时间仿佛静止。
    icon: <FaRegHeart />,
    img: require("../../assets/love/memories/621.jpg"),
  },
  {
    date: "2025-07-06",
    title: "See the  Sunset Together 🌅",
    description: "Watching the sunset with you, the world sunk into gentle.", //中文是：和你一起看日落，世界都变得温柔。诗意浪漫的英文是：Watching the sunset with you, the world becomes gentle.
    icon: <FaHandHoldingHeart />,
    img: require("../../assets/love/memories/sea.jpg"),
  }
];

function Love() {
  return (
    <Container fluid className="love-content">
      <Particle />
      <Container>
        <Row>
          <Col xl={7} className="love-profile-text">
            <div className="section-header fade-in">
              My Love <strong className="primary-color">Hannah Niu</strong> ❤️
            </div>
            <p className="paragraph fade-in">
              This page is dedicated to my wonderful girlfriend, <span className="primary-color">Hannah Niu</span>.
              <br />
              <span className="love-quote">“You are my today and all of my tomorrows.”</span>
            </p>
            <ul className="social_icon_list fade-in">
              <div className="social-icons">
                <a
                  href="https://github.com/HannahNiu06"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/nanmianhui/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </div>
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
      {/* Our Love MV Section */}
      <Container className="section-divider love-mv-section">
        <h1 className="section-header fade-in">
          Our <strong className="primary-color">Love MV</strong>
        </h1>
        <div className="love-mv-description fade-in">
          <span>A special video capturing our sweetest moments together. Every second is a memory, every frame is love.</span>
          <span className="mv-heart" role="img" aria-label="heart">💜</span>
        </div>
        <div className="love-mv-video-wrapper fade-in">
          <iframe
            className="love-mv-video"
            src="https://www.youtube.com/embed/gR5hDmXKf6E"
            title="Our Love MV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
      {/* End Our Love MV Section */}
      <Container className="section-divider love-timeline-section">
        <h1 className="section-header fade-in">
          Our <strong className="primary-color">Memories</strong>
        </h1>
        <div className="love-timeline fade-in">
          {timelineData.map((event, idx) => (
            <div className="love-timeline-event" key={idx}>
              <img
                src={event.img}
                alt={event.title}
                className="love-timeline-img"
              />
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
          <p>“爱能克服远距离，多远都要在一起。”</p>
        </div>
      </Container>
    </Container>
  );
}

export default Love; 