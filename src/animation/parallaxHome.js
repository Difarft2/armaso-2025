import "../css/parallaxhome.css";

import bobawah from "../img/AssetWebsite/borderrrrrrrrrrrr.png"
import ground1 from "../img/AssetWebsite/Ground1-01.png"
import ground2 from "../img/AssetWebsite/Ground2-01.png"
import ground3 from "../img/AssetWebsite/Ground3-01.png"
import kastil from "../img/AssetWebsite/Castle-01.png"
import iwak from "../img/AssetWebsite/TopAnimals-01.png"



const Parallaxhome = () => {
    return (
        <div className="prhome-container">
            <div className="border">
                <img  src={bobawah} alt="" className="border-img"/>
            </div>

            <div className="grd1">
                <img src={ground1} alt="" className="grd-img1"/>
            </div>

            <div className="grd2">
                <img src={ground2} alt="" className="grd-img2"/>
            </div>

            <div className="grd3">
                <img src={ground3} alt="" className="grd-img3"/>
            </div>

            <div className="iwak">
                <img src={iwak} alt="" className="iwak-img"/>
            </div>

            <div className="kastil">
                <img src={kastil} alt="" className="kastil-img"/>
            </div>
        </div>
    );
};

export default Parallaxhome;