import { React, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import AboutMe from "./components/AboutMe";
import Counters from "./components/Counters";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
function App() {


  return (
    <Container fluid style={{ background: "rgb(0,0,0)" }} >
      <Header />
      <Container>
        <Row className="firstSection">
          <Col className="col-4">
            <Avatar />
          </Col>
          <Col className="col-8">
            <AboutMe />
          </Col>
        </Row>
        <Row className="mx-3 py-4">
          <Counters />
        </Row>
        <Row className="d-flex flex-column justify-content-center" id="projects" style={{background: `radial-gradient(rgb(36, 35, 35), #000)`}}>
          <h1 className="text-center py-5 display-4 text-white">Projects.</h1>
          <Row className="align-items-center">
            <Projects />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center bg-danger mt-5 p-4" id="skills" style={{background: `radial-gradient(rgb(36, 35, 35), #000)`}}>
          <h1 className="text-center display-4 text-white">Skills.</h1>
          <Row>
            <Skills />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center bg-danger mt-5 p-2" id="skills" style={{background: `radial-gradient(rgb(36, 35, 35), #000)`}}>
          <h1 className="text-center display-4 text-white">Certificates.</h1>
          <Row>
            <Certificates />
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
