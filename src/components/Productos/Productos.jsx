import React from 'react';
import Cards from '../Cards/Cards';
import './Productos.scss';

const Productos = ({ addToCart }) => {

  
  return (
    <>
    <div className='nuestros-productos'>
    <h5> Nuestros <strong>Productos</strong></h5>
    </div>
    <div>
    <Cards addToCart={addToCart} />
    </div>
    </>
  );
};

export default Productos;






