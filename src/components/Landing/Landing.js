import mainImg from "./headshotImg.png";
import "./Landing.css";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';



function Landing() {

    const [showText, setShowText] = useState(false);

    const handleImageLoad = () => {
        setShowText(true);
    };

    return (
        <Container id="mainContainer">
            <Row>
                <Col md={9}>
                    <img
                        src={mainImg}
                        className="img-fluid"
                        id="landingImg"
                        onLoad={handleImageLoad}
                        alt="Avatar Logo"
                    />
                </Col>
                <Col md={3} className={`d-flex flex-column justify-content-center`} id="landingText">
                    <h1 className={`animated2 ${showText ? 'slideInRight' : ''}`}>Hello!</h1>
                    <br></br>
                    <h2 className={`animated ${showText ? 'slideInRight' : ''}`}>My name is Sebastian Jones</h2>
                    <p className={`animated ${showText ? 'slideInRight' : ''}`}>I am a Software Engineer & enjoy writing code</p>
                    <p className={`animated ${showText ? 'slideInRight' : ''} text-muted`}>Check my Github out <a href="https://github.com/sebastianj0nes" target={"_blank"} rel="noreferrer">here!</a> </p>
                    <h3 className={`animated ${showText ? 'slideInRight' : ''}`}>  </h3>
                </Col>
            </Row>
        </Container>
    )

}

export default Landing;