import React, { useState } from "react";
import "../css/sponsor.css";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { contactreval } from "../setting/otherlink";

import img1 from '../other/Logo PT ADELIRA PERKASA  JAYA.png';

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
        {props.buttonCount > 0 && (
          <Button variant="primary" href={props.websiteLink} target="_blank">
            Website
          </Button>
        )}
        {props.buttonCount === 2 && (
          <Button variant="secondary" href={props.videoLink} target="_blank">
            Promotion Video
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

function ShapeExample() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "", websiteLink: "", videoLink: "", buttonCount: 1 });

  const handleShowModal = (title, content, websiteLink, videoLink, buttonCount) => {
    setModalContent({ title, content, websiteLink, videoLink, buttonCount });
    setModalShow(true);
  };

  return (
    <Container className="sponsor-con">
      <Row  className="justify-content-center">
        <h1 className="judul-os">Ocean Sponsor</h1>

        {/* Modal with 1 button */}
        <Col xs={12} sm={6} md={3} className="text-center">
          <Image
            src={img1}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "PT ADELIRA PERKASA JAYA",
              "Kunjungi website PT ADELIRA PERKASA JAYA untuk informasi lebih lanjut.",
              "https://www.google.com/maps/place/CV+Adelira+Perkasa+%2FPt+Adelira+perkasa+jaya/@-7.1298027,111.7823948,15z/data=!4m6!3m5!1s0x2e77799583e2a8e3:0x60aaafdd1d267138!8m2!3d-7.1298027!4d111.7823948!16s%2Fg%2F11fpjwms40?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D",
              "", // Kosong untuk modal dengan 1 tombol
              1 // 1 tombol
            )}
          />
        </Col>

        {/* Modal with 2 buttons
        <Col xs={12} sm={6} md={3}>
          <Image
            src={img1}
            rounded
            className="img-fluid"
            onClick={() => handleShowModal(
              "PT EXAMPLE JAYA",
              "Kunjungi website PT EXAMPLE JAYA dan tonton video promosinya.",
              "https://www.website-pt2.com",
              "https://www.youtube.com/watch?v=example2",
              2 // 2 tombol
            )}
          />
        </Col> */}
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalContent.title}
        content={modalContent.content}
        websiteLink={modalContent.websiteLink}
        videoLink={modalContent.videoLink}
        buttonCount={modalContent.buttonCount}
      />

      <div className="button-sponsor">
        <a href={contactreval}  target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="btn_ac" size="lg">Become an Ocean Sponsor</Button></a>
      </div>

    </Container>
  );
}

export default ShapeExample;
