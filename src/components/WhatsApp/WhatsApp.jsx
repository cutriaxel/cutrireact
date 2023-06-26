import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApp.scss';

const WhatsApp = ({ phoneNumber }) => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
    window.open(url, '_blank');
  };

  return (
    <a className="whatsapp-icon" href={`tel:${phoneNumber}`} onClick={handleClick}>
      <FaWhatsapp />
    </a>
  );
};

export default WhatsApp;
