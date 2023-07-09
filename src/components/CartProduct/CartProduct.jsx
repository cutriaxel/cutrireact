import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";

export const CartProduct = ({ prod }) => {
  const { eliminarDelCarrito, sumarCantidad, restarCantidad } = useContext(CartContext);

  const calcularPrecioTotal = () => {
    return prod.price * prod.cantidad;
  };

  return (
    <div className="producto-container" key={prod.id}>
      <div className="producto-imagen">
        <img src={prod.image} alt={prod.title} />
      </div>
      <div className="producto-info">
        <p style={{color: 'white', fontSize: '18px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>{prod.title}</p>
        <p style={{color: 'white', fontSize: '10px'}}>{prod.id}</p>
      </div>
      <div className="contador">
        <button onClick={() => restarCantidad(prod)}>-</button>
        <p style={{color: 'white', fontSize: '16px', }}>{prod.cantidad}</p>
        <button onClick={() => sumarCantidad(prod)}>+</button>
      </div>
      <div className="producto-precio">
        <div>
          <div>
            <p style={{color: 'white', fontSize: '20px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>${calcularPrecioTotal()}</p>
          </div>
          <div>
            <FontAwesomeIcon
              style={{ color: "rgb(176, 169, 159)" }}
              icon={faTrash}
              onClick={() => eliminarDelCarrito(item.id)}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

