import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import FilteredProducts  from './components/Productos/FilteredProducts';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import {ItemDetail} from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

   const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleConfirmPurchase = () => {
    setCartCount(0);
    setCartItems([]);
  };

  const handleRemoveItem = (itemId) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);
    if (indexToRemove !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(indexToRemove, 1);
      setCartItems(updatedItems);
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} handleOpenModal={handleModal} />

      <Routes>
        <Route path="/" element={<ItemListContainer nombre="Productos" addToCart={addToCart} />} />
        <Route path="/productos" element={<Productos addToCart={addToCart} />} />
        <Route path="/productos/:productoId" element={<FilteredProducts addToCart={addToCart} />} />
        <Route path="/Contacto" element={<Contacto  />} />
        <Route path="/itemDetail" element={<ItemDetail addToCart={addToCart}/>} />
        
      </Routes>

      <Footer />
      <CartModal
        cartItems={cartItems}
        showModal={showModal}
        handleCloseModal={handleModal}
        handleConfirmPurchase={handleConfirmPurchase}
        handleRemoveItem={handleRemoveItem}
      />
    </BrowserRouter>
  );
}

export default App;







