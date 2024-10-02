import "../css/contactus.css";
import igIco from "../img/ico/instagram-logo.png";
import emailico from "../img/ico/email.png";
import mapico from "../img/ico/map.png";
import waico from "../img/ico/whatsapp.png";

const ContactUS = () => {
  return (
    <div id="/#contactus">
      <h1>Contact Us</h1> 
      <div className="container-contact-us">
        <div className="whatsapp">
          <div className="icon">
            <img src={waico} alt="WhatsApp Logo" />
          </div>
          <p><a href="url">Arrafi Raihan Ramadhan</a></p>
          <p><a href="url">Rafif Ibrahim Mahfid</a></p>
          <p><a href="url">Dimas Fata Aridluja</a></p>
        </div>

        <div className="other">
          <div className="icon-map">
            <img src={mapico} alt="Map Logo" />
            <a href="https://www.google.com/maps/place/SMP-SMA+Plus+Ar+Rahmat">
              PPM Ar Rahmat Bojonegoro
            </a>
          </div>

          <div className="icon-email">
            <img src={emailico} alt="Email Logo" />
            <a href="mailto:armasoarrahmatbjn@gmail.com">
              armasoarrahmat@gmail.com
            </a>
          </div>
        </div>

        <div className="instagram">
          <div className="icon">
            <img src={igIco} alt="Instagram Logo" />
          </div>
          <p><a href="https://www.instagram.com/arrahmat_bjn/">@arrahmat_bjn</a></p>
          <p><a href="https://www.instagram.com/oppra_arrahmat/">@oppra_arrahmat</a></p>
          <p><a href="https://www.instagram.com/armaso_arrahmat/">@armaso_arrahmat</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;