import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import gmail from "./Images/gmailLogo.png";
import twitter from "./Images/twitterLogo.png";
import github from "./Images/github_logo.png";

function About() {

    return (
        <Container>
            <Col>
                <Row>
                    <h1 className="d-flex justify-content-center align-items-center p-3" id="header">ABOUT</h1>
                    <p className="d-flex justify-content-center align-items-center p-3">Software Engineer curious to learn more</p>
                    <p className="text-muted d-flex justify-content-center align-items-center">Based in Bristol</p>
                    <p className="d-flex justify-content-center align-items-center">Enjoy creative processes</p>
                </Row>
                <Row>
                    <h1 className="d-flex justify-content-center align-items-center p-3">Contact Me</h1>
                    <Col className="d-flex justify-content-center align-items-center p-3">
                        <a href="mailto:jonesseb10@gmail.com"><img alt="Logo" src={gmail} className="logos m-3"/></a>
                        <a href="https://twitter.com/SeFB258" target="_blank" rel="noreferrer" ><img alt="Logo" src={twitter} className="logos m-3"/></a>
                        <a href="https://github.com/sebastianj0nes" target="_blank" rel="noreferrer"><img alt="Logo" src={github} className="logos m-3"/></a>

                    </Col>
                </Row>

            </Col>
        </Container>
    )

}

export default About;