import React from 'react';
import './ItemListContainer.scss';
import Button from 'react-bootstrap/Button';


function ItemListContainer({nombre}) {
  return  (
    <div className="list__container">
      <div>
        <h2>{nombre}</h2>
        <hr/>
        <p>Bienvenido al curso de React Js</p>
        </div>
       
    </div>
)
}

export default ItemListContainer