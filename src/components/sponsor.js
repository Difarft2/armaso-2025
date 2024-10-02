import React, { useState } from "react";
import "../css/sponsor.css";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import img1 from '../img/sponsor/youtube.png';
import img2 from '../img/sponsor/kumon.png';
import img3 from '../img/sponsor/shopee.png';
import img4 from '../img/sponsor/pertamina.png';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.heading}</h4>
        <p>{props.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href={props.websiteLink} target="_blank">
          Website
        </Button>
        <Button variant="secondary" href={props.videoLink} target="_blank">
          Promotion Video
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ShapeExample() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "", websiteLink: "", videoLink: "" });

  const handleShowModal = (title, content, websiteLink, videoLink) => {
    setModalContent({ title, content, websiteLink, videoLink });
    setModalShow(true);
  };

  return (
    <Container fluid>
      <Row>
        <h1>Ocean Sponsor</h1>
        <Col xs={12} sm={6} md={3}>
          <Image
            src={img1}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "YouTube Sponsor",
              "Anda dapat mengunjungi website yang dimiliki oleh Youtube atau menonton video promosinya. Klik tombol bertuliskan 'Website' untuk mengunjungi websitenya dan klik tombol bertuliskan 'Promotion Video' untuk menonton video promosinya.",
              "https://www.youtube.com",
              "https://www.youtube.com/watch?v=example"
            )}
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Image
            src={img2}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "Kumon Sponsor",
              "Anda dapat mengunjungi website yang dimiliki oleh Kumon atau menonton video promosinya. Klik tombol bertuliskan 'Website' untuk mengunjungi websitenya dan klik tombol bertuliskan 'Promotion Video' untuk menonton video promosinya.",
              "https://www.kumon.com",
              "https://www.kumon.com/video"
            )}
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Image
            src={img3}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "Shopee Sponsor",
              "Anda dapat mengunjungi website yang dimiliki oleh Shopee atau menonton video promosinya. Klik tombol bertuliskan 'Website' untuk mengunjungi websitenya dan klik tombol bertuliskan 'Promotion Video' untuk menonton video promosinya.",
              "https://www.shopee.com",
              "https://www.shopee.com/video"
            )}
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Image
            src={img4}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "Pertamina Sponsor",
              "Anda dapat mengunjungi website yang dimiliki oleh Pertaamina atau menonton video promosinya. Klik tombol bertuliskan 'Website' untuk mengunjungi websitenya dan klik tombol bertuliskan 'Promotion Video' untuk menonton video promosinya.",
              "https://www.pertamina.com",
              "https://www.pertamina.com/video"
            )}
          />
        </Col>
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalContent.title}
        content={modalContent.content}
        websiteLink={modalContent.websiteLink}
        videoLink={modalContent.videoLink}
      />
    </Container>
  );
}

export default ShapeExample;
