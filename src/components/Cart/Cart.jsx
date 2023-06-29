import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <div className="resumen-compra">
        <h2>Detalle de compra</h2>
      </div>
      <hr />

      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {cart.map((prod) => (
              <div className="producto-container" key={prod.id}>
               <hr />
                <div className="producto-imagen">
                  <img src={prod.image} alt={prod.title} />
                </div>
                <div className="producto-info">
                  <div className="producto-titulo">
                    <h4>{prod.title}</h4>
                  </div>
                  <div className="col-md-2 producto-precio">
                    <p> ${prod.price}</p>
                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(prod.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="col-md-3">
            <div className="container-compra">
              <div className="total-compra">
                <h5>Total: ${totalCompra()}</h5>
              </div>
              <hr />
              <div className="btn-compra">
                <div className="btn-pagar">
                  <button onClick={vaciarCarrito} className="btn btn-success">
                    Ir a pagar
                  </button>
                </div>
                <div className="btn-vaciar">
                  <button onClick={vaciarCarrito} className="btn btn-danger">
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="carrito-vacio">
          <p>El carrito está vacío.</p>
          <button className="btn btn-primary">Ir a productos</button>
        </div>
      )}
    </div>
  );
};

export default Cart;