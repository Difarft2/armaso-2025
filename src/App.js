import React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import {useNavigate } from "react-router-dom";



import Home from "./page/Home";
import Sosialmedia from "./page/sosialMedia";
import Ipa from "./page/bidang/IPA";
import Ips from "./page/bidang/IPS";
import Mtk from "./page/bidang/MTK";


function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const lastVisited = Cookies.get('lastVisitedPage');
  //   if (lastVisited) {
  //     navigate(lastVisited);
  //   }
  // }, [navigate]);

  // const handleNavigation = (path) => {
  //   Cookies.set('lastVisitedPage', path, { expires: 1 }); 
  //   navigate(path);
  // };


  return (
    <Router>
      <div>
        <Routes>
          {/* main page */}
          <Route path="./page/Home.js" element={Home}/>

          {/* sub page */}
          <Route path="./page/sosialMedia.js" element={Sosialmedia}/>

          {/* page mapel */}
          <Route path="./page/bidang/IPA.js" element={Ipa}/>
          <Route path="./page/bidang/IPS.js" element={Ips}/>
          <Route path="./page/bidang/MTK.js" element={Mtk}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
