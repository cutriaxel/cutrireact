import React, { useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './CustomCard.scss'

export const CustomCard = ({ card }) => {
  const {agregarAlCarrito } = useContext(CartContext);
  return (
    <Card key={card.id}>
      <Card.Img className="card-img" src={card.image} alt={card.title} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>${card.price}</Card.Text>
        <div className='container_detalle'>
          <Link className='detalle_card' to="/itemDetail" state={{ card: card }}  >
            Ver detalle
          </Link>
        </div>
        <Button variant="success" onClick={() => agregarAlCarrito(card)} id="center-button">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card >
  )
}
