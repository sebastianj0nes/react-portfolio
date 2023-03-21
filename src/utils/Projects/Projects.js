import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./Projects.css";
import lca from "./Images/LCA_H.png";


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
                    <h1 className="mb-4">FULLSTACK: </h1>
                    <Col id="fullStack">
                        <h3>Luxury Campsite Accommodation System</h3>
                        <img src={lca} className="projectImg" />
                    </Col>
                    <Col className="m-4">
                        <h4>Building an accommodation system for a luxury campsite owner to check in guest bookings</h4>
                        <h5>Designed & Built to a specification.</h5>
                        <p>Following the SDLC with an Agile approach</p>
                        <p>Designed with Astah using use-case, class and sequence diagrams</p>
                        <p>Then using Scene Builder to conceptualise the GUI</p>
                        <p>After the GUI was built, implementing class functionality using JavaFX</p>

                        <h3 className="mt-5">Tech Stack:</h3>
                        <p>JavaFX, Scene Builder, Astah</p>
                    </Col>
                </Row>
            </Row>

        </Container>
    )

}








export default Projects;