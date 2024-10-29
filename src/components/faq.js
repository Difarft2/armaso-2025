import React, { useState } from 'react';
import "../css/faq.css"
import { faqs } from '../setting/faq.setting';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <h1 className="judul-faq">Frequently Asked Question</h1>
      <div className="row">
        <div className="col-12 faq-container-fluid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <p className='pertanyaan'>{faq.question}</p>
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
              </div>

              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p className='jawaban'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;