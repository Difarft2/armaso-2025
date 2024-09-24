import "../css/menumapel.css"

import Ipa from "../img/cardMapel/cb1.png"



const MenuMapel =()=>{
    return(
        <section>
                <div className="Menu-container" id="menumapel">
                    <div className="IPA-contaiener">
                        <a href="/Mapel/Ipa" className="IPA-button">
                            <img src={Ipa} alt="IPA" className="card" />
                        </a>
                    </div>

                    <div className="IPS-container">
                        <a href="/Mapel/Ips" className="IPS-button">
                            <img src={Ipa} alt="IPS" className="card" />
                        </a>
                    </div>

                    <div className="MTK-container">
                        <a href="/Mapel/Mtk" className="MTK-button">
                            <img src={Ipa} alt="MTK" className="card" />
                        </a>
                    </div>
                </div>
        </section>
    )
}

export default MenuMapel;
