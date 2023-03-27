import logo from './spinwheelLogo.png';
import "./Header.css";
import { Navbar, Nav } from 'react-bootstrap';
import Col from 'react-bootstrap';
import Row from 'react-bootstrap';

function Header() {


    return (
        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img src={logo} alt="Main Logo" className="img-fluid" style={{ objectFit: 'contain'}} id='mainLogo'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-between" style={{ width: "100%" }}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#studies">Studies</Nav.Link>
            <Nav.Link href="#lessons">Lessons</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
    )
}

export default Header;