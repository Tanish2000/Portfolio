import React from 'react';
import './components_css/Avatar.css';
import Image from '../img/avatar.jpg';
import Instagram from '../img/instagram.svg';
import Linkedin from '../img/linkedin.svg';
import Github from '../img/github.svg';
import Gmail from '../img/gmail.svg';

function Avatar() {
    return (
        <>
        <div className="row text-center">
            <div className="col-12" >
                <img src={Image} className="AvatarImg" />
            </div>
            <div  className="col-12">
                <a href="https://www.instagram.com/tanish8651/" target="_blank"><img src={Instagram} /></a>
                <a href="https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/" target="_blank"><img src={Linkedin} /></a>
                <a href="https://github.com/Tanish2000" target="_blank"><img src={Github} /></a>
                <a href="mailto:chouhantanish@gmail.com" target="_blank"><img src={Gmail} /></a>
            </div>
        </div>
        </>
    )
}

export default Avatar;
