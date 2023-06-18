import { mockData } from "../data/MOCK_DATA";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};