import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import Adverfox from "../img/projects_icon/adverfox.png";
import SatTracker from '../img/projects_icon/satellite_tracker.jpg';
import AlVisualizer from '../img/projects_icon/alvisualizer3.jpg';
import './components_css/Projects.css';

function Projects() {

    return (
        <>
            <Col className="col-3 text-center mx-auto my-3">
                <Card style={{ width: '18rem', background: `black` ,  boxShadow :'inset 0 0 10px #731a1a' }} className = "card">
                    <Card.Img variant="top" src={Adverfox} style={{ height: '25vh', width: '12vw' }} className="mx-auto my-3" />
                    <Card.Body>
                        <Card.Title className="text-danger shadow-lg">Adverfox</Card.Title>
                        <Card.Text className="text-white">
                            A chrome extension for blocking ads. Using this extension you can get rid of useless advertisements and will have a flawless browsing experience.
                    </Card.Text>
                        <a href="https://github.com/Tanish2000/AdverFox-Chrome-Extension" target="_blank">
                            <Button variant="primary">Github Repo</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-3 text-center mx-auto my-3">
                <Card style={{ width: '18rem', background: `black` ,  boxShadow :'inset 0 0 10px #1a3373' }} className = "card">
                    <Card.Img variant="top" src={SatTracker} style={{ height: '25vh', width: '12vw' }} className="mx-auto my-3" />
                    <Card.Body>
                        <Card.Title className="text-primary shadow-lg">Satellite Tracker</Card.Title>
                        <Card.Text className="text-white">
                        Tracking the International Space Station with the coordinates fetched from an API and displaying the movement of ISS on the world map with live data.
                    </Card.Text>
                        <a href="https://github.com/Tanish2000/Satellite_tracker" target="_blank">
                            <Button variant="primary">Github Repo</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-3 text-center mx-auto my-3">
                <Card style={{ width: '18rem', background: `black` ,  boxShadow :'inset 0 0 10px #731a1a' }} className = "card">
                    <Card.Img variant="top" src={AlVisualizer} style={{ height: '25vh', width: '17vw' }} className="mx-auto my-3" />
                    <Card.Body>
                        <Card.Title className="text-danger shadow-lg">Algorithms Visualizer</Card.Title>
                        <Card.Text className="text-white">
                            An visualizer where you can visualize different Searching and Sorting Algorithms. Here, you can understand an algorithm with the help of graphical representations. 
                    </Card.Text>
                        <a href="https://github.com/Tanish2000/Algorithms-Visualiser" target="_blank">
                            <Button variant="primary">Github Repo</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Projects
