import React from 'react'
import './CartWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart}  className="cart-icon" />
      <span className="badge badge-black">4</span>
    </div>
  );
}

export default CartWidget;