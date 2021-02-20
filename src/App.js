import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from './components/Header';
import Avatar from './components/Avatar';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <Container fluid style={{ background: 'radial-gradient(rgb(36, 35, 35), #000)' }}>
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
      </Container>
    </Container>
  );
}

export default App;
