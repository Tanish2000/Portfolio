import React from 'react';
import FooterImg from '../img/footer2.png';
import { Col, Row } from 'react-bootstrap';
import '../components/components_css/Footer.css';
import Instagram from '../img/instagram.svg';
import Linkedin from '../img/linkedin.svg';
import Github from '../img/github.svg';
import Gmail from '../img/gmail.svg';




function Footer() {
    const Styles = {
        width: '55vw',
        height: '22vh'
    }
    return (
        <>
            <Row>
                <Col className="col-4 m-auto">
                    <h5 className="text-white">No &copy; copyright issues.</h5>
                    <p className="text-white lead">Feel free to copy. If you need any help, ping me !</p>
                </Col>
                <Col className="col-4 text-center">
                    <h5 className="text-white namefoot" >Tanish Singh Chouhan</h5>
                    <p className="text-white lead p-2">Made with &#10084; in India</p>
                </Col>
                <Col className="col-4 m-auto text-center">
                    <h5 className="text-white">You can find me everywhere!</h5>
                    <Row className="justify-content-center">
                        <a href="https://www.instagram.com/tanish8651/" target="_blank"><img src={Instagram} /></a>
                        <a href="https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/" target="_blank"><img src={Linkedin} /></a>
                        <a href="https://github.com/Tanish2000" target="_blank"><img src={Github} /></a>
                        <a href="mailto:chouhantanish@gmail.com" target="_blank"><img src={Gmail} /></a>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={FooterImg} style={Styles} className="m-0 p-0"/>
                </Col>
            </Row>
        </>
    )
}

export default Footer;
