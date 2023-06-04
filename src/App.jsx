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
    console.log("added");
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <NavBar cartCount={cartCount} />
      <Carousel />
      <Banner />
      <PcRecomendadas />
      <ItemListContainer nombre="Productos" />
      <Cards addToCart={addToCart} />
      <Footer />

    </>
  );
}

export default App;
