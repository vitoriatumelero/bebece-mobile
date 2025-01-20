import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Assets/Navbar/Navbar';
import Carrinho from './Pages/Carrinho';
import Item from './Pages/Item';
import Produtos from './Pages/Produtos';

const AppContent = () => {
  const location = useLocation(); // Hook dentro do componente funcional

  return (
    <>
      {/* Navbar só será exibida se não estivermos na rota "/carrinho" */}
      {location.pathname !== "/carrinho" && <Navbar />}
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/item/:itemid" element={<Item />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
