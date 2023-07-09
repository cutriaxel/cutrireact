import React from 'react';
import Cards from '../Cards/Cards';
import './Productos.scss';

const FilteredProducts = ({ addToCart }) => {
  return (
    <>
      <div className='nuestros-productos'>
        <h5> Nuestros <strong>Productos</strong></h5>
      </div>
      
        <Cards addToCart={addToCart} />
      
    </>
  );
};

export default FilteredProducts;








