import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);

  return (
    <div>
      <div className={`resumen-compra ${cart.length === 0 ? 'empty' : ''}`}>
        <h2 className="detalle-compra">Detalle de compra</h2>
      </div>
      <hr />

      {cart.length > 0 ? (
        <div>
          <div className="principal-container">
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
                  <div className="producto-precio">
                    <p> ${prod.price}</p>
                    <FontAwesomeIcon icon={faTrash} onClick={() => eliminarDelCarrito(prod.id)} />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>

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
      ) : (
        <div className="carrito-vacio">
          <p>El carrito está vacío.</p>
          <Link to="/productos">
            <button className="btn btn-primary">Ir a productos</button>
          </Link>
          <div className='prueba'> </div>
        </div>
      )}
    </div>
  );
};

export default Cart;