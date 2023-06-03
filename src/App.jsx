import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import Cards from './components/Cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import PcRecomendadas from './components/PcRecomendadas/PcRecomendadas';
import Footer from './components/Footer/Footer';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <NavBar cartCount={cartCount} />
      
        <div>
          <Carousel />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <PcRecomendadas />
        </div>
        <div>
        <ItemListContainer nombre="Productos" />
      </div>
      <div>
      <Cards addToCart={addToCart} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
