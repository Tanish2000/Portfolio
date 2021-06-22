import React from 'react';
import FooterImg from '../img/footer2.png';
import { Col, Row } from 'react-bootstrap';
import Instagram from '../img/instagram.svg';
import Linkedin from '../img/linkedin.svg';
import Github from '../img/github.svg';
import Gmail from '../img/gmail.svg';
import background from '../img/Slanted-Gradient.svg';




function Footer() {
    const Styles = {
        footImg: {
            width: '55vw',
            height: '22vh'
        },
        name: {
            fontFamily: `"Italianno", cursive`,
            fontSize: '45px',
            textShadow: '2px 2px 2px rgb(207, 131, 131)'
        },
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
        }

    }
    return (
        <div className="container-fluid p-md-5 py-2" style={Styles.background}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-4 mx-auto text-center my-3">
                            <h5 className="text-white">No &copy; copyright issues.</h5>
                            <p className="text-white">Feel free to copy. If you need any help, ping me!</p>
                        </div>
                        <div className="col-12 col-md-4 text-center mx-auto my-3">
                            <h5 className="text-white" style={Styles.name} >Tanish Singh Chouhan</h5>
                            <p className="text-white">Made with &#10084; in India</p>
                        </div>
                        <div className="col-12 col-md-4 text-center mx-auto my-3">
                            <h5 className="text-white">You can find me everywhere!</h5>
                            <div className="justify-content-center">
                                <a href="https://www.instagram.com/tanish8651/" target="_blank"><img src={Instagram} /></a>
                                <a href="https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/" target="_blank"><img src={Linkedin} /></a>
                                <a href="https://github.com/Tanish2000" target="_blank"><img src={Github} /></a>
                                <a href="mailto:chouhantanish@gmail.com" target="_blank"><img src={Gmail} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;
