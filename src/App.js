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

function App() {
  

  return (
    <Container
      fluid
      style={{ background: "rgb(0,0,0,0.94)" }}
    >
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
        <Row>
          <Counters className="my-5"/>
        </Row>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
