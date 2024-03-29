import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/Header";
import HeaderMini from "./components/HeaderMini";
import Avatar from "./components/Avatar";
import AboutMe from "./components/AboutMe";
import Counters from "./components/Counters";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particle from './components/Particles';
import './App.css';

function App() {
  return (
    <Container fluid style={{ background: "rgba(0,0,0,0.98)", boxShadow: "rgb(41 24 22 / 88%) 0px -9px 12px 3px inset", position: 'absolute' }} >
      <Particle />
      <Header />
      <HeaderMini />
      <Container className="mx-auto" style={{ zIndex : 9999 }}>
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
        <Row className="d-flex align-items-center justify-content-around" id="projects" style={{ background: `radial-gradient(rgb(80, 35, 35), #000)` }} >
          <div>
            <h1 className="py-5 text-center display-4 text-white" >Projects.</h1>
            <Projects />
          </div>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-5 p-4" id="skills" style={{ background: `radial-gradient(rgb(40, 50, 35), #000)` }}>
          <h1 className="text-center display-4 text-white">Skills.</h1>
          <Row>
            <Skills />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-5 p-2" id="certificates" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="text-center display-4 text-white d-xl-block d-none">Certificates.</h1>
          <Row>
            <Certificates />
          </Row>
        </Row>
        <Row className="d-flex flex-column justify-content-center mt-5" id="contact" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
          <h1 className="text-center display-4 text-white py-4">Let's catch up.....</h1>
          <Row>
            <Contact />
          </Row>
        </Row>
      </Container>
      <Row id="skills" style={{ background: `radial-gradient(rgb(36, 35, 35), #000)` }}>
        <Col className="pt-4 mt-2 px-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
