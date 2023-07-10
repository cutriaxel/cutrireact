import React, { useContext } from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Button from '@mui/material/Button';
import { AddShoppingCart } from '@mui/icons-material';
import './CustomCard.scss';

export const CustomCard = ({ card }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  return (
    <Card key={card.id}>
      <Card.Img className="card-img" src={card.image} alt={card.title} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>${card.price}</Card.Text>
        <div className='container_detalle'>
          <Link className='detalle_card' to="/itemDetail" state={{ card: card }}>
            Ver detalle
          </Link>
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#40a640", color: "#fff" }}
          startIcon={<AddShoppingCart />}
          onClick={() => agregarAlCarrito(card)}
          id="center-button"
        >
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};
