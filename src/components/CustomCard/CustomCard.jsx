import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export const CustomCard = ({ card, addToCart }) => {
  console.log();
  const navigate = useNavigate();
  return (
    <Card key={card.id}>
      <Card.Img className="card-img" src={card.image} alt={card.title} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>${card.price}</Card.Text>
        <div className='container_detalle'>
          <Link style={{ textDecoration: 'none' }} className='detalle_card' to="/itemDetail" state={{ card: card }}  >
            Ver detalle
          </Link>
        </div>
        <Button variant="success" onClick={() => addToCart(card)} id="center-button">
          AÑADIR
        </Button>
      </Card.Body>
    </Card >
  )
}
