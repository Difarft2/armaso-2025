import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/home.css";

import Navbar from "../components/navbar";
import ContactUS from "../components/contactus";
import Copyright from "../components/copyright";
import Parallax3 from "../animation/Parallax3";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar/>
      <Parallax3/>
      <ContactUS />
      <Copyright />
    </div>
  );
};

export default Home;
