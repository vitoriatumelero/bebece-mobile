import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Carrinho.css';

const Carrinho = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calcularSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);

  return (
    <div className="carrinho">
      <button className="close-button" onClick={() => navigate('/')}>
        X
      </button>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="carrinho-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Preço: R$ {item.new_price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <div className="carrinho-total">
            <p>Subtotal: R$ {calcularSubtotal().toFixed(2)}</p>
            <button>Finalizar Pedido</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
