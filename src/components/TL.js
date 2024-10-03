import React, { useState } from 'react';
import '../css/tl.css'; 
import { data } from '../setting/tl.setting'; 

function TL() {
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
    </div>
  );
}

export default TL;
