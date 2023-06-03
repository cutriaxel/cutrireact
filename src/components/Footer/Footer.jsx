import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-column">
          <h3>¡Contactanos!</h3>
          <ul>
            <li><a href="#">Coronel Perin 3715 Ciudadela (CABA)</a></li>
            <li><a href="#">Florida 537 PB, Local 379 Microcentro (CABA)</a></li>
            <li><a href="#">Whatsapp: +54 11 5833-7022</a></li>
            <li><a href="#">empresas@cutritech.com.ar</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Nuestros Horarios</h3>
          <ul>
            <li><a href="#">Ciudadela Lun a Vier. 9:00 AM - 18:00 PM Sab 10:00 AM - 14:30 PM.</a></li>
            <li><a href="#">Florida Local Lun a Vier. 10:00 AM a 19:00 PM Sab 10:00 AM - 14:30 PM</a></li>
          </ul>
        </div>
        <div className="footer-column social-icons-column">
          <h3>Redes</h3>
          <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faWhatsapp} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon"  icon={faFacebook} /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Defensa del Consumidor</h3>
          <ul>
            <li><a href="#">Ley de defensa del consumidor</a></li>
            <li><a href="#">Conocé tus derechos consumidor</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

