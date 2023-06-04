import React from 'react'
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ card, addToCart }) => {
  return (
    <Card key={card.id}>
      <Card.Img className="card-img" src={card.image} alt="Procesador" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.price}</Card.Text>
        <Button variant="success" onClick={() => addToCart(card)} id="center-button">
          AÑADIR
        </Button>
      </Card.Body>
    </Card>
  )
}
