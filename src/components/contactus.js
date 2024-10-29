import "../css/contactus.css";

import igIco from "../img/ico/instagram-logo.svg";
import mapico from "../img/ico/map.svg";
import waico from "../img/ico/whatsapp.svg";
import ytico from "../img/ico/youtube.svg"
import web from "../img/ico/globe.svg"

import { igarmaso } from "../setting/otherlink";
import { ytarrahmat } from "../setting/otherlink";
import { wa1 } from "../setting/otherlink";
import { wa2 } from "../setting/otherlink";
import { lokasi } from "../setting/otherlink";
import { webarahmat } from "../setting/otherlink";


const ContactUS = () => {
  return (
    <div id="/#contactus">
      <h1 className="judul-ct">Contact Us</h1> 
      <div className="container-contact-us">
        <div className="whatsapp">
          <div className="icon">
            <img src={waico} alt="WhatsApp Logo" />
          </div>
          <p><a href={wa1}  target="_blank" rel="noopener noreferrer">+6281234604006 (Adhamara)</a></p>
          <p><a href={wa2}  target="_blank" rel="noopener noreferrer">+6283847049148 (Rafif)</a></p>
        </div>

        <div className="other">
          <div className="icon-map">
            <img src={mapico} alt="Map Logo" />
              <p><a href={lokasi}  target="_blank" rel="noopener noreferrer">
                PPM Ar Rahmat Bojonegoro
              </a></p>
          </div>
        </div>

        <div className="mediasosial">
          <div className="ic">
            <img src={igIco} alt="Instagram Logo" />
            <p><a href={igarmaso}  target="_blank" rel="noopener noreferrer">@armaso_arrahmat</a></p>
          </div>

          <div className="ic">
            <img src={ytico} alt="youtube Logo" />
            <p><a href={ytarrahmat}  target="_blank" rel="noopener noreferrer">Ar-Rahmat Official</a></p>
          </div>

          <div className="ic">
            <img src={web} alt="website Logo" />
            <p><a href={webarahmat}  target="_blank" rel="noopener noreferrer">arrahmat-bjn.sch.id</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;