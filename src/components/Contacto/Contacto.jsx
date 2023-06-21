import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  return (

<>
<div className='name'><h1> Contacto </h1></div>
    <div className="content">
      

      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Datos Personales</h3>
          <form action="">
            <p>
              <label>Nombre y Apellido</label>
              <input type="text" name="fullname" />
            </p>
            <p>
              <label>Correo electronico</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Numero de telefono</label>
              <input type="tel" name="phone" />
            </p>
            <p>
              <label>Pais</label>
              <input type="text" name="affair" />
            </p>
            <p className="block">
              <label>Mensaje</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
              <button>
                Enviar 
              </button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Nosotros</h4>
          <ul>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida 537 PB, Local 379 Microcentro (CABA)</li>
          <li><FontAwesomeIcon icon={faPhone} /> (011) +54 5833-7022</li>
          <li><FontAwesomeIcon icon={faEnvelopeOpenText} /> cutritech@hotmail.com</li>
          </ul>
          <p>De Lunes a Viernes de 9hs a 18hs , Sabado 10 a 14:30hs</p>
        </div>
      </div>

    </div>
    </>
  );
};
export default Contacto;
