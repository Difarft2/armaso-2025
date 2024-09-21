import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css";

import { aboutusp } from '../setting/content';
import { bukupanduan, syaratdanketentuan } from '../setting/otherlink';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div 
      style={{
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '24px'
      }}
    >
      {text}
    </div>
  );
};

const UncontrolledExample = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ResponsivePage = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  return (
    <div className="container-fluid" id='aboutus'>
      <h1 className='judul-au'>Do you know Armaso?</h1>
      <div className="content">
        <div className="carousel-container">
          <UncontrolledExample />
        </div>
        <div className="text-content">
          <p>  
            {aboutusp}
          </p>
          <div className="buttons">
            <Button variant="secondary" onClick={handleShowModal1}>
              Syarat & Ketentuan
            </Button>{' '}
            <Button variant="secondary" onClick={handleShowModal2}>
              Buku Panduan
            </Button>
          </div>
        </div>
      </div>

      {/* syarat dan ketentuan*/}
      <Modal show={showModal1} onHide={handleCloseModal1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Syarat & Ketentuan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Syarat & ketentuan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan "Open PDF" di bawah untuk membukanya!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button>
          <Button href={syaratdanketentuan} variant="secondary" onClick={handleCloseModal1}>
            Open PDF
          </Button>
        </Modal.Footer>
      </Modal>

      {/* buku panduan */}
      <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buku Panduan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Buku panduan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan "Open PDF" di bawah untuk membukanya!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Close
          </Button>
          <Button href={bukupanduan} variant="secondary" onClick={handleCloseModal1}>
            Open PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResponsivePage;
