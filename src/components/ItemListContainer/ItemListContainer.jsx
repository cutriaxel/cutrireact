import React from 'react';
import './ItemListContainer.scss';



function ItemListContainer({ nombre }) {
  return (
    <div className='container__principal'>
      <div className="list__container">
        <div>
          <h5>{nombre} <strong>Destacados</strong> </h5>
          <hr style={{ color: 'white'}}/>
          <a href='#action1' style={{ color: '#40a640'}} >Ver todo</a>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer