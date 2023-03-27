import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Projects.css";
import lca from "./Images/LCA_H.png";
import tca from "./Images/TCA_H.png";
import glogo from "./Images/github_logo.png";
import rvsr from "./Images/RvsR_H.png";


function Projects() {

    // What projects do I want to display?
    // Javascript - Weather App/ Twin Cities Docs
    // Node - Team Generator/ Readme Generator

    return (
        <Container>
            <Row>
                <h1 className="d-flex justify-content-center align-items-center p-3" id="pHeader">PROJECTS</h1>
                <p className="d-flex justify-content-center align-items-center">During my developer journey, I've built many projects using a range of technologies. </p>
                <p className="d-flex justify-content-center align-items-center text-muted">Here's some of my favourites</p>
                <Row>
                    <Row className="mb-4">
                        <h2>Robots Vs Reporters</h2>
                        <img src={rvsr} alt="Homepage RvsR"/>
                        <Col>
                            <h4>Web game to determine which is the real article description, against ChatGPT generated description</h4>
                            <p>Using NewsData.io API to pull in an article description and title</p>
                            <p>Then using ChatGPT API to create a description based off the title</p>
                            <p>Both descriptions are shown side by side, randomly swapping each round</p>
                            <p>The user must then choose between which they think is the real article</p>
                            <p>Scoring system is kept across the rounds</p>
                            <a href="https://github.com/sebastianj0nes/twin-cities-application" target="_blank" rel="noreferrer"><img src={glogo} className="glogo" /></a>
                            <br/>
                            <a href="https://robotvsreporters.netlify.app/" target="_blank" rel="noreferrer">Try it here!</a>
                            <h4 className="mt-4">Tech Stack:</h4>
                            <p>React, ChatGPT API, MUI, Node, NewsData API</p>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <h2>Luxury Campsite Accommodation System</h2>
                        <img src={lca} alt="Homepage Luxury Campsite System"/>
                    <Col className="m-4">
                        <h4>Building an accommodation system for a luxury campsite owner to manage guest bookings</h4>
                        <h5>Designed & Built to a specification.</h5>
                        <p>Following the SDLC with an Agile approach</p>
                        <p>Designed with Astah using use-case, class and sequence diagrams</p>
                        <p>Then using Scene Builder to conceptualise the GUI</p>
                        <p>After the GUI was built, implementing class functionality using JavaFX</p>
                        <a href="https://github.com/sebastianj0nes/luxury-campsite-gui" target="_blank" rel="noreferrer"><img src={glogo} className="glogo" /></a>
                        <h4 className="mt-4">Tech Stack:</h4>
                        <p>JavaFX, Scene Builder, Astah</p>
                    </Col>
                    </Row>
                    <Row className="mb-4">
                    <h2>Twin Cities Application</h2>
                    <img src={tca} alt="Twin Cities Application Homepage"/>
                    <Col className="m-4">
                        <h4>Weather & Map application on two twin cities, Munich & Edinburgh</h4>
                        <p>Pulling weather data using Openweather API about Twin Cities, Edinburgh & Munich</p>
                        <p>Using mySQL database to host information about point of interests to display on the map, displayed using Google Maps API</p>
                        <p>6 points of interest for each city, on hover displays more information </p>
                        <a href="https://github.com/sebastianj0nes/twin-cities-application" target="_blank" rel="noreferrer"><img src={glogo} className="glogo" /></a>
                        <h4 className="mt-5">Tech Stack:</h4>
                        <p>PHP, Javascript, mySQL, PHPMyAdmin</p>
                        <p className="text-muted">I also made some documentation for this app! Find it <a href="https://sebastianj0nes.github.io/twin-cities-documentation/" target="_blank" rel="noreferrer">here!</a></p>
                    </Col>
                    </Row>
                </Row>
            </Row>

        </Container>
    )

}








export default Projects;