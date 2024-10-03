import React, { useEffect } from "react";
import "../css/parallaxhome.css";

import bobawah from "../img/AssetWebsite/borderrrrrrrrrrrr.png";
import ground1 from "../img/AssetWebsite/Ground1-01.png";
import ground2 from "../img/AssetWebsite/Ground2-01.png";
import ground3 from "../img/AssetWebsite/Ground3-01.png";
import kastil from "../img/AssetWebsite/Castle-01.png";
import iwak from "../img/AssetWebsite/TopAnimals-01.png";
import armaso from "../img/AssetWebsite/Tittle-01.png";

// import bobawah2 from "../img/300ppi/Asset 24.png"
// import ground12 from "../img/300ppi/Asset 25.png";
// import ground22 from "../img/300ppi/Asset 26.png";
// import ground32 from "../img/300ppi/Asset 27.png";


const Parallaxhome = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const armasoElement = document.querySelector('.armaso');
            const grd1 = document.querySelector('.grd1');
            const grd2 = document.querySelector('.grd2');
            const kastilElement = document.querySelector('.kastil');

            const armasoTranslate = scrollPosition * 0.7; 
            const grd1Translate = scrollPosition * 0.4; 
            const grd2Translate = scrollPosition * 0.3; 
            const kastilTranslate = scrollPosition * 0.5; 

                armasoElement.style.transform = `translateY(${armasoTranslate}px)`;

                grd1.style.transform = `translateY(${grd1Translate}px)`;

                grd2.style.transform = `translateY(${grd2Translate}px)`;

                kastilElement.style.transform = `translateY(${kastilTranslate}px)`;
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="prhome-container">
            <div className="armaso">
                <img src={armaso} alt="armaso" className="armaso-img" />
            </div>

            <div className="border">
                <img src={bobawah} alt="" className="border-img" />
            </div>

            <div className="grd1">
                <img src={ground1} alt="" className="grd-img1" />
            </div>

            <div className="grd2">
                <img src={ground2} alt="" className="grd-img2" />
            </div>

            <div className="grd3">
                <img src={ground3} alt="" className="grd-img3" />
            </div>

            <div className="iwak">
                <img src={iwak} alt="" className="iwak-img" />
            </div>

            <div className="kastil">
                <img src={kastil} alt="" className="kastil-img" />
            </div>
        </div>
    );
};

export default Parallaxhome;
