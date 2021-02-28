import { React, useState } from 'react';
import { ProgressBar, Col } from 'react-bootstrap';
import DownloadImage from "../img/downloadImage.png";
import AnimatedDownloadImage from '../img/animatedDownloadGif.gif';
import Resume from '../img/TanishSinghChouhan_Resume_Dec2020.pdf'

function Skills() {
    const [animation, setanimation] = useState(false);


    return (
        <>
            <style type="text/css">
                {`
                .bg-custom {
                    background-image: linear-gradient(to right top, #090f17, #173843, #246563, #579272, #a7bc78);
                    color: white;
                    font-size : 16px;
                    box-shadow : inset 0 0 10px #6FF000;
                }
                .progress-bar {
                    text-align : center;
                    padding : 0px 5px;                    
                }

                .bg-color{
                    background-image: linear-gradient(to right top, #0a0a0b, #3d2738, #803e46, #ad6937, #aaa830);
             `}
            </style>
            <Col className="col-6">
                <ProgressBar variant="custom" now={80} label={`HTML - ${80}%`} className="m-3 px-1 py-1 h-75 bg-color h1  rounded-left" />
            </Col>
            <Col className="col-6">
                <ProgressBar variant="custom" now={65} label={`CSS- ${65}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
            </Col>
            <Col className="col-6">
                <ProgressBar variant="custom" now={50} label={`JavaScript- ${50}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
            </Col>
            <Col className="col-6">
                <ProgressBar variant="custom" now={40} label={`Python- ${40}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
            </Col>
            <Col className="col-6">
                <ProgressBar variant="custom" now={20} label={`ML- ${20}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
            </Col>
            <Col className="col-6">
                <ProgressBar variant="custom" now={70} label={`C++- ${70}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
            </Col>
            <Col className="mt-3 d-flex flex-column justify-content-center text-white align-items-center">
                <h3>Download my Resume</h3>
                <a href={Resume} download><img src={animation ? AnimatedDownloadImage : DownloadImage} style={{ width: '10vw', height: '22vh' }} onClick={() => setanimation(prevMode => !prevMode)} />
                </a>
            </Col>
        </>
    )
}

export default Skills;
