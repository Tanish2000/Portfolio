import React from 'react';
import './components_css/AboutMe.css';
import {Container , Row} from 'react-bootstrap'

function AboutMe() {
    return (
        <Container >
            <Row>
                <h1 className="display-4 text-white">About me.</h1>
            </Row>
            <Row>
                <p className="text-justify text-white mt-4 p-2 lead" style={{fontSize : '22px'}}>Hi I am <b>Tanish Singh Chouhan</b>, a 20 years old Web developer , an Undergraduate, and a Competitive Programmer living in Indore, India. I am a Computer Applications student, currently in the third year of  Integrated MCA course.</p>
                <p className="text-justify text-white mt-3 p-2 lead" style={{fontSize : '22px'}}>My interests include playing Table Tennis, a bit of music production, and solving programming problems. I am an active participant on Codechef and a team member in the CodeChef College Chapter.</p>
                <p className="text-justify text-white mt-3 p-2 lead" style={{fontSize : '22px'}}>Have a look at my <a href="https://github.com/Tanish2000" target="_blank">Github</a> profile , my skills or just connect with me on <a href='https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/' target='_blank'>LinkedIn.</a> I am always excited to learn new things from like minded people.</p>
            </Row>
        </Container>
    )
}

export default AboutMe;
