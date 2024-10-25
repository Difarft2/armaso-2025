import "../css/navbar.css";
import React from "react";
import Headroom from "react-headroom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import lgarmaso from "../img/ico/Logo Armaso Fix-01.png.svg"
import { register, login, pengumuman } from "../setting/otherlink";


const Navbarr = () => {
    return (
        <Headroom>
        <div className="nav-container">
            
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={lgarmaso}
                        alt="Armaso"
                        className="logoarmaso"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <p><Nav.Link href="/#aboutus">About Us</Nav.Link></p>
                            <p><Nav.Link href="/#timeline">Time Line</Nav.Link></p>
                            <p><Nav.Link href="/#menumapel">Kompetisi</Nav.Link></p>
                            <p><Nav.Link href={pengumuman} target="_blank" rel="noopener noreferrer">Pengumuman</Nav.Link></p>
                        </Nav>
                        <nav className="button">
                            <a href={login} target="_blank" rel="noopener noreferrer"><Button variant="secondary">Login</Button></a>
                            <a href={register} target="_blank" rel="noopener noreferrer"><Button variant="secondary">Daftar</Button></a>
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </Headroom>
    );
}

export default Navbarr;
