import React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import {useNavigate } from "react-router-dom";

//page
import Home from "./page/home";
import Ipa from "./page/IPA";
import Ips from "./page/IPS";
import Mtk from "./page/MTK";
import ContactUs from "./page/contactUs";

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
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Route path sub main */}
        <Route path="/ContactUS" element={<ContactUs/>}/>
        {/* Route path mapel */}
        <Route path="/Mapel/Ipa" element={<Ipa/>}/>
        <Route path="/Mapel/Ips" element={<Ips/>}/>
        <Route path="/Mapel/Mtk" element={<Mtk/>}/>
      </Routes>
    </Router>
  );
}

export default App;
