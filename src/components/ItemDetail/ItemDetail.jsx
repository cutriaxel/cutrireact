import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../data/MOCK_DATA.json'

const ItemDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data/MOCK_DATA.json${id}'); 
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!card) {
    return <div>Cargando detalle del producto...</div>;
  }

  return (
    <div>
      <h2>{card.title}</h2>
      <p>Precio: ${card.price}</p>
      <p>Descripción: {card.description}</p>
      {/* Agrega aquí cualquier otro detalle que desees mostrar */}
      <img src={card.image} alt={card.title} />
    </div>
  );
};

export default ItemDetail;