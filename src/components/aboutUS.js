import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css";

import { aboutusp } from '../setting/content';
import { tutorial } from '../setting/otherlink';

import gbr1 from "../img/aboutus/12.svg"
import gbr2 from "../img/aboutus/22.svg"
import gbr3 from "../img/aboutus/2.svg"
import gbr4 from "../img/aboutus/4.svg"
import gbr5 from "../img/aboutus/5.svg"


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
    
    <div className="aboutus-container-fluid" id='aboutus'>
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
              Video Tutorial Pendaftaran
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Tutorial Pendaftaran</Modal.Title>
        </Modal.Header>

        <Modal.Body>Video tutorial dapat ditonton dengan mengklik tombol bertuliskan 'Open' di bawah untuk membuka dan melihatnya secara langsung!</Modal.Body>

        <Modal.Footer>
        <a href={tutorial} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            Open
          </Button>
        </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResponsivePage;
