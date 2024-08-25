import React  from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import {useNavigate } from "react-router-dom";



import Home from "./page/Home";

// import Copyright from "./components/copyright";

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
          <Route path="./page/Home.js" element={Home}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
