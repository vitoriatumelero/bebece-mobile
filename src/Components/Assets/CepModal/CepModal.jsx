import React, { useState, useEffect } from "react";
import "./CepModal.css";

const CepModal = ({ isOpen, onClose }) => {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    const savedCep = localStorage.getItem("cep");
    if (savedCep) {
      setCep(savedCep);
    }
  }, []);

  const handleSave = () => {
    if (cep) {
      localStorage.setItem("cep", cep);
      onClose();
    } else {
      alert("Por favor, preencha o CEP.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cep-modal-overlay">
      <div className="cep-modal">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Personalize sua experiência e encontre produtos perto de você!</h2>
        <form>
          <label htmlFor="cep">Código postal*</label>
          <input
            type="text"
            id="cep"
            placeholder="00000-000"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <div className="form-row">
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                placeholder="Opcional"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="estado">Estado</label>
              <select
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Opcional</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="save-button"
            onClick={handleSave}
          >
            Salvar endereço
          </button>
        </form>
      </div>
    </div>
  );
};

export default CepModal;
