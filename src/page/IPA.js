import "../css/ipa.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Copyright from "../components/copyright";
import ContactUS from "../components/contactus"
import Nav from "../components/navbar";

import ombak from "../img/pretelan/img5.png";
import gelap1 from "../img/pretelan/img7.png";
import gelap2 from "../img/pretelan/img8.png";
import armaso from "../img/pretelan/img4.png";
import btbupan from "../img/pretelan/img1.png";
import btdaftar from "../img/pretelan/img2.png";
import karang from "../img/pretelan/img6.png";
import cardipa from "../img/pretelan/card-ipa.png";
import textscience from "../img/pretelan/img3.png";
import textcomment from "../img/pretelan/img10.png";
import alas3 from "../img/pretelan/img9.png";

import alashp from "../img/pretelan/yanto.png";
import karanghp from "../img/pretelan/2-01.png";
import cardhp from "../img/pretelan/uuaasli.png";
import bawah2 from "../img/pretelan/ombak hp.png";
import armasohp from "../img/pretelan/img4.png";
import sciencehp from "../img/pretelan/img3.png";
import tulisanneipa from "../img/pretelan/img10.png";
import daftarhp from "../img/pretelan/img2.png";
import bupanhp from "../img/pretelan/img1.png";



const Ipa =()=>{
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);
    return(
    <div>

    <Nav/>

                        {/* Desktop */}

    <div className="ipa-container-fluid">

    <div className="pretelan-desktop">

    <div className="container-ombak">
        <img className="ombak" src={ombak} alt="" />
    </div>

    <div className="container-alas">
        <img className="alas1" src={gelap1} alt="" />
        <img className="alas2" src={gelap2} alt="" />
        <img className="alas3" src={alas3} alt="" />
        <img className="karang" src={karang} alt="" />
        <img className="card-ipa" src={cardipa} alt="" />
    </div>

    <div className="circle-text">
    <div className="container-text">
        <img className="armaso" src={armaso} alt="" />
        <img className="text-science" src={textscience} alt="" />
        <img className="text-keterangan" src={textcomment} alt="" />
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
        <img className="card-hp" src={cardhp} alt="" />
    </div>

    <div className="top-hp">
        <img className="armaso-hp" src={armasohp} alt="" />
        <img className="science-hp" src={sciencehp} alt="" />
        <img className="text-science" src={tulisanneipa} alt="" />
        <div className="tombol-hp">

            <img className="daftar-ipa-hp" src={daftarhp} alt="" />
            <img className="bupan-ipa-hp" src={bupanhp} alt="" onClick={handleShowModal2}/>
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

export default Ipa;