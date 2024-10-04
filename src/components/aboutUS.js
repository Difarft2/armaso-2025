import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css";

import { aboutusp } from '../setting/content';

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
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ResponsivePage = () => {
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  return (
    <div className="container-fluid" id='aboutus'>
      <h1 className='judul-au'>Do You Know Armaso?</h1>

      <div className="content">
        <div className="carousel-container">
          <UncontrolledExample />
        </div>
        <div className="text-content">
          <p>  
            {aboutusp}
          </p>
          <div className="buttons">
            <Button variant="secondary" onClick={handleShowModal2}>
              Vidio Tutorial Pendaftaran
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Vidio Tutorial Pendaftaran</Modal.Title>
        </Modal.Header>

        <Modal.Body>Vidio Tutorial akan ditampilkan dalam bentuk Vidio. Klik tombol bertuliskan "Vidio" di bawah untuk membukanya! atau Download untuk mendownloadnya dalam bentuk file</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">
            Download
          </Button>

          <Button variant="secondary">
            Vidio
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResponsivePage;
