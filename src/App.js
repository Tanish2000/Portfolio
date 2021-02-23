import { React, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Avatar from "./components/Avatar";
import AboutMe from "./components/AboutMe";
import Counters from "./components/Counters";
import Projects from "./components/Projects";

function App() {


  return (
    <Container fluid style={{ background: "rgb(0,0,0,0.94)" }} >
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
        <Row className="d-flex flex-column justify-content-center" id="projects">
          <h1 className="text-center py-5 display-4 text-white"><big>Projects.</big></h1>
          <Row className = "align-items-center">
            <Projects />
          </Row>
        </Row>

      </Container>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
