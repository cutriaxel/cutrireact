import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} width="100" height="100" />
                <p>Precio: ${item.price}</p>
                <hr />
              </div>
            ))}
            <p>Precio Total: ${calculateTotalPrice()}</p> {/* Modificación aquí */}
          </div>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Seguir comprando
        </Button>
        <Button variant="primary" onClick={handleConfirmPurchase}>
          Confirmar compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
