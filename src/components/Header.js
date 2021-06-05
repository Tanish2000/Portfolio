import React from 'react';
import './components_css/Header.css';
import Torch from "./sub_components/Torch";
import IntroLines from './sub_components/IntroLines';

const Header = () => {

  return (
    <div className="d-none d-md-block">
      <div className="intro bg-dark text-light">
        <Torch />
        <h3 className="name display-4 text-center">Tanish Singh Chouhan.</h3>
        <IntroLines />
      </div>
    </div>
  );

};


export default Header;

