import "../css/ipa.css"
import React from "react";
import "../css/navbar.css"
import Copyright from "../components/copyright";
import Nav from "../components/navbar";

const Ipa =()=>{
    return(
    <div>
        <Nav/>
            <div className="ipa-container">
            </div>
        <Copyright/>
    </div>
    )
}

export default Ipa;