import React from 'react';
import './ItemListContainer.scss';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import PcRecomendadas from '../PcRecomendadas/PcRecomendadas';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';


function ItemListContainer({ nombre, addToCart }) {
  return (
    <>
      <Carousel />
      <Banner />
      <PcRecomendadas />
      <div className="container__principal">
        <div className="list__container">
          <div>
            <h5>
              {nombre} <strong>Destacados</strong>{' '}
            </h5>
            <hr style={{ color: 'white' }} />
            <Link to="/productos" style={{ color: '#40a640' }}>
              Ver todo
            </Link>
          </div>
        </div>
      </div>

      <Slider />
     
    </>
  );
}

export default ItemListContainer;
