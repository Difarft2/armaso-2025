import "../css/ipa.css"
import React from "react";

import Copyright from "../components/copyright";
import Navbar from "../components/navbar";

const Ipa =()=>{
    return(
        <div>
            <Navbar/>
            <h2>
                IPA
            </h2>
            <Copyright/>
        </div>
    )
}

export default Ipa;