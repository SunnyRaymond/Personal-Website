import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/projects/ProjectCards";
import Particle from "../../components/common/Particle";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import hms_report from "../../assets/SCS1_Group1_Report.pdf";
import Pizza from "../../assets/projects/pizza.png";
import Oasis from "../../assets/projects/Oasis.png";
import Orbits from "../../assets/projects/Orbits.png";
import HMS from "../../assets/projects/HMS.png";
import Chat from "../../assets/projects/Chat.png";

function Projects() {
  const projectData = [
    {
      imgPath: Chat,
      title: "SunnyRay Chat",
      description:
        "This is a full stack real-time chat application, featuring real-time messaging, group chats, authentication, audio/video calls and mobile-friendly feature, showcasing modern web development practices.",
      demoLink: "https://sunnyray-chat.vercel.app",
      demoText: "Project Demo",
      orgLink: "https://github.com/SunnyRaymond/NextJS-Chat-App",
      orgText: "Organization",
    },
    {
      imgPath: HMS,
      title: "SC2002 HMS",
      description:
        "This is a Java-based Hospital Management System (HMS) that manages patient records, doctor availability, appointment scheduling, prescriptions, and more, built for NTU SC2002 OOP course.",
      reportLink: hms_report,
      reportText: "Project Report",
      orgLink: "https://github.com/SunnyRaymond/SC2002-HMS",
      orgText: "Organization",
    },
    {
      imgPath: Pizza,
      title: "Fast React Pizza",
      description:
        "A web application that allows users to order online. Users can select the pizza they want, add it to the cart, and place an order. The application also allows users to retrieve the order using a unique order ID.",
      demoLink: "https://sunnyray-react-pizza.netlify.app/",
      demoText: "Project Demo",
      orgLink: "https://github.com/SunnyRaymond/fast-react-pizza",
      orgText: "Organization",
    },
    {
      imgPath: Oasis,
      title: "The Wild Oasis",
      description:
        "This is a hotel management web app, where hotel employees can manage cabins, bookings, and guests. It uses Supabase as the backend. Hint: login user: test@test.com, password: testest",
      demoLink: "https://sunnyray-the-wild-oasis.netlify.app/",
      demoText: "Project Demo",
      orgLink: "https://github.com/SunnyRaymond/the-wild-oasis",
      orgText: "Organization",
    },
    {
      imgPath: Orbits,
      title: "ORBITs for STARs",
      description:
        "A user-friendly browser plugin that automatically helps students allocate their preferred course slots, without trying all the timetable clashes.",
      demoLink: "https://www.youtube.com/watch?v=aWgVyqE-o-4",
      demoText: "Project Demo",
      orgLink: "https://github.com/iNTUition-10/ORBITs",
      orgText: "Organization",
    },
  ];

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
          {projectData.map((project, index) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              key={index}
              className="project-card"
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
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
                    {project.demoLink && (
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
                          href={project.demoLink}
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
                          <CgWebsite /> &nbsp; {project.demoText}
                        </Button>
                      </Col>
                    )}
                    {project.orgLink && (
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
                          href={project.orgLink}
                          target="_blank"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <BsGithub /> &nbsp; {project.orgText}
                        </Button>
                      </Col>
                    )}
                    {project.reportLink && (
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
                          href={project.reportLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <TbReportSearch /> &nbsp; {project.reportText}
                        </Button>
                      </Col>
                    )}
                  </Row>
                }
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
