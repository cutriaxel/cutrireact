import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import carousel1 from '../../assets/carrusel1.jpg';
import carousel2 from '../../assets/carrusel2.jpg';
import carousel3 from '../../assets/carrusel3.jpg';
import './Carousel.scss';

const carouselItems = [
  {
    src: carousel1,
    alt: 'Primera imagen'
  },
  {
    src: carousel2,
    alt: 'Segunda imagen'
  },
  {
    src: carousel3,
    alt: 'Tercera imagen'
  }
];

function Carousel() {
  return (
    <BootstrapCarousel className="custom-carousel">
      {carouselItems.map((item, index) => (
        <BootstrapCarousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
}

export default Carousel;
