import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import '../src/css/app.css'

//page
import Home from "./page/Home";
import Ipa from "./page/IPA";
import Ips from "./page/IPS";
import Mtk from "./page/MTK";
import Notfound from "./page/Notfound";


function App() {
return (
  <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* Route path mapel */}
          <Route path="/Mapel/Ipa" element={<Ipa/>}/>
          <Route path="/Mapel/Ips" element={<Ips/>}/>
          <Route path="/Mapel/Mtk" element={<Mtk/>}/>
          {/* Not found path */}
          <Route path="*" element={<Notfound/>}/>
      </Routes>
  </Router>
);
}

export default App;
