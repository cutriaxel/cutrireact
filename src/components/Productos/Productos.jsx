import React, { useEffect, useState } from "react";
import "./Productos.scss";
import { useFetchData } from "../../helpers/FetchData";
import { pedirDatos } from "../../helpers/PedirDatos";
import { CustomCard } from "../CustomCard/CustomCard";
import { FadeLoader } from "react-spinners";


const Productos = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);

  const cardData = useFetchData();
  console.log(cardData);
  useEffect(() => {
    pedirDatos()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
    <div className="nuestros_productos">
    <h3>Nuestos productos</h3>
    </div>

    <div className="principal-card">
     

      {loading ? (
        <div className="loading-spinner">
        <FadeLoader color="#01f603" loading={loading} size={35} />
      </div>
      ) : (
        <div className="card-container">
          {cardData.map((card) => (
            <CustomCard card={card} key={card.id} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Productos;
