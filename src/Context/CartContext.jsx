import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount((prevCount) => prevCount + 1);
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

  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        showModal,
        addToCart,
        handleOpenModal,
        handleCloseModal,
        handleConfirmPurchase,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};