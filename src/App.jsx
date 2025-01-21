import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Assets/Navbar/Navbar';
import Carrinho from './Pages/Carrinho';
import Item from './Pages/Item';
import Produtos from './Pages/Produtos';
import CepModal from './Components/Assets/CepModal/CepModal'; // Importe o modal de CEP

const AppContent = () => {
  const location = useLocation(); // Hook dentro do componente funcional
  const [isCepModalOpen, setIsCepModalOpen] = useState(false); // Estado para controlar o modal de CEP

  useEffect(() => {
    // Lógica para exibir o modal apenas na primeira visita
    const savedCep = localStorage.getItem("cep");
    if (!savedCep) {
      setIsCepModalOpen(true);
    }
  }, []);

  return (
    <>
      {/* Modal de CEP */}
      <CepModal isOpen={isCepModalOpen} onClose={() => setIsCepModalOpen(false)} />

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
