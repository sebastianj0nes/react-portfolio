import mainImg from "./headshotImg.png";
import "./Landing.css";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




function Landing() {




    return (
        <Container id="mainContainer">
            <Row>
                <Col md={9} >
                    <img src={mainImg} className="img-fluid" id="landingImg" />
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center" id="landingText">
                    <h1>Hi!</h1>
                    <br></br>
                    <h2>My name is Sebastian Jones</h2>
                    <p>I am a Software Engineer & like to write code</p>
                    <p className="text-muted">Check my Github out <a href="https://github.com/sebastianj0nes" target={"_blank"}>here!</a> </p>
                </Col>
            </Row>

            
        </Container>
    )


}

export default Landing;