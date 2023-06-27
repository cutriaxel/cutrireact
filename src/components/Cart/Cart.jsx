import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';

const Cart = (card) => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);
console.log(card);
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />


      {cart.map((prod) => (
        <div key={prod.id} style={{height: "100px"}}>
          <h4>{prod.title}</h4>
          <img src={prod.image} alt={prod.title} />
          <p>Precio: ${prod.price}</p>
          <p>Cantidad: {prod.quantity}</p>
          <button className="btn btn-danger" onClick={() => eliminarDelCarrito(prod.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <hr />
        </div>
      ))}

      <div>
        <h5>Total: ${totalCompra()}</h5>
        <hr />
        <button onClick={vaciarCarrito} className="btn btn-danger">
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
