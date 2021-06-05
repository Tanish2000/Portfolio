import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CovidTracker from "../img/virus.svg";
import SatTracker from '../img/projects_icon/satellite_tracker.jpg';
import hopeplasma from '../img/hopeplasma.png';

function Projects() {


    const styles = {
        image: {
            height: 'auto',
            maxWidth: '40%'
        }
    }

    return (
        <div className="row d-flex justify-content-around align-items-center">
            <div className="col-12 col-md-3 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #731a1a' }} className="card">
                    <Card.Img variant="top" src={hopeplasma} style={{
                        height: 'auto',
                        maxWidth: '80%'
                    }} className="my-4 mx-auto" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center">Hope Plasma </Card.Title>
                        <p className="text-center text-white">(Plasma Donation Website)</p>
                        <Card.Text className="text-white py-2">
                            <p className="text-center">Technology : <b>MERN Stack</b> </p>
                            <p className="text-center"> A place where you can register yourself as plasma donor or as a patient. Then you will get the details of the nearest donor to your place through SMS.</p>
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="/" target="_blank">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://hopeplasma.herokuapp.com/" target="_blank">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-3 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #21109a' }} className="card">
                    <Card.Img variant="top" src={CovidTracker} style={{
                        height: 'auto',
                        maxWidth: '53%'
                    }} className="my-4 mx-auto" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center">Vaccitrack</Card.Title>
                        <p className="text-center text-white">(Covid-19 Vaccination Tracker)</p>
                        <Card.Text className="text-white py-2">
                            <p className="text-center">Technology : <br/><b> HTML | CSS | JS | Bootstrap</b> </p>
                            <p className="text-center"> A place where you can track the progress of Covid vaccinations acroos the globe. You can also check the current scenario of COVID in India.</p>
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Tanish2000/VacciTrack" target="_blank">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://vaccitrack.tk/" target="_blank">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-3 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #731a1a' }} className="card">
                    <Card.Img variant="top" src={SatTracker} style={{
                        height: 'auto',
                        maxWidth: '55%'
                    }} className="my-4 mx-auto" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center">AstroSat</Card.Title>
                        <p className="text-center text-white">(Satellite Tracker)</p>
                        <Card.Text className="text-white py-2">
                            <p className="text-center">Technology : <br/><b>HTML | CSS | JS</b> </p>
                            <p className="text-center"> Tracking the International Space Station with the coordinates fetched from an API and displaying the movement of ISS on the world map with live data.</p>
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Tanish2000/Satellite_tracker" target="_blank">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://astrosat.netlify.app/" target="_blank">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projects
