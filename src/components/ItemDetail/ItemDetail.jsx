import React from 'react';
import Swal from 'sweetalert2';
import './ItemDetail.scss';
import { Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';


export const ItemDetail = ({ addToCart }) => {
  const { state } = useLocation();

  const handleAddToCart = () => {
    addToCart(state.card);
    Swal.fire({
      title: `${state.card.title} agregado al carrito`,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      customClass: {
        popup: 'custom-swal',
      },
    });
  };

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
        <Button className="item-detail-button" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </div>
    </div>
    </div>
  );
};


