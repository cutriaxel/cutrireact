import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import Cards from './components/Cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import PcRecomendadas from './components/PcRecomendadas/PcRecomendadas';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    setCartCount(prevCount => prevCount + 1);
    setCartItems(prevItems => [...prevItems, item]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    // Aquí puedes implementar la lógica para confirmar la compra
    // Por ejemplo, puedes hacer una solicitud al servidor para procesar la compra
    // y luego restablecer el carrito y el contador.
    setCartCount(0);
    setCartItems([]);
    handleCloseModal();
  };

  return (
    <>
      <NavBar cartCount={cartCount} handleOpenModal={handleOpenModal} />
      <Carousel />
      <Banner />
      <PcRecomendadas />
      <ItemListContainer nombre="Productos" />
      <Cards addToCart={addToCart} />
      <Footer />

      <CartModal
        cartItems={cartItems}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
      />
    </>
  );
}

export default App;







