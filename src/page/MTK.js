import "../css/mtk.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "../components/navbar";
import Copyright from "../components/copyright";
import ContactUS from "../components/contactus";

import bgmtk from "../img/pretelan/math-01-01.svg";
import daftarmtk from "../img/pretelan/daftar.svg";
import bukpanmtk from "../img/pretelan/bupan.svg";

import alashp from "../img/pretelan/yanto.png";
import karanghp from "../img/pretelan/2-01.png";
import cardhp from "../img/pretelan/nguuaantokcik.png";
import bawah2 from "../img/pretelan/ombak hp.png";
import armasomtkhp from "../img/pretelan/armasomtkasoy.png";
import mathhp from "../img/pretelan/mtkgede.png";
import tulisannemtk from "../img/pretelan/mtkcilik.png";
import daftarhp from "../img/pretelan/img2.png";
import bupanhp from "../img/pretelan/img1.png";

import { register } from "../setting/otherlink";
import { bupanmtk } from "../setting/otherlink";
import Loading1 from "../animation/loading1";

const Mtk =()=>{
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);
    return(
      <Loading1>
        <div>
          
          <Nav/>
          <div className="mtk-container-fluid">
      
          <div className="pretelan-desktop">
      
          <img className="background-mtk" src={bgmtk} alt=""/>
      
          <div className="buttons-mtk">
            <img className="daftar-mtk" src={daftarmtk} alt=""   onClick={() => window.open(register, '_blank')}/>
            <img className="bupan-mtk" src={bukpanmtk} alt="" onClick={handleShowModal2} />
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
      
              <Modal.Body>Buku Panduan akan ditampilkan dalam bentuk PDF. Klik tombol bertuliskan 'Open' di bawah untuk melihat isi buku panduan yang berisi ketentuan lomba.</Modal.Body>
      
              <Modal.Footer>
              <a href= {bupanmtk} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  Open
                </Button>
              </a>
              </Modal.Footer>
            </Modal>
          </div>
      </Loading1>
    )
}

export default Mtk;