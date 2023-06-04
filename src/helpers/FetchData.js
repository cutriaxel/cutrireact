import { mockData } from "../data/MOCK_DATA.JS";



export const fetchData = async (setCardData) => {

  // Simulando un retraso de red de 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Datos del mock


  setCardData(mockData);

};