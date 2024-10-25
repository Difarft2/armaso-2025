import "../css/menumapel.css"

import Ipa from "../img/cardMapel/Science-01.png.svg"
import Ips from "../img/cardMapel/Social-01.png.svg"
import Mtk from "../img/cardMapel/Math-01.png.svg"



const MenuMapel =()=>{
    return(
        <section>
            <h1 className="judul-mn">Our Competition</h1>

                <div className="Menu-container" id="menumapel">
                    <div className="IPA-contaiener">
                        <a href="/Mapel/Ipa" className="IPA-button">
                            <img src={Ipa} alt="IPA" className="card1" />
                        </a>
                    </div>

                    <div className="IPS-container">
                        <a href="/Mapel/Ips" className="IPS-button">
                            <img src={Ips} alt="IPS" className="card2" />
                        </a>
                    </div>

                    <div className="MTK-container">
                        <a href="/Mapel/Mtk" className="MTK-button">
                            <img src={Mtk} alt="MTK" className="card3" />
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default MenuMapel;
