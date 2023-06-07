import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CartModal.scss';

const CartModal = ({
  cartItems,
  showModal,
  handleCloseModal,
  handleConfirmPurchase
}) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title> <h4>Carrito de Compras</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          {cartItems.length > 0 ? (
            <div className='modal-body'>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} width="100" height="100" />
                  <p>Precio: ${item.price}</p>
                  <hr />
                </div>
              ))}
              <p>Precio Total: ${calculateTotalPrice()}</p>
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal} >
          Seguir comprando
        </Button>
        <Button variant="success" onClick={handleConfirmPurchase}>
          Confirmar compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
