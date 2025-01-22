import React, { useState } from 'react';
import './CepModal.css';

const CepModal = ({ isOpen, onClose, onSave }) => {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSave = () => {
    if (cep && cidade && estado) {
      const location = `${cidade}, ${estado}`;
      onSave(location); // Certifique-se de que "onSave" está correto
      onClose();
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cep-modal-overlay">
      <div className="cep-modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Personalize sua experiência e encontre produtos perto de você!</h2>
        <form>
          <div>
            <label>Código postal*</label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
            />
          </div>
          <div>
            <label>Cidade</label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Opcional"
            />
          </div>
          <div>
            <label>Estado</label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Opcional</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RS">Rio Grande do Sul </option>
              <option value="SC">Santa Catarina</option>
            
            </select>
          </div>
          <button className="save-button" type="button" onClick={handleSave}>
            Salvar endereço
          </button>
        </form>
      </div>
    </div>
  );
};

export default CepModal;
