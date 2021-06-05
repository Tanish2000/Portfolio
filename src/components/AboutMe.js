import React from 'react';
import './components_css/AboutMe.css';
import {Container , Row} from 'react-bootstrap'

function AboutMe() {
    return (
        <div className="row">
            <div className="col-12">
                <h1 className="display-4 text-white text-center">About me.</h1>
            </div>
            <div className="px-2">
                <p className="text-left text-white mt-2 p-2" style={{fontSize : '19px'}}>Hi , I am <b>Tanish Singh Chouhan</b>, a 21 years old Web developer, an Undergraduate, and a Competitive Programmer living in Indore, India. I am a Computer Applications student, currently in the third year of  Integrated MCA course.</p>
                <p className="text-left text-white mt-2 p-2" style={{fontSize : '19px'}}>My interests include playing Table Tennis, a bit of music production, and solving programming problems. I am an active participant on Codechef and a team member in the CodeChef College Chapter.</p>
                <p className="text-left text-white mt-2 p-2" style={{fontSize : '19px'}}>Have a look at my <a href="https://github.com/Tanish2000" target="_blank">Github</a> profile , my skills or just connect with me on <a href='https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/' target='_blank'>LinkedIn.</a> I am always excited to learn new things from like minded people.</p>
            </div>
        </div>
    )
}

export default AboutMe;
