import React, { useState } from 'react';
import '../css/tl.css'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../setting/tl.setting'; 
import { GD, susunan } from "../setting/otherlink"

function TL() {
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const [activeTab, setActiveTab] = useState(1);
  const [activeButton, setActiveButton] = useState(1); 

  const getTabData = (tab) => {
    if (tab === 1) return data.tab1;
    if (tab === 2) return data.tab2;
    if (tab === 3) return data.tab3;
  };

  const tabData = getTabData(activeTab);

  const handleButtonClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setActiveButton(tabNumber); 
  };

  return (
    <div className="tl-container">
      <h1 className='judul-tl'>Timeline Armaso 2025</h1>

      <div className="button-container">
        <button
          className={activeButton === 1 ? 'active' : ''}
          onClick={() => handleButtonClick(1)}
        >
          Pendaftaran
        </button>

        <button
          className={activeButton === 2 ? 'active' : ''}
          onClick={() => handleButtonClick(2)}
        >
          Technical Meeting
        </button>

        <button
          className={activeButton === 3 ? 'active' : ''}
          onClick={() => handleButtonClick(3)}
        >
          Perlombaan
        </button>
      </div>

      <div className="box-container">
        {tabData.map((item, index) => (
          <div key={index} className="box">
            <h3 className='judul-title'>{item.title}</h3>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Location:</strong> {item.location}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        <Button variant="secondary" className="btn_ac" size="lg" onClick={handleShowModal2} >
          Susunan Acara Armaso
        </Button>
      </div>

      <Modal show={showModal2} onHide={handleCloseModal2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Susunan Acara Armaso</Modal.Title>
        </Modal.Header>

        <Modal.Body>Susunan Acara dapat dilihat dengan mengklik tombol bertuliskan 'PDF' di bawah untuk membuka dan melihatnya secara langsung!. Atau anda dapat melihat semua file PDF dengan mengklik tombol bertuliskan GD! </Modal.Body>

        <Modal.Footer>
        <a href={susunan} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            PDF
          </Button>
        </a>

        <a href={GD} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            GD
          </Button>
        </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TL;
