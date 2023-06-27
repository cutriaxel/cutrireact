import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import './ItemDetail.scss';
import { Button } from "react-bootstrap";
import { CartContext } from '../../Context/CartContext';
import { Link, useLocation } from 'react-router-dom';


export const ItemDetail = ({ addToCart }) => {
  const { state } = useLocation();
  const { agregarAlCarrito } = useContext(CartContext);
;

  return (
    <div className='principal-detail'>
    <div className="item-detail-container">
      <div className='img_container'>
      <img src={state.card.image} className="item-detail-image" alt={state.card.title} />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-title">{state.card.title}</h2>
        <p className="item-detail-description">{state.card.description}</p>
        <h3 className='item-detail-final'>Precio final:</h3>
        <p className="item-detail-price">${state.card.price}</p>
        <Button className="item-detail-button" onClick={() => agregarAlCarrito(state.card)}>
          Agregar al carrito
        </Button>
        <Button>
        <Link  to="/cart"> VER </Link>
        </Button>
        
      </div>
    </div>
    </div>
  );
};


