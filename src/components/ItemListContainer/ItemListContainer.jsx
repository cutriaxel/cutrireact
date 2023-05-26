import React from 'react';
import './ItemListContainer.scss';



function ItemListContainer({ nombre }) {
  return (
    <div className='container__principal'>
      <div className="list__container">
        <div>
          <h2>{nombre}</h2>
          <hr />
          <p>Bienvenido a cutriTech!</p>
        </div>

      </div>
    </div>
  )
}

export default ItemListContainer