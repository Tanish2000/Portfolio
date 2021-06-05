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
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (
    <Container fluid style={{ background: "rgb(0,0,0)" }} >
      <Header/>
      <Container className="mx-auto">
        <Row className="pt-4">
          <Col className="col-md-4 col-12">
            <Avatar />
          </Col>
          <Col className="col-md-8 col-12">
            <AboutMe />
          </Col>
        </Row>
        <Row className="mx-3 py-4">
          <Counters />
        </Row>
        <div className="d-flex flex-column" id="projects" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="py-5 text-center display-4 text-white">Projects.</h1>
          <div>
            <Projects />
          </div>
        </div>
        <Row className="d-flex flex-column justify-content-center mt-5 p-4" id="skills" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="text-center display-4 text-white">Skills.</h1>
          <Row>
            <Skills />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-5 p-2 d-md-block d-none" id="skills" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="text-center display-4 text-white d-md-block d-none">Certificates.</h1>
          <Row>
            <Certificates />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-5" id="skills" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="text-center display-4 text-white">Let's catch up.....</h1>
          <Row>
            <Contact />
          </Row>
        </Row>
      </Container>
      <Row id="skills" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
        <Col className="pt-4 mt-3">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
