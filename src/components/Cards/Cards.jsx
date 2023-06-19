import React, { useEffect, useState } from "react";
import { CustomCard } from "..//CustomCard/CustomCard";

import "./Cards.scss";
import { pedirDatos } from "../../helpers/PedirDatos";
import { useParams } from "react-router-dom";

const Cards = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);


  const { productoId } = useParams();
  useEffect(() => {
    pedirDatos()
      .then((res) => {
        const filtered = res.filter(prod => prod.category === productoId)
        setItems(filtered)
        })
        .catch((err) => console.log(err))
        .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="principal-card">
      {loading ? (
        <h2>Cargando Productos</h2>
      ) : (
        <div className="card-container">
          {items.map((card) => (
            <CustomCard card={card} key={card.id} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
