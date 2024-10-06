import "../css/mtk.css"
import React from "react";
import Nav from "../components/navbar";
import Copyright from "../components/copyright";

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

const Mtk =()=>{
    return(
        <div>

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
        <img className="daftar" src={btdaftar} alt="" />
        <img className="bupan" src={btbupan} alt="" />
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
            <img className="daftar-hp" src={daftarhp} alt="" />
            <img className="bupan-hp" src={bupanhp} alt="" />
        </div>
    </div>

    </div>
            
    </div>
        <Copyright/>
    </div>
    )
}

export default Mtk;