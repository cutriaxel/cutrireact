import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomCard } from "../CustomCard/CustomCard";
import "./Productos.scss";
import { pedirDatos } from "../../helpers/PedirDatos";
import { FadeLoader } from "react-spinners";

const Productos = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setCardData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="nuestros_productos">
        <h3>Nuestros productos</h3>
      </div>

      <div className="principal-card">
        {loading ? (
          <div className="loading-spinner">
            <FadeLoader color="#01f603" loading={loading} size={35} />
          </div>
        ) : (
          <div className="card-container">
            {cardData.map((card) => (
              <Link

                key={card.id}
                className="custom-card-link"
              >
                <CustomCard card={card} addToCart={addToCart} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Productos;

