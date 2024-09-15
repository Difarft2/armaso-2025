import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/aboutus.css";

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
      <h1>Do you know Armaso?</h1>
      <div className="content">
        <div className="carousel-container">
          <UncontrolledExample />
        </div>
        <div className="text-content">
          <p>
            ARMASO (Ar-Rahmat Mathematic, Science, and Social Olympiad) ini merupakan olimpiade tingkat SD Sederajat yang diadakan oleh Pondok Pesantren Modern Ar Rahmat Bojonegoro. Melalui ARMASO 2023 diharapkan para siswa sebagai generasi muda penerus bangsa dapat memiliki kompetensi dan kecerdasan dalam memahami isu-isu yang berkaitan dengan Matematika Sains dan Sosial.
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

      {/* Modal 1 */}
      <Modal show={showModal1} onHide={handleCloseModal1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Syarat & Ketentuan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Syarat & ketentuan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan "Open PDF" di bawah untuk membukanya!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button>
          <Button href='https://armaso.arrahmat-bjn.sch.id/mainPage/PDF/SYARAT.pdf' variant="secondary" onClick={handleCloseModal1}>
            Open PDF
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 */}
      <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buku Panduan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Buku panduan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan "Open PDF" di bawah untuk membukanya!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Close
          </Button>
          <Button href='https://armaso.arrahmat-bjn.sch.id/mainPage/PDF/SYARAT.pdf' variant="secondary" onClick={handleCloseModal1}>
            Open PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResponsivePage;
