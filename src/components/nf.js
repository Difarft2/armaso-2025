import React from "react";
import { Link } from "react-router-dom";
import "../css/notfound.css";


const NF = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1>404</h1>
                <h2>Oops! Page not found.</h2>
                <p>The page you're looking for doesn't exist or has been moved.</p>
                <p>Please check the URL for mistakes and try again.</p>
                <Link to="/" className="back-home">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NF;
