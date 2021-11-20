import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Calendar from "../img/projects_icon/calendar.png";
import SatTracker from '../img/projects_icon/satellite_tracker.jpg';
import hopeplasma from '../img/projects_icon/blood-donation.png';

function Projects() {

    return (

        <div className="row">
            <div className="col-12 col-md-4 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #731a1a' }} className="mx-auto">
                    <Card.Img variant="top" src={hopeplasma} style={{
                        height: 'auto',
                        maxWidth: '60%'
                    }} className="my-4 mx-auto" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center" style={{ fontSize :'22px'}}>Hope Plasma </Card.Title>
                        <p className="text-center text-white">(Plasma Donation Website)</p>
                        <Card.Text className="text-white text-center py-2">
                            <u>Technology</u> <br /><b>MERN Stack</b> <br />
                            A place where you can register yourself as plasma donor or as a patient. Then you will get the details of the nearest donor to your place through SMS.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Tanish2000/HopePlasma" target="_blank" rel="noreferrer">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://hopeplasma.herokuapp.com/" target="_blank" rel="noreferrer">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-4 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #21109a' }} className="mx-auto">
                    <Card.Img variant="top" src={Calendar} style={{
                        height: 'auto',
                        maxWidth: '46%'
                    }} className="my-4 mx-auto py-1" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center" style={{ fontSize :'22px'}}>CpCalendar</Card.Title>
                        <p className="text-center text-white">(Competitive Programming Calendar)</p>
                        <Card.Text className="text-white text-center ">
                            <u>Technology</u> <br /><b>MERN Stack</b> <br />
                            A place where you can track all the upcomimg Competitive Programming Contests.
                            It gets updated every single hour. You can also subscribe to a email reminder service there.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Tanish2000/cpcalendar" target="_blank" rel="noreferrer">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://cpcalendar.netlify.app/" target="_blank" rel="noreferrer">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-12 col-md-4 my-3">
                <Card style={{ width: '18rem', background: `black`, boxShadow: 'inset 0 0 10px #731a1a' }} className="mx-auto">
                    <Card.Img variant="top" src={SatTracker} style={{
                        height: 'auto',
                        maxWidth: '57%'
                    }} className="my-4 mx-auto py-1" />
                    <Card.Body>
                        <Card.Title className="text-danger text-center" style={{ fontSize :'22px'}}>AstroSat</Card.Title>
                        <p className="text-center text-white">(Satellite Tracker)</p>
                        <Card.Text className="text-white  text-center py-2">
                            <u>Technology</u> <br /><b>HTML | CSS | JS</b> <br />
                            Tracking the International Space Station with the coordinates fetched from an API and displaying the movement of ISS on the world map with live data.
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Tanish2000/Satellite_tracker" target="_blank" rel="noreferrer">
                                <Button variant="primary">Github Repo</Button>
                            </a>
                            <a href="https://astrosat.netlify.app/" target="_blank" rel="noreferrer">
                                <Button variant="primary" className="mx-2">Live Demo</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projects;
