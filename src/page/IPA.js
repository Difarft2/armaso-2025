import "../css/ipa.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Copyright from "../components/copyright";
import ContactUS from "../components/contactus"
import Nav from "../components/navbar";

import bgipa from "../img/pretelan/science-01.svg";
import daftaripa from "../img/pretelan/daftar.svg";
import bukpanipa from "../img/pretelan/bupan.svg";

import alashp from "../img/pretelan/yanto.png";
import karanghp from "../img/pretelan/2-01.png";
import cardhp from "../img/pretelan/uuaasli.png";
import bawah2 from "../img/pretelan/ombak hp.png";
import armasohp from "../img/pretelan/img4.png";
import sciencehp from "../img/pretelan/img3.png";
import tulisanneipa from "../img/pretelan/img10.png";
import daftarhp from "../img/pretelan/img2.png";
import bupanhp from "../img/pretelan/img1.png";

import {  bupanipa, register } from "../setting/otherlink";
import Loading1 from "../animation/loading1";




const Ipa =()=>{
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);
    return(
      <Loading1>
        <div>  
    <Nav/>

                        {/* Desktop */}

    <div className="ipa-container-fluid">

    <div className="pretelan-desktop">

    <img className="background-ipa" src={bgipa} alt=""/>

    <div className="buttons-ipa">
      <img className="daftar-ipa" src={daftaripa} alt=""   onClick={() => window.open(register, '_blank')}/>
      <img className="bupan-ipa" src={bukpanipa} alt="" onClick={handleShowModal2} />
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
            <img className="daftar-ipa-hp" src={daftarhp} alt="daftar" onClick={() => window.open(register, '_blank')}/>
            <img className="bupan-ipa-hp" src={bupanhp} alt="buku panduan" onClick={handleShowModal2}/>
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

        <Modal.Body>Buku Panduan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan 'Open' di bawah untuk melihat isi buku panduan yang berisi ketentuan lomba.</Modal.Body>

        <Modal.Footer>
        <a href= {bupanipa} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            PDF
          </Button>
        </a>
        </Modal.Footer>
      </Modal>

    </div>
      </Loading1>
    )
}

export default Ipa;