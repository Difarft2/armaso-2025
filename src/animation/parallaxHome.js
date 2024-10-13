import React, { useEffect, useState } from "react";
import "../css/parallaxhome.css";

import bobawah from "../img/AssetWebsite/borderrrrrrrrrrrr.png";
import ground1 from "../img/AssetWebsite/Ground1-01.png";
import ground2 from "../img/AssetWebsite/Ground2-01.png";
import ground3 from "../img/AssetWebsite/Ground3-01.png";
import kastil from "../img/AssetWebsite/Castle-01.png";
import iwak from "../img/AssetWebsite/TopAnimals-01.png";
import armaso from "../img/AssetWebsite/armasojeneng.png";

import borderbawah1 from "../img/Fixed/Sorted/Fole-01.png"
import bg1 from "../img/Fixed/Sorted/Ground3-01.png"
import bg2 from "../img/Fixed/Sorted/Ground2.png"
import bg3 from "../img/Fixed/Sorted/Ground1-01.png"
import watu from "../img/Fixed/Sorted/Coralsrock-01.png"
import omah from "../img/Fixed/Sorted/Casle-01.png"
import atas from "../img/Fixed/Sorted/Top-01.png"
import jeneng from "../img/Fixed/Sorted/Tittle-01.png"

const Parallaxhome = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxHeight = document.querySelector(".prhome-container")?.offsetHeight || 0;

      if (scrollPosition > parallaxHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500); 

      const updateParallax = () => {
        const armasoElement = document.querySelector(".armaso");
        const grd1 = document.querySelector(".grd1");
        const grd2 = document.querySelector(".grd2");
        const kastilElement = document.querySelector(".kastil");

        if (armasoElement) armasoElement.style.transform = `translateY(${scrollPosition * 0.7}px)`;
        if (grd1) grd1.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        if (grd2) grd2.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        if (kastilElement) kastilElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;

          const judul = document.querySelector(".jeneng");
          const gd1 = document.querySelector(".bg1");
          const gd2 = document.querySelector(".bg2");
          const omah = document.querySelector(".omah");
    
          const judulTranslate = scrollPosition * 0.7;
          const gd1Translate = scrollPosition * 0.4;
          const gd2Translate = scrollPosition * 0.3;
          const omahTranslate = scrollPosition * 0.5;
    
          if (judul) {
            judul.style.transform = `translateY(${judulTranslate}px)`;
          }
          if (gd1) {
            gd1.style.transform = `translateY(${gd1Translate}px)`;
          }
          if (gd2) {
            gd2.style.transform = `translateY(${gd2Translate}px)`;
          }
          if (omah) {
            omah.style.transform = `translateY(${omahTranslate}px)`;
          }
      };

      

      requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`prhome-container ${isHidden ? 'hidden' : ''}`}>
      <div className="armaso">
        <img
          src={armaso}
          alt="armaso"
          className={`armaso-img ${isScrolling ? 'stop-animation' : 'start-animation'}`}
        />
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

      <div className="borderbawah">
                <img className="borderbawah-img" src={borderbawah1} alt=""/>
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
