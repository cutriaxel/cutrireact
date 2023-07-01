import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

export const useFetchData = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCardData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return cardData;
};
