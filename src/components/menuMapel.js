import "../css/menumapel.css"

const MenuMapel =()=>{
    return(
        <section>
                <div className="Menu-container" id="menumapel">
                    <div className="IPA-contaiener">
                        <a href="/Mapel/Ipa"><button className="IPA-button">IPA</button></a>
                    </div>

                    <div className="IPS-container">
                        <a href="/Mapel/Ips"><button className="IPS-button">IPS</button></a>
                        
                    </div>

                    <div className="MTK-container">
                        <a href="/Mapel/Mtk"><button className="MTK-button">MTK</button></a>
                    </div>
                </div>
        </section>
    )
}

export default MenuMapel;
