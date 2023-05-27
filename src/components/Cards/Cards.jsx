// Cards.jsx

import React from "react";
import { Card, Button } from "react-bootstrap";
import imagen1 from '..//..//assets/imagen1.jpg';
import imagen2 from '..//..//assets/imagen2.jpg';
import imagen3 from '..//..//assets/imagen3.jpg';
import './Cards.scss';

const cardData = [
  {
    id: 1,
    image: imagen1,
    title: "Amd Ryzen 7",
    price: "$90"
  },
  {
    id: 2,
    image: imagen2,
    title: "Intel Core 9",
    price: "$80"
  },
  {
    id: 3,
    image: imagen3,
    title: "Amd Ryzen 9",
    price: "$100"
  },
];

function Cards({ addToCart }) {
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <Card key={card.id}>
          <Card.Img className="card-img" src={card.image} alt="Procesador"/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.price}</Card.Text>
            <Button variant="primary" onClick={addToCart} id="center-button">
              AÑADIR AL CARRITO
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;

