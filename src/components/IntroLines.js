import React from "react";
import IndianFlag from "../img/india.png";

const IntroLines = () => {
  return (
    <div>
      <h4 className="wordCarousel">    
        <span style={{fontWeight : '200' , color : 'white'}}>I am</span>  
        <div> 
            <ul className="flip"> 
                <li>an Undergrad Student&nbsp;<i className="fas fa-graduation-cap" style={{color : '#2aa2f7'}}></i></li>
                <li>a Web Developer&nbsp;<i className="fas fa-file-code"  style={{color : '#ff6f47'}}></i></li>
                <li>a Proud Indian&nbsp;<img src={IndianFlag} style={{width : '50px',height : '50px'}}/></li> 
                <li>a Competitive Programmer&nbsp;<i className="fas fa-network-wired" style={{color : '#ec7efc'}}></i></li>  
            </ul>
        </div>  
    </h4>
    </div>
  );
};

export default IntroLines;
