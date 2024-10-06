import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css";

import { aboutusp } from '../setting/content';

import gbr1 from "../img/aboutus/12.jpg"
import gbr2 from "../img/aboutus/22.jpg"
import gbr3 from "../img/aboutus/2.jpg"
import gbr4 from "../img/aboutus/4.jpg"
import gbr5 from "../img/aboutus/5.jpg"

const UncontrolledExample = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={gbr1}  
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover', opacity:'0.5'}} 
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={gbr2}  
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover', opacity:'0.5' }} 
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={gbr3}  
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover', opacity:'0.5' }} 
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={gbr4}  
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover', opacity:'0.5' }} 
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={gbr5}  
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover', opacity:'0.5' }} 
        />
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
