import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Assets/Navbar/Navbar';
import Carrinho from './Pages/Carrinho';
import Item from './Pages/Item';
import Produtos from './Pages/Produtos';
import CepModal from './Components/Assets/CepModal/CepModal';
import LocationBar from './Components/Assets/LocationBar/LocationBar'; 

const AppContent = () => {
  const location = useLocation();
  const [isCepModalOpen, setIsCepModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null); // Estado para a localização do usuário

  useEffect(() => {
    // Exibir o modal apenas na primeira visita
    const savedCep = localStorage.getItem('cep');
    if (!savedCep) {
      setIsCepModalOpen(true);
    } else {
      setUserLocation(savedCep); // Configurar a localização com o CEP salvo
    }
  }, []);

  const handleSaveLocation = (location) => {
    localStorage.setItem('cep', location);
    setIsCepModalOpen(false); // Fecha o modal
  };
  

  const handleChangeLocation = () => {
    setIsCepModalOpen(true); // Reabrir o modal
  };

  return (
    <>
      {/* Barra de localização */}
      {userLocation && (
        <LocationBar
          location={userLocation}
          onChangeLocation={handleChangeLocation}
        />
      )}

      {/* Modal de CEP */}
      <CepModal
        isOpen={isCepModalOpen}
        onClose={() => setIsCepModalOpen(false)}
        onSave={handleSaveLocation} // Use a função handleSaveLocation corretamente aqui
/>


      {/* Navbar */}
      {location.pathname !== '/carrinho' && <Navbar />}

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
