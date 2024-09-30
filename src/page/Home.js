import "../css/parallaxhome.css";

import Navbar from "../components/navbar";
import ContactUS from "../components/contactus";
import Copyright from "../components/copyright";
import Parallax3 from "../animation/Parallax3";

import Loading1 from "../animation/loading1";
import Parallaxhome from "../animation/parallaxHome";

const Home = () => {
  return (
    <div>
      <Loading1>
        <Navbar/>
        <Parallaxhome/>
        <Parallax3/>
        <ContactUS />
        <Copyright />
      </Loading1>
    </div>
  );
};

export default Home;
