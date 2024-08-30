import React from "react";
import Navbar from "../components/navbar";
import MenuMaple from "../components/menuMapel";

const Home =()=>{
    return(
        <div>
            <h2>
                <Navbar/>
                Home
                <MenuMaple/>
            </h2>
        </div>
    )
}

export default Home;