import "../css/mtk.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "../components/navbar";
import Copyright from "../components/copyright";
import ContactUS from "../components/contactus";

import ombak from "../img/pretelan/img5.png";
import gelap1 from "../img/pretelan/img7.png";
import gelap2 from "../img/pretelan/img8.png";
import armasomtk from "../img/pretelan/armasomtkasoy.png";
import btbupan from "../img/pretelan/img1.png";
import btdaftar from "../img/pretelan/img2.png";
import karang from "../img/pretelan/img6.png";
import cardmtk from "../img/pretelan/card-mtk.png";
import textmtk from "../img/pretelan/mtkgede.png";
import textcommentmtk from "../img/pretelan/mtkcilik.png";
import alas3 from "../img/pretelan/img9.png";

import alashp from "../img/pretelan/yanto.png";
import karanghp from "../img/pretelan/2-01.png";
import cardhp from "../img/pretelan/kartukurangparty.png";
import bawah2 from "../img/pretelan/ombak hp.png";
import armasomtkhp from "../img/pretelan/armasomtkasoy.png";
import mathhp from "../img/pretelan/mtkgede.png";
import tulisannemtk from "../img/pretelan/mtkcilik.png";
import daftarhp from "../img/pretelan/img2.png";
import bupanhp from "../img/pretelan/img1.png";

import { register } from "../setting/otherlink";

import Loading1 from "../animation/loading1";

const Mtk =()=>{
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);
    return(
        <div>
          <Loading1>

    <Nav/>
    <div className="mtk-container-fluid">

    <div className="pretelan-desktop">

    <div className="container-ombak">
        <img className="ombak" src={ombak} alt="" />
    </div>

    <div className="container-alas">
        <img className="alas1" src={gelap1} alt="" />
        <img className="alas2" src={gelap2} alt="" />
        <img className="alas3" src={alas3} alt="" />
        <img className="karang" src={karang} alt="" />
        <img className="card-mtk" src={cardmtk} alt="" />
    </div>

    <div className="circle-text">
    <div className="container-text">
        <img className="armaso-math" src={armasomtk} alt="" />
        <img className="text-math" src={textmtk} alt="" />
        <img className="text-keterangan-math" src={textcommentmtk} alt="" />
    </div>
    <div className="tombol">
    <img className="daftar" src={btdaftar} alt=""   onClick={() => window.open(register, '_blank')}/>
    <img className="bupan" src={btbupan} alt="" onClick={handleShowModal2}/>
    </div> 
    </div>
    </div>

    <div className="pretelan-hp">

    <div className="bottom-hp">
        <img className="bawah-hp2" src={bawah2} alt=""/>
        <img className="bawah-hp" src={alashp} alt="" />
        <img className="karang-hp" src={karanghp} alt="" />
        <img className="card-mtk-hp" src={cardhp} alt="" />
    </div>

    <div className="top-hp">
        <img className="armaso-mtk-hp" src={armasomtkhp} alt="" />
        <img className="math-hp" src={mathhp} alt="" />
        <img className="text-math-hp" src={tulisannemtk} alt="" />
        <div className="tombol-hp">
        <img className="daftar-mtk-hp" src={daftarhp} alt="" onClick={() => window.open(register, '_blank')}/>
        <img className="bupan-mtk-hp" src={bupanhp} alt="" onClick={handleShowModal2}/>
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
        <a href="url" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            Download
          </Button>
        </a>

        <a href="url" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            PDF
          </Button>
        </a>
        </Modal.Footer>
      </Modal>
      </Loading1>
    </div>
    )
}

export default Mtk;