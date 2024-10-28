import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/projects/ProjectCards";
import Particle from "../../components/common/Particle";
import Pizza from "../../assets/projects/pizza.png";
import Oasis from "../../assets/projects/Oasis.png";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="primary-color">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={Pizza}
              title="Fast-React-Pizza"
              description="A web application that allows users to order pizza online. Users can select the pizza they want, add it to the cart, and place an order. The application also allows users to retrive the order using a unique order ID."
              action={
                <Row
                  style={{
                    justifyContent: "center",
                    padding: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  className="g-0"
                >
                  <Col
                    xs={5}
                    sm={5}
                    md={10}
                    lg={5}
                    xl={10}
                    xxl={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button
                      variant="primary"
                      href="https://sunnyray-react-pizza.netlify.app/" // Replace this with the actual external URL
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CgWebsite /> &nbsp; Project Demo
                    </Button>
                  </Col>
                  <Col
                    xs={5}
                    sm={5}
                    md={10}
                    lg={5}
                    xl={10}
                    xxl={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button
                      variant="primary"
                      href={"https://github.com/"}
                      target="_blank"
                    >
                      <BsGithub /> &nbsp; Organization
                    </Button>
                  </Col>
                </Row>
              }
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={Oasis}
              title="The-Wild-Oasis"
              description="This is a hotel management web app, where hotel employees can manage cabins, bookings, and guests. It uses Supabase as the backend and implements advanced React techniques such as HOCs and React Query. Hint: login user: test@test.com, password: testest"
              action={
                <Row
                  style={{
                    justifyContent: "center",
                    padding: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  className="g-0"
                >
                  <Col
                    xs={5}
                    sm={5}
                    md={10}
                    lg={5}
                    xl={10}
                    xxl={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button
                      variant="primary"
                      href="https://sunnyray-the-wild-oasis.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CgWebsite /> &nbsp; Project Demo
                    </Button>
                  </Col>
                  <Col
                    xs={5}
                    sm={5}
                    md={10}
                    lg={5}
                    xl={10}
                    xxl={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button
                      variant="primary"
                      href={"https://github.com/"}
                      target="_blank"
                    >
                      <BsGithub /> &nbsp; Organization
                    </Button>
                  </Col>
                </Row>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
