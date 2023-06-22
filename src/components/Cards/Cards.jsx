import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/PedirDatos";
import { CustomCard } from "../CustomCard/CustomCard";
import { FadeLoader } from "react-spinners";
import "./Cards.scss";

const Cards = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { productoId } = useParams();

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        const filtered = res.filter((prod) => prod.category === productoId);
        setItems(filtered);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [productoId]);

  return (
    <div className="principal-card">
      {loading ? (
        <div className="loading-spinner">
          <FadeLoader color="#01f603" loading={loading} size={35} />
        </div>
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

