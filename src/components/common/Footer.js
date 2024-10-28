import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillWechat } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section>
      <Container fluid className="footer">
        <Row>
          <Col md={4} className="footer-paragraph">
            <h3>Developed by Guo Yichen</h3>
          </Col>
          <Col md={4} className="footer-paragraph">
            <h3>Copyright © {year} NTU</h3>
          </Col>
          <Col md={4}>
            <ul className="footer-icon-list">
              <div className="footer-icons">
                <a
                  href="https://github.com/SunnyRaymond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icons"
                >
                  <AiFillGithub />
                </a>
              </div>
              <div className="footer-icons">
                <a
                  href="https://www.linkedin.com/in/yichen-guo-63756829a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="footer-icons">
                <a
                  href="https://raw.githubusercontent.com/SunnyRaymond/profile-wechat-image/refs/heads/main/IMG_6499.JPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icons"
                >
                  <AiFillWechat />
                </a>
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
