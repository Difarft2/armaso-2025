import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../css/home.css"

import Navbar from "../components/navbar";
import MenuMapel from "../components/menuMapel";
import AboutUS from "../components/aboutUS";
import Timeline from "../components/timeline";
import ContactUS from "../components/contactus";
import Copyright from "../components/copyright"


const Home =()=>{
    const location = useLocation();

    useEffect(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


    return(
        <div>
            <h2>
                <Navbar/>
                    Home
                <Timeline/>
                <AboutUS/>
                <MenuMapel/>
                <ContactUS/>
                <Copyright/>
            </h2>
        </div>
    )
}

export default Home;