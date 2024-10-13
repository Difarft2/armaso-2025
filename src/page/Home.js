import React, { Suspense, lazy } from 'react';
import "../css/home.css";
import Navbar from "../components/navbar";
import Copyright from "../components/copyright";
import Loading1 from "../animation/loading1";
import Parallaxhome from "../animation/parallaxHome";

const MenuMapel = lazy(() => import("../components/menuMapel"));
const AboutUS = lazy(() => import("../components/aboutUS"));
const Timeline = lazy(() => import("../components/timeline"));
const FAQ = lazy(() => import("../components/faq"));
const Sponsor = lazy(() => import("../components/sponsor"));
const ContactUS = lazy(() => import("../components/contactus"));

const Home = () => {
  return (
    <div>
      <Loading1>
        <Navbar />

        <div id="parallaxHome" className="parallax-section">
          <Parallaxhome />
        </div>

        <div className="main-content">
          <Suspense fallback={<div>Memuat...</div>}>
            <AboutUS />
            <Timeline />
            <MenuMapel />
            <FAQ />
            <Sponsor />
          </Suspense>
        </div>

        <div className="contact-section">
          <Suspense fallback={<div>Memuat Kontak...</div>}>
            <ContactUS />
          </Suspense>
        </div>

        <Copyright />
      </Loading1>
    </div>
  );
};

export default Home;
