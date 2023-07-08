import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import './CartModal.scss';
import { CartContext } from '../../Context/CartContext';

const CartModal = ({
  showModal,
  handleCloseModal,
}) => {

  const calcularPrecioTotal = () => {
    return prod.price * prod.cantidad;
  };


  const {cart, eliminarDelCarrito, totalCompra, vaciarCarrito} = useContext(CartContext);

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>Carrito de Compras</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          {cart.length > 0 ? (
            <div className="modal-body">
              {cart.map((item, index) => (
                <div key={item.id}>
                  <p>{item.title}</p>
                  <div className="item-container">
                    <img src={item.image} alt={item.title} width="100" height="100" />
                    <div>
            <FontAwesomeIcon
              style={{ color: "rgb(176, 169, 159)" }}
              icon={faTrash}
              onClick={() => eliminarDelCarrito(item.id)}
            />
          </div>
                  </div>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: ${item.price}</p>
                  <hr />
                </div>
              ))}
              { <p>Precio Total: ${totalCompra()}</p> }
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Seguir comprando
        </Button>
        <Button variant="success" onClick={vaciarCarrito}>
          Confirmar compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
