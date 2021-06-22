import React from 'react';
import './components_css/Header.css';
import Torch from "./sub_components/Torch";
import IntroLines from './sub_components/IntroLines';
// import Particle from './Particles';


const Header = () => {

  return (
    <div className="d-none d-xl-block">
      {/* <div style={{position: 'absolute'}}>
        <Particle />
      </div> */}
      <div className="intro text-light">
        <Torch />
        <h3 className="name display-4 text-center">Tanish Singh Chouhan.</h3>
        <IntroLines />
        <button type="button" className="btn btn-secondary p-2 rounded bg-transparent"><a href="#contact" className="text-decoration-none text-white">COFFEE WITH ME</a></button>
      </div>
    </div>
  );

};


export default Header;

