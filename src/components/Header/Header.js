import logo from './spinwheelLogo.png';
import "./Header.css";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {


    return (
        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link href="/"><img src={logo} alt="Main Logo" className="img-fluid" style={{ objectFit: 'contain'}} id='mainLogo'/></Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-between" style={{ width: "100%" }}>
            <Link to="/about" id='aboutL'>About</Link>
            <Link to="/projects" id='projectL'>Projects</Link>
            <Link to="/studies" id='studiesL'>Studies</Link>
            <Link to="https://drive.google.com/file/d/1Tt5BNaLoo633IPEbV8n4A7PNFoyfYMsl/view?usp=sharing" target="_blank" id='resumeL' rel="noreferrer">Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
    )
}

export default Header;