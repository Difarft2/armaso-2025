import "../css/ips.css"
import React from "react";

import Copyright from "../components/copyright";
import Nav from "../components/navbar";

const Ips =()=>{
    return(
        <div>
            <Nav/>
                <div className="ips-container">
                </div>
            <Copyright/>
        </div>
    )
}

export default Ips;