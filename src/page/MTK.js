import "../css/mtk.css"
import React from "react";

import Navbar from "../components/navbar";
import Copyright from "../components/copyright";

const Mtk =()=>{
    return(
        <div>
            <Navbar/>
            <h2>
                MTK
            </h2>
            <Copyright/>
        </div>
    )
}

export default Mtk;