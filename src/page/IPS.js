import "../css/ips.css"
import React from "react";

import Copyright from "../components/copyright";
import Navbar from "../components/navbar";

const Ips =()=>{
    return(
        <div>
            <Navbar/>
            <h2>
                IPS
            </h2>
            <Copyright/>
        </div>
    )
}

export default Ips;