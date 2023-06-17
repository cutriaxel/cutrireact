import React from 'react';
import './ItemListContainer.scss';
import Cards from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import PcRecomendadas from '../PcRecomendadas/PcRecomendadas';
import { useParams } from 'react-router-dom';


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
           <a href="#action1" style={{ color: '#40a640' }}>
              Ver todo
            </a>
          </div>
        </div>
      </div>
      <div >
        <Cards addToCart={addToCart} />
      </div>
    </>
  );
}

export default ItemListContainer;
