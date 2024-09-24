import "../css/mtk.css"
import React from "react";

import Nav from "../components/navbar";
import Copyright from "../components/copyright";

const Mtk =()=>{
    return(
        <div>
            <Nav/>
                <div className="mtk-container">
                </div>
            <Copyright/>
        </div>
    )
}

export default Mtk;