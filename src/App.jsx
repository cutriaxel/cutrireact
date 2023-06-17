import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Productos from './components/Productos/Productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    setCartCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    setCartCount(0);
    setCartItems([]);
    handleCloseModal();
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} handleOpenModal={handleOpenModal} />

      <Routes>
        <Route path="/" element={<ItemListContainer nombre="Productos" addToCart={addToCart} />} />
        <Route path="/Productos" element={<Productos addToCart={addToCart}  />} />
      </Routes>


      <Footer />
      <CartModal
        cartItems={cartItems}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
      />
    </BrowserRouter>
  );
}

export default App;








