import React from "react";
import Container from "react-bootstrap/Container";
import IntroLines from './components/IntroLines';
import ScriptTag from 'react-script-tag';
import "./App.css";
import Torch from "./components/Torch";
import BgAnimation from './components/BgAnimation'

function App() {
  return (
    <>
      <Container fluid="md" className="main">
        <div className="intro">
          <BgAnimation />
          <Torch />
          <h3 className="name display-4 text-center">Tanish Singh Chouhan.</h3>
          <IntroLines />          
        </div>
      </Container>
    </>
  );
}

export default App;
