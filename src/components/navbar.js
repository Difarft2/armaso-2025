import "../css/navbar.css"
import React from "react";
import { Link } from "react-router-dom";



const Navbar =()=>{
    return(
        <nav>
            <div className="Logo">

            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#timeline">TimeLine</Link></li>
                <li><Link to="/#aboutus">AboutUS</Link></li>
                <li><Link to="/#menumapel">OurCompetition</Link></li>
                <li><Link to="/#contactus">ContactUS</Link></li>
            </ul>

            <div className="Pendaftaran">
                <button className="Login">LOGIN</button>
                <button className="Register">REGISTER</button>
            </div>
        </nav>
    )
}

export default Navbar;