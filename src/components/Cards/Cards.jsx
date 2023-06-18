import React from "react";
import './Cards.scss';
import { useFetchData } from "../../helpers/FetchData";
import { CustomCard } from '..//CustomCard/CustomCard';

const Cards = ({ addToCart }) => {
  const cardData = useFetchData();

  return (
    <div className="principal-card">
      <div className="card-container">
        {cardData.map((card) => (
          <CustomCard card={card} key={card.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Cards;