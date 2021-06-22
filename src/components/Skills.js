import { React, useState } from 'react';
import { ProgressBar, Col } from 'react-bootstrap';
import DownloadImage from "../img/dimage.gif";
import AnimatedDownloadImage from '../img/download.gif';
import Resume from '../img/Resume(Tanish Singh Chouhan) June2021.pdf'

function Skills() {
    const [animation, setanimation] = useState(false);

    const animate = () => {
        setanimation( prevMode=> !prevMode);
        setTimeout( ()=> {setanimation( animation=> !animation)} , 5000 );
    }


    return (
        <div className="d-flex flex-column container">
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
                }

                .dImage{
                    height:auto;
                    min-width: 20%; 
                }
             `}
            </style>
            <div className="row mx-md-5">
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={80} label={`HTML - ${80}%`} className="m-3 px-1 py-1 h-75 bg-color h1 rounded-left" />
                </div>
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={65} label={`CSS- ${65}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
                </div>
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={55} label={`JS- ${55}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
                </div>
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={45} label={`Python- ${45}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
                </div>
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={60} label={`C++- ${60}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
                </div>
                <div className="col-md-6 col-12">
                    <ProgressBar variant="custom" now={45} label={`React- ${45}%`} className="m-3 px-1 py-1 h-75 bg-color h1" />
                </div>
            </div>

            <div className="mt-3 d-flex flex-column justify-content-center text-white align-items-center">
                <h6>Download Resume</h6>
                <a href={Resume} download><img src={animation ? AnimatedDownloadImage : DownloadImage} className="dImage" onClick={animate} />
                </a>
            </div>

        </div>
    )
}

export default Skills;
