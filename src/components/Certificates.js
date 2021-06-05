import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CNptel from "../img/C-Nptel.jpg";
import Algo_box from '../img/algoritmic_toolbox.png';
import Right from '../img/rightIcon.png';
import Left from '../img/leftIcon.png';

function Certificates() {
    return (
        <div className="m-auto py-3 d-md-block d-none">
            <style>
                {`
                  .carousel-indicators li {
                    background-color: gray;
                  }
                  .carousel-indicators .active {
                    background-color: black;
                  }
                  .carousel-control-next-icon{
                      background-image : url(${Right});
                  }
                  .carousel-control-prev-icon{
                    background-image : url(${Left});
                  }
                `}
            </style>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={Algo_box}
                        alt="First slide"
                        style={{ height: '80vh', width: '55vw' }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={CNptel}
                        alt="Second slide"
                        style={{ height: '80vh', width: '55vw' }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Certificates
