import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from './components/Header';

function App() {
  return (
    <>
      <Container fluid="md" className="main" theme='dark'>
        <Header/>
      </Container>
    </>
  );
}

export default App;
