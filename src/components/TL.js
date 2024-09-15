import React, { useState } from "react";
import "../css/tl.css";

const TL = () => {
        const [activeStep, setActiveStep] = useState(0);

        const steps = [
            { id: 1, label: "Registrasi Ulang" },
            { id: 2, label: "Penyisihan" },
            { id: 3, label: "Semi Final" },
            { id: 4, label: "Final" },
        ];
    
        const stepContents = [
           
            { title: "Registrasi Ulang", text: "Registrasi ulang dilakukan secara offline di Pondok Pesantren Modern Ar-Rahmat Bojonegoro di posko registrasi ulang. Disediakan daftar peserta lomba dan peserta lomba wajib mengisi tanda tangan sesuai pada kolom Namanya masing-masing. Registrasi ulang dilakukan 2 kali yaitu pada babak penyisihan dan babak semifinal. Registrasi ulang tidak perlu dilakukan saat babak final." },
            { title: "Penyisihan", text: "Babak penyisihan dilaksanakan pada tanggal 10 Februari 2024 secara offline di Pondok Pesantren Modern Ar-Rahmat Bojonegoro. Peserta lomba wajib hadir 15 menit sebelum kegiatan dimulai dan mengenakan seragam sekolah nya masing-masing. Babak penyisihan dilakukan secara bertahap dimulai dari mapel matematika, kemudian mapel ipa , dan yang terakhir adalah mapel ips." },
            { title: "Semi Final", text: "Diambil 15 peserta dengan ranking tertinggi untuk melanjutkan ke babak semifinal. Babak semifinal dilaksanakan pada tanggal 11 Februari 2024 secara offline di Pondok Pesantren Modern Ar-Rahmat Bojonegoro. Babak semifinal dilaksanakan serentak pada semua mapel. Peserta lomba wajib mengenakan seragam sekolah nya masing-masing" },
            { title: "Final", text: "peserta dengan ranking tertinggi dinyatakan lolos ke Babak final yang dilakukan setelah babak semifinal. Babak final dilakukan di aula Pondok Pesantren Modern Ar-Rahmat Bojonegoro. Babak final menggunakan sistem cerdas cermat dan dilakukan bergantian antar mata pelajaran. babak final ini dibagi menjadi 3 sesi yaitu sesi wajib, sesi rebutan, dan sesi kali bagi." },
        ];
    
        const handleClick = (index) => {
            setActiveStep(index);
        };
    
        return (
            <div className="interactive-timeline-container">
                <div className="steps">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step-item ${activeStep >= index ? "active" : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            <div className="circle"></div>
                            <p className="step-label">{step.label}</p>
                        </div>
                    ))}
                </div>
    
                <div className="timeline-bar">
                    <div
                        className="progress"
                        style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                    ></div>
                </div>
    
                <div className="step-content">
                    <h2>{stepContents[activeStep].title}</h2>
                    <p>{stepContents[activeStep].text}</p>
                </div>
            </div>
        );
    };
export default TL;
