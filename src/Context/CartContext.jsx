import React, { useState, createContext, } from "react";
import "./CartContext.scss";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    const index = cart.findIndex((prod) => prod.id === item.id);

    if (index !== -1) {
      cart[index].cantidad += 1;
      setCart([...cart]);
    } else {
      item.cantidad = 1;
      setCart([...cart, item]);
    }

    Swal.fire({
      title: `${item.title} agregado al carrito`,
      icon: "success",
      timer: 900,
      timerProgressBar: true,
      showConfirmButton: false,
      customClass: {
        popup: "custom-swal",
      },
    });
  };

  const eliminarDelCarrito = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);
    setCart(updatedItems);
  };

  const totalCompra = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.cantidad;
    });
    return totalPrice;
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const sumarCantidad = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.id === prod.id) {
        item.cantidad += 1;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const restarCantidad = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.id === prod.id && item.cantidad > 0) {
        item.cantidad -= 1;
      }
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        totalCompra,
        vaciarCarrito,
        eliminarDelCarrito,
        sumarCantidad,
        restarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};