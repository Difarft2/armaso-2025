import React from "react";
import "../css/parallax3.css";

import MenuMapel from "../components/menuMapel";
import AboutUS from "../components/aboutUS";
import Timeline from "../components/timeline"

const Parallax3 = () => {
    return (
        <div className="parallax-container">
            <div className="scroll-content">
                <AboutUS/>
                <Timeline/>
                <MenuMapel/>
            </div>
      </div>
    );
};

export default Parallax3;