import React from "react";
import flashLight from "../img/flashlight.svg";
import '../App.css'


const Torch = () => {
    return (
      <div className="torch">
        <img src={flashLight} style={{width : '90px',height : '90px'}}/>
      </div>
    );
  };
  
  export default Torch;
  