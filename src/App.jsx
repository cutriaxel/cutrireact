import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import Cards from './components/Cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <NavBar cartCount={cartCount} />
      <div>
        <ItemListContainer nombre="Hola, Axel Cutri" />
      </div>
      <Cards addToCart={addToCart} />
    </div>
  );
}

export default App;
