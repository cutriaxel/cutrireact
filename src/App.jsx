import React from 'react';
import { CartProvider } from './Context/CartContext';
import { AuthContextProvider } from "./Context/AuthContext";
import AppRouter from './Router/AppRouter';


function App() {
  

  return (
    <AuthContextProvider>
        <CartProvider>
              <AppRouter />
        </CartProvider>
    </AuthContextProvider>
  );
}

export default App;







