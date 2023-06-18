import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos.js";

export const useFetchData = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((data) => {
        setCardData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return cardData;
};