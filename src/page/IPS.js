import "../css/ips.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Copyright from "../components/copyright";
import Nav from "../components/navbar";
import ContactUS from "../components/contactus";

import ombak from "../img/pretelan/img5.png";
import gelap1 from "../img/pretelan/img7.png";
import gelap2 from "../img/pretelan/img8.png";
import armasoips from "../img/pretelan/armasoipshokya.png";
import btbupan from "../img/pretelan/img1.png";
import btdaftar from "../img/pretelan/img2.png";
import karang from "../img/pretelan/img6.png";
import cardips from "../img/pretelan/card-ips.png";
import textsocial from "../img/pretelan/tulisanneipshokya.png";
import textcommentsocial from "../img/pretelan/tulisananehanehips.png";
import alas3 from "../img/pretelan/img9.png";

import alashp from "../img/pretelan/yanto.png";
import karanghp from "../img/pretelan/2-01.png";
import cardipshp from "../img/pretelan/kartuipsbutuhhealing.png";
import bawah2 from "../img/pretelan/ombak hp.png";
import armasoipshp from "../img/pretelan/ipSHterate.png";
import socialhp from "../img/pretelan/7.png";
import tulisanneips from "../img/pretelan/tulisananehanehips.png";
import daftarhp from "../img/pretelan/img2.png";
import bupanhp from "../img/pretelan/img1.png"

const Ips =()=>{
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);
    return(
        <div>

    <Nav/>

                        {/* Desktop */}

    <div className="ips-container-fluid">

    <div className="pretelan-desktop">

    <div className="container-ombak">
        <img className="ombak" src={ombak} alt="" />
    </div>

    <div className="container-alas">
        <img className="alas1" src={gelap1} alt="" />
        <img className="alas2" src={gelap2} alt="" />
        <img className="alas3" src={alas3} alt="" />
        <img className="karang" src={karang} alt="" />
        <img className="card-ipa" src={cardips} alt="" />
    </div>

    <div className="circle-text">
    <div className="container-text">
        <img className="armaso-ips" src={armasoips} alt="" />
        <img className="text-social" src={textsocial} alt="" />
        <img className="text-keterangan-ips" src={textcommentsocial} alt="" />
    </div>
    <div className="tombol">
        <img className="daftar" src={btdaftar} alt="" />
        <img className="bupan" src={btbupan} alt="" onClick={handleShowModal2}/>
    </div> 
    </div>
    </div>

                            {/* HP */}

    <div className="pretelan-hp">

    <div className="bottom-hp">
        <img className="bawah-hp2" src={bawah2} alt=""/>
        <img className="bawah-hp" src={alashp} alt="" />
        <img className="karang-hp" src={karanghp} alt="" />
        <img className="card-ips-hp" src={cardipshp} alt="" />
    </div>

    <div className="top-hp">
        <img className="armaso-ips-hp" src={armasoipshp} alt="" />
        <img className="social-hp" src={socialhp} alt="" />
        <img className="text-social-hp" src={tulisanneips} alt="" />
        <div className="tombol-hp">
            <img className="daftar-hp" src={daftarhp} alt="" />
            <img className="bupan-hp" src={bupanhp} alt="" onClick={handleShowModal2}/>
        </div>
    </div>

    </div>
            
    </div>
        <ContactUS/>
        <Copyright/>

        <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buku Panduan</Modal.Title>
        </Modal.Header>

        <Modal.Body>Buku Panduan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan "PDF" di bawah untuk membukanya! atau Download untuk mendownloadnya dalam bentuk file</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">
            Download
          </Button>

          <Button variant="secondary">
            PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default Ips;