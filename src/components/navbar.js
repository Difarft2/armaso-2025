import "../css/navbar.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Headroom from 'react-headroom';
const Navbarr = () => {
    return (

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
                            <Nav.Link href="/#timeline">Time Line</Nav.Link>
                            <Nav.Link href="/#aboutus">About Us</Nav.Link>
                            <Nav.Link href="/#menumapel">Our Competition</Nav.Link>
                            <Nav.Link href="/#contactus">Contact US</Nav.Link>
                        </Nav>
                        <nav className="button">
                            <Button variant="secondary">Login</Button>{' '}
                            <Button variant="secondary">Register</Button>{' '}
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navbarr;
