import React, { useState } from 'react';
import "../css/faq.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah lomba ini bisa diikuti oleh anak yang memiliki kebutuhan khusus?",
      answer: "Yahaha1"
    },
    {
      question: "Apakah anak yang sudah pernah memenangkan lomba di ARMASO sebelumnya bisa ikut lagi?",
      answer: "Yahaha2"
    },
    {
      question: "Bagaimana jika peserta sakit pada hari lomba? Apakah ada jadwal susulan?",
      answer: "Yahaha3"
    },
    {
      question: "Apakah ada batasan alat tulis yang boleh dibawa oleh peserta?",
      answer: "Yahaha4"
    },
    {
      question: "Bagaimana jika peserta mengalami kesulitan memahami soal? Apakah boleh bertanya pada pengawas?",
      answer: "Yahaha5"
    },
    {
      question: "Apakah peserta boleh membawa minuman atau makanan sendiri ke dalam ruang lomba?",
      answer: "Yahaha6"
    }
  ];

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
