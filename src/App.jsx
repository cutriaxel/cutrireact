import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import FilteredProducts from './components/Productos/FilteredProducts';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };


  const phoneNumber = '+5491158337062';

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar handleOpenModal={handleModal} />

        <Routes>
          <Route path="/" element={<ItemListContainer nombre="Productos" />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:productoId" element={<FilteredProducts />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail" element={<ItemDetail />} />

        </Routes>
        <WhatsApp phoneNumber={phoneNumber} />
        <Footer />
        <CartModal
          showModal={showModal}
          handleCloseModal={handleModal}
        />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;







