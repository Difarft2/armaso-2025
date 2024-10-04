import React, { useEffect } from "react";
import "../css/parallaxhome.css";

import bobawah from "../img/AssetWebsite/borderrrrrrrrrrrr.png";
import ground1 from "../img/AssetWebsite/Ground1-01.png";
import ground2 from "../img/AssetWebsite/Ground2-01.png";
import ground3 from "../img/AssetWebsite/Ground3-01.png";
import kastil from "../img/AssetWebsite/Castle-01.png";
import iwak from "../img/AssetWebsite/TopAnimals-01.png";
import armaso from "../img/AssetWebsite/Tittle-01.png";

import borderbawah1 from "../img/Fixed/Sorted/Wave-01.png"
import borderbawah2 from "../img/Fixed/Sorted/Waveside-01.png"
import bg1 from "../img/Fixed/Sorted/Ground3-01.png"
import bg2 from "../img/Fixed/Sorted/Ground2.png"
import bg3 from "../img/Fixed/Sorted/Ground1-01.png"
import watu from "../img/Fixed/Sorted/Coralsrock-01.png"
import omah from "../img/Fixed/Sorted/Casle-01.png"
import atas from "../img/Fixed/Sorted/Top-01.png"
import jeneng from "../img/Fixed/Sorted/Tittle-01.png"

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

                {/* hppppppp */}
            <div className="borderbawah">
                <img className="borderbawah-img" src={borderbawah1} alt=""/>
            </div>

            <div className="bordertengah">
                <img className="bordertengah-img" src={borderbawah2} alt=""/>
            </div>

            <div className="bg1">
                <img className="bg1-img" src={bg1} alt=""/>
            </div>

            <div className="bg2">
                <img className="bg2-img" src={bg2} alt=""/>
            </div>

            <div className="bg3">
                <img className="bg3-img" src={bg3} alt=""/>
            </div>

            <div className="watu">
                <img className="watu-img" src={watu} alt=""/>
            </div>

            <div className="omah">
                <img className="omah-img" src={omah} alt=""/>
            </div>

            <div className="atas">
                <img className="atas-img" src={atas} alt=""/>
            </div>

            <div className="jeneng">
                <img className="jeneng-img" src={jeneng} alt=""/>
            </div>
        </div>
    );
};

export default Parallaxhome;
