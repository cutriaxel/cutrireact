import React, { useEffect, useState, useContext } from "react";
import { CustomCard } from "../CustomCard/CustomCard";
import "./Productos.scss";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config";
import { FadeLoader } from "react-spinners";
import { CartContext } from "../../Context/CartContext"; 

const Productos = () => {
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCardData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    agregarAlCarrito(item); 
    alert(`${item.title} agregado al carrito`);
  };

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
              <div key={card.id} className="custom-card-link">
                <CustomCard card={card} addToCart={handleAddToCart} /> 
              </div>
              
            ))}
          </div>
        )}
      </div>
      <div className="help"></div>
    </>
  );
};

export default Productos;

