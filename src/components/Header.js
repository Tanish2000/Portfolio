import React from 'react';
import './components_css/Header.css';
import Torch from "./sub_components/Torch";
import IntroLines from './sub_components/IntroLines';


const Header = () => {

  const styles = {
    btn: {
      borderRadius: '50px',
      boxShadow: 'rgb(252 42 64) 4px 1px 7px inset',
      zIndex : 9999,
    },
    cup: {
      fontSize: '22px',
      textAlign: 'center'
    }
  }

  return (
    <div className="d-none d-xl-block">
      <div className="intro text-light">
        <Torch />
        <h3 className="name display-4 text-center">Tanish Singh Chouhan.</h3>
        <IntroLines />
        <button style={styles.btn} className="btn btn-primary px-4 py-2 m-1 bg-transparent">
          <a href="#contact" className="text-white">
            <span style={styles.cup}>☕</span> COFFEE WITH ME
          </a>
        </button>
      </div>
    </div>
  );

};


export default Header;

