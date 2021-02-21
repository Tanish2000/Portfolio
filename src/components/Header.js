import React from 'react';
import './components_css/Header.css';
import Torch from "./sub_components/Torch";
import BgAnimation from './sub_components/BgAnimation';
import IntroLines from './sub_components/IntroLines';

const Header = ()=> {

    return (
        <div className="intro bg-dark text-light">
          <BgAnimation />
          <Torch />
          <h3 className="name display-4 text-center">Tanish Singh Chouhan.</h3>
          <IntroLines />          
        </div>
    );

};


export default Header;

