import "../css/contactus.css"
import { Link } from "react-router-dom";

import igIco from "../img/ico/instagram-logo.png"
import ytIco from "../img/ico/youtube.png"
import emailico from "../img/ico/email.png"
import glbico from "../img/ico/globe.png"
import mapico from "../img/ico/map.png"
import waico from "../img/ico/whatsapp.png"

const ContactUS = () => {
    return ( <
        section className = "contactUS-container"
        id = "contactus" >
            <div className="bagKanan-container">
                <p>Contact US</p>

                <div className="noWa-1">
                    <img className="wa-1" src={waico} alt="wa" />
                    <Link to="#" target="_blank">Admin 1</Link>
                </div>

                <div className="noWa-2">
                    <img className="wa-2" src={waico} alt="wa" />
                    <Link to="#" target="_blank">Admin 2</Link>
                </div>

                <div className="noWa-3">
                    <img className="wa-3" src={waico} alt="wa" />
                    <Link to="#" target="_blank">Admin 3</Link>
                </div>
            </div>

            <div className="bagTengah-container">
                <p>Other Link</p>

                <div className="maps">
                    <img className="map" src={mapico} alt="map" />
                    <Link to="https://www.google.com/maps/place/SMP-SMA+Plus+Ar+Rahmat/@-7.1576623,111.8758344,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7781f2f1a405b1:0x819ab1678038f906!8m2!3d-7.1576676!4d111.8784093!16s%2Fg%2F1hm4rd1kh?hl=id&entry=tts" target="_blank">Maps</Link>
                </div>

                <div className="website">
                    <img className="web" src={glbico} alt="website Arrahmat" />
                    <Link to="https://www.arrahmat-bjn.sch.id/" target="_blank">Arrahmat</Link>
                </div>

                <div className="mail">
                    <img className="mail-ico" src={emailico} alt="mail" />
                    <Link to="mailto:armasoarrahmatbjn@gmail.com">Mail</Link>
                </div>
            </div>

            <div className="bagKiri-container">
                <p>Media Sosial</p>

                <div className="ig-armaso">
                    <img className="armaso-ig" src={igIco} alt="ig-armaso" />
                    <Link to="https://www.instagram.com/armaso_arrahmat/" target="_blank">Armaso</Link>
                </div>

                <div className="ig-arrahmat">
                    <img className="arrahmat-ig" src={igIco} alt="ig-arrahmat" />
                    <Link to="https://www.instagram.com/arrahmatofficial/" target="_blank">ArrahmatOfficial</Link>
                </div>

                <div className="ig-oppra">
                    <img className="oppra-ig" src={igIco} alt="ig-oppra" />
                    <Link to="https://www.instagram.com/oppra_arrahmat/" target="_blank">Oppra</Link>
                </div>

                <div className="yt-arrahmat">
                    <img className="arrahmat-yt" src={ytIco} alt="yt=arrahmat" />
                    <Link to="https://www.youtube.com/@ArRahmatOfficial" target="_blank">ArrahmatOfficial</Link>
                </div>
            </div>
        </section>
    )
}

export default ContactUS;