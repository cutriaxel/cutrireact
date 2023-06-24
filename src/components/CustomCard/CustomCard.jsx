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
        <Button variant="success" onClick={() => addToCart(card)} id="center-button">
          AÑADIR
        </Button>
        {/* <Button variant="success" id="center-button"> */}
        <ul>
          <li>
            <Link className='nav__link' to="/itemDetail" state={{card: card}} >
            DETALLE
          </Link>
        </li>
      </ul>
      {/* </Button> */}

    </Card.Body>
    </Card >
  )
}
