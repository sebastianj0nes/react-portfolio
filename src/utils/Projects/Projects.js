import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Projects.css";
import lca from "./Images/LCA_H.png";
import tca from "./Images/TCA_H.png";
import glogo from "./Images/github_logo.png";


function Projects() {

    // What projects do I want to display?
    // React - ChatGPT Fun/ Robots vs Reporters
    // Javascript - Weather App/ Twin Cities Docs
    // Fullstack - Twin Cities App/ Luxury Campsite System
    // Node - Team Generator/ Readme Generator

    return (
        <Container>
            <Row>
                <h1 className="d-flex justify-content-center align-items-center p-3">Projects</h1>
                <p className="d-flex justify-content-center align-items-center">During my developer journey, I've built many projects using a range of technologies. </p>
                <p className="d-flex justify-content-center align-items-center text-muted">Scroll to see what I've made</p>
                <Row>
                    <h1 className="mb-4 text-underline" style={{ textDecoration: 'underline' }}>FULLSTACK: </h1>
                    <Col id="fullStack">
                        <h3>Luxury Campsite Accommodation System</h3>
                        <img src={lca} className="projectImg" />
                    </Col>
                    <Col className="m-4">
                        <h4>Building an accommodation system for a luxury campsite owner to manage guest bookings</h4>
                        <h5>Designed & Built to a specification.</h5>
                        <p>Following the SDLC with an Agile approach</p>
                        <p>Designed with Astah using use-case, class and sequence diagrams</p>
                        <p>Then using Scene Builder to conceptualise the GUI</p>
                        <p>After the GUI was built, implementing class functionality using JavaFX</p>
                        <a href="https://github.com/sebastianj0nes/luxury-campsite-gui" target="_blank"><img src={glogo} className="glogo"/></a>
                        <h3 className="mt-4">Tech Stack:</h3>
                        <p>JavaFX, Scene Builder, Astah</p>
                    </Col>
                    <h3>Twin Cities Application</h3>
                    <img src={tca} className="projectImg" />
                    <Col className="m-4">
                        <h4>Weather & Map application on two twin cities, Munich & Edinburgh</h4>
                        <p>Pulling weather data using Openweather API about Twin Cities, Edinburgh & Munich</p>
                        <p>Using mySQL database to host information about point of interests to display on the map, displayed using Google Maps API</p>
                        <p>6 points of interest for each city, on hover displays more information </p>
                        <a href="https://github.com/sebastianj0nes/twin-cities-application" target="_blank"><img src={glogo} className="glogo"/></a>
                    </Col>
                    <Col>
                        <h3 className="mt-5">Tech Stack:</h3>
                        <ListGroup>
                            <ListGroupItem>PHP</ListGroupItem>
                            <ListGroupItem>Javascript</ListGroupItem>
                            <ListGroupItem>mySQL</ListGroupItem>
                            <ListGroupItem>PHPMyAdmin</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Row>

        </Container>
    )

}








export default Projects;