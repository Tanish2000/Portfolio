import React from "react";
import flashLight from "../../img/red.gif";
import '../components_css/Torch.css'


const Torch = () => {
    return (
      <div className="torch">
        <img src={flashLight} style={{width : '160px',height : '140px'}}/>
      </div>
    );
  };
  
  export default Torch;
  