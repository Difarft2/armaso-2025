import React, { useState, useEffect } from "react";
import "../css/loading.css"
import video1 from '../img/loading/loading1.mp4'; 

const Loading1 = ({ children }) => {
  const [loading, setLoading] = useState(true);  
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setLoading(false); 
      }, 4000); 
    }, 9000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="loading-container">
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000, 
            overflow: "hidden",
          }}
        >

          <video
            autoPlay
            muted
            className={fadeOut ? "fade-out" : "fade-in"} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      )}

      <div className={loading ? "hidden-content" : "visible-content"}>
        {children}
      </div>
    </div>
  );
};

export default Loading1;