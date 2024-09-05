import "../css/navbar.css"
import React from "react";
//import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




const Navbarr =()=>{

    return(
        <nav>
            {
            
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/">
          <img
            src="/path/to/your/logo.png"
            alt="Armaso"
            width="40"
            height="40"
            className="logo armaso"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#timeline">Time Line</Nav.Link>
                  <Nav.Link href="#aboutus">About Us</Nav.Link>
                  <Nav.Link href="#menumapel">Subject</Nav.Link>
                </Nav>
                <nav className="button">
                    <Button variant="secondary">Login</Button>{' '}
                    <Button variant="secondary">Register</Button>{' '}
                </nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

            /* <div className="Logo">

            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#timeline">TimeLine</Link></li>
                <li><Link to="/#aboutus">AboutUS</Link></li>
                <li><Link to="/#menumapel">OurCompetition</Link></li>
                <li><Link to="/#contactus">ContactUS</Link></li>
            </ul>

            <div className="Pendaftaran">
                <button className="Login">LOGIN</button>
                <button className="Register">REGISTER</button>
            </div> */}
        </nav>
    )
}

export default Navbarr;