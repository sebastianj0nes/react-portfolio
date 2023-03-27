import logo from './spinwheelLogo.png';
import "./Header.css";
import { Navbar, Nav } from 'react-bootstrap';
import Col from 'react-bootstrap';
import Row from 'react-bootstrap';

function Header() {


    return (
        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link href="/"><img src={logo} alt="Main Logo" className="img-fluid" style={{ objectFit: 'contain'}} id='mainLogo'/></Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-between" style={{ width: "100%" }}>
            <Nav.Link href="about" id='aboutL'>About</Nav.Link>
            <Nav.Link href="projects" id='projectL'>Projects</Nav.Link>
            <Nav.Link href="studies" id='studiesL'>Studies</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1Tt5BNaLoo633IPEbV8n4A7PNFoyfYMsl/view?usp=sharing" target="_blank" id='resumeL'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
    )
}

export default Header;