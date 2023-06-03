// Cards.jsx

import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import imagen1 from '..//..//assets/imagen1.jpg';
import imagen2 from '..//..//assets/imagen2.jpg';
import imagen3 from '..//..//assets/imagen3.jpg';
import imagen4 from '..//..//assets/imagen4.jpg';
import imagen5 from '..//..//assets/imagen5.jpg';
import imagen6 from '..//..//assets/imagen6.jpg';
import imagen7 from '..//..//assets/imagen7.jpg';
import './Cards.scss';

const Cards = ({ addToCart }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulando un retraso de red de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Datos del mock
      const mockData = [
        {
          id: 1,
          image: imagen1,
          title: "Micro Amd Ryzen 7 5700g 4.6 Ghz Am4",
          price: "$155.200"
        },
        {
          id: 2,
          image: imagen2,
          title: "Micro Intel I9-11700kf 5.0ghz 16mb s.1200",
          price: "$221.674"
        },
        {
          id: 3,
          image: imagen3,
          title: "Micro Amd Ryzen 9 5900x 4.8 Ghz Am4",
          price: "$295.000"
        },
        {
          id: 4,
          image: imagen4,
          title: "Monitor LED CURVO 24 Samsung",
          price: "$108.823"
        },
        {
          id: 5,
          image: imagen5,
          title: "Silla Gamer Genesis RGB Black",
          price: "$134.999"
        },
        {
          id: 6,
          image: imagen6,
          title: "Fury Thunderstreak Combo",
          price: "$11.834"
        },
        {
          id: 7,
          image: imagen7,
          title: "Auricular Genesis Neon 750 Rgb Black",
          price: "$21.250"
        }
      ];

      setCardData(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {cardData.map((card) => (
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
      ))}
    </div>
  );
};

export default Cards;



