import React from 'react';
import "../css/home.css";

import Navbar from "../components/navbar";
import Copyright from "../components/copyright";

// import Loading1 from "../animation/loading1";
import Parallaxhome from "../animation/parallaxHome";
import Mascot from '../animation/maskot';

import MenuMapel from "../components/menuMapel";
import AboutUS from "../components/aboutUS";
import Timeline from "../components/timeline";
import FAQ from "../components/faq";
import Sponsor from "../components/sponsor";
import ContactUS from "../components/contactus";


const Home = () => {
  return (
    <div className='allclass'>
      {/* <Loading1> */}
        <div className="navbarrrr">
          <Navbar />
        </div>

        <div id="parallaxHome" className="parallax-section">
          <Parallaxhome />
        </div>

        <div className="main-content">
          <AboutUS />
          <Timeline />
          <Mascot/>
          <MenuMapel />
          <FAQ />
          <Sponsor />
        </div>

        <div className="contact-section">
          <ContactUS />
        </div>

        <Copyright />
      {/* </Loading1> */}
    </div>
  );
};

export default Home;
