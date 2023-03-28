import React, { useState } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import jsLogo from "./js_logo.png";
import nodeLogo from "./node_logo.png";
import reactLogo from "./react_logo.png";
import "./Studies.css";


function Studies() {
    const [moduleDesc, setModuleDesc] = useState("");
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    // Handle Click on Modal
    const handleModalClick = (event) => {
        const value = event.target.id;
        switch (value) {
            case "dadsa":
                setModalTitle("Design & Analysis of Data Strucutres & Algorithms ");
                setModuleDesc("Sort & Search Methods, Algorithm Design Strategies, Data Structure Evaluation");
                setShow(true);
                break;
            case "oo":
                setModalTitle("Object Oriented Systems Development");
                setModuleDesc("Class Modularisation, Software System Development following SDLC with Agile Approach");
                setShow(true);
                break;
            case "dsa":
                setModalTitle("Data, Schemas & Applications");
                setModuleDesc("Full stack application development for a collaborative project");
                setShow(true);
                break;
            case "itp":
                setModalTitle("IT Project: Client Work");
                setModuleDesc("Project Lead on research project with client from UWE IT services. Research project on implementation of a Metaverse in educational context");
                setShow(true);
                break;
            default:
                break;
        }
    }

    // Handle Modal Close
    const handleClose = () => {
        setShow(false);
    }

    return (
        <Container>
            <Row>
                <h1 className="d-flex justify-content-center align-items-center p-3" id="sHeader">STUDIES</h1>
                <p className="text-muted d-flex justify-content-center align-items-center p-3">With a real desire & passion for learning I'm always looking for new opportunities</p>
                <Col style={{ borderRight: "2px solid black" }}>
                    <h3 className="d-flex justify-content-center align-items-center p-3">Current Studies</h3>
                    <h5>BSc (Hons) Software Engineering for Business </h5>
                    <p>@ <a href="https://courses.uwe.ac.uk/6F3B/software-engineering-for-business" target="_blank" rel="noreferrer">University of the West of England</a></p>
                    <p>3 Year Undergraduate degree in computing fundamenetals, programming paradigms and project management</p>
                    <p className="text-muted">Accredited by <a href="https://techskills.org/" target="_blank" rel="noreferrer">TechSkills</a></p>
                    <p>My favourite modules I've completed;</p>
                    <ListGroup style={{ width: "45vh" }}>
                        <ListGroupItem onClick={handleModalClick} id="dadsa">Data Structures & Algorithms</ListGroupItem>
                        <ListGroupItem onClick={handleModalClick} id="oo">Object-Oriented Systems Development</ListGroupItem>
                        <ListGroupItem onClick={handleModalClick} id="dsa">Data, Schemas & Applications</ListGroupItem>
                        <ListGroupItem onClick={handleModalClick} id="itp">IT Project: Client Work</ListGroupItem>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{modalTitle}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{moduleDesc}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </ListGroup>
                </Col>
                <Col>
                    <h3 className="d-flex justify-content-center align-items-center p-3">Finished Studies</h3>
                    <h5 >Front End Development Bootcamp</h5>
                    <p>@ <a href="https://skillsforlife.edx.org/#:~:text=This%20course%20provides%20students%20with,js%2C%20ES6%2C%20and%20Node." target="_blank" rel="noreferrer"> edX</a></p>
                    <p>16-week intense coding bootcamp, learning Front End development using the latest technologies</p>
                    <p className="text-muted">Created 13 websites + 2 unique projects using range of API's, methodologies & practices</p>
                    <h5 className="d-flex justify-content-center align-items-center">Technologies Used:</h5>
                    <Container className="d-flex justify-content-center align-items-center p-3">
                        <ListGroup style={{ width: "45vh" }}>
                            <ListGroupItem>React</ListGroupItem>
                            <ListGroupItem>ES6</ListGroupItem>
                            <ListGroupItem>Node.js</ListGroupItem>
                            <ListGroupItem>jQuery</ListGroupItem>
                        </ListGroup>
                        <img src={reactLogo} className="logos" alt="Logos"/>
                        <img src={nodeLogo} className="logos" alt="Logos"/>
                        <img src={jsLogo} className="logos" alt="Logos"/>
                    </Container>

                </Col>
            </Row>

        </Container>
    )
}

export default Studies;