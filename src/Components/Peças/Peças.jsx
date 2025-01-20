import React, { useState, useContext } from 'react';
import './Peças.css';
import carrinho from '../Assets/Assets/adccarrinho.png'
import  { CartContext }  from '../../Context/CartContext';


const Peças = (props) => {

  const [showModal, setShowModal] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const handleCartClick = () => {
    setShowModal(true); // Abre o modal
  };

  const closeModal = () => {
    setShowModal(false); // Fecha o modal
  };

  const addToCart = () => {
    // Implementar lógica de adicionar ao carrinho
    // alert(`Produto ${props.name} adicionado ao carrinho!`);
    addItemToCart(props); // Adiciona a peça ao carrinho
    setShowModal(false); // Fecha o modal após adicionar
  };

  return (
    <div className="peças">
      <div className="cart-icon" onClick={handleCartClick}>
        <img src={carrinho} alt={''} />
      </div>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="peças-preços">
        <div className="peças-preços-novos">
          R$ {props.new_price.toFixed(2)}
        </div>
        {props.old_price && (
          <div className="peças-preços-velhos">
            <del>R$ {props.old_price.toFixed(2)}</del>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-horizontal">
      {/* Botão de fechar */}
      <button className="close-modal" onClick={closeModal}>
        &times; {/* Ícone de fechar */}
      </button>
      
      {/* Conteúdo do modal */}
      <div className="modal-image-container">
        <img src={props.image} alt={props.name} className="modal-image" />
      </div>
      <div className="modal-details">
        <h2>{props.name}</h2>
        <div className="size-options">
          <p>Tamanho:</p>
          {[34, 35, 36, 37, 38, 39, 40].map((size) => (
            <button key={size} className="size-option">
              {size}
            </button>
          ))}
        </div>
        <button className="add-to-cart" onClick={addToCart}>
          Adicionar ao carrinho 🛒
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Peças;