import React, { useState, createContext } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
    Swal.fire({
      title: `${item.title} agregado al carrito`,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      customClass: {
        popup: 'custom-swal',
      },
    });
  };

  const eliminarDelCarrito = (id) => {
    const indexToRemove = cart.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      const updatedItems = [...cart];
      updatedItems.splice(indexToRemove, 1);
      setCart(updatedItems);

    }
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCompra = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price;
    })
    return totalPrice;
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        totalCompra,
        vaciarCarrito,
        eliminarDelCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
