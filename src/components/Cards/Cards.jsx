import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/config";
import { CustomCard } from "../CustomCard/CustomCard";
import { FadeLoader } from "react-spinners";
import "./Cards.scss";

const Cards = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { productoId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", productoId));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productoId]);

  return (
    <div className="principal-card">
      {loading ? (
        <div className="loading-spinner">
          <FadeLoader color="#01f603" loading={loading} size={45} />
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


