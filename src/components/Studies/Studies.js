import { useState } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";


function Studies() {
    const [moduleDesc, setModuleDesc] = useState("");

    const handleMouseOver = (event) => {
        const value = event.target.id;
        if (value === "dadsa"){
            setModuleDesc("");
        }
        setModuleDesc(value);
    }

    return (
        <Container>
            <Row>
                <h1 className="d-flex justify-content-center align-items-center p-3">STUDIES</h1>
                <p className="text-muted d-flex justify-content-center align-items-center p-3">With a real desire & passion for learning I'm always looking for new opportunities</p>
                <Col>
                <h3 className="d-flex justify-content-center align-items-center p-3">Current Studies</h3>
                <h5>BSc (Hons) Software Engineering for Business </h5>
                <p>@ <a href="https://courses.uwe.ac.uk/6F3B/software-engineering-for-business" target="_blank">University of the West of England</a></p>
                <p>Undergraduate degree in computing fundamenetals, programming paradigms and project management</p>
                <p className="text-muted">Accredited by <a href="https://techskills.org/" target="_blank">TechSkills</a></p>
                <p>My favourite modules I've completed;</p>
                <ListGroup style={{width: "45vh"}}>
                    <ListGroupItem onMouseOver={handleMouseOver} id="dadsa">Data Structures & Algorithms</ListGroupItem>
                    <ListGroupItem onMouseOver={handleMouseOver} id="oo">Object-Oriented Systems Development</ListGroupItem>
                    <ListGroupItem onMouseOver={handleMouseOver} id="dsa">Data, Schemas & Applications</ListGroupItem>
                    <ListGroupItem onMouseOver={handleMouseOver} id="itp">IT Project: Client Work</ListGroupItem>
                    <p className="d-flex justify-content-center align-items-center">{moduleDesc}</p>
                </ListGroup>
                </Col>
                <Col>
                <h3 className="d-flex justify-content-center align-items-center p-3">Finished Studies</h3>
                </Col>
            </Row>

        </Container>
    )
}

export default Studies;