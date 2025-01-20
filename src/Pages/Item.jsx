import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import data_product from '../Components/Assets/Assets/data';

const Item = () => {
  const { itemid } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useContext(CartContext);

  const item = data_product.find((product) => product.id === itemid);

  if (!item) {
    return <p>Produto não encontrado!</p>;
  }

  const handleAddToCart = () => {
    addItemToCart(item);
    console.log('Item adicionado:', item); 
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <p>Preço: R$ {item.new_price.toFixed(2)}</p>
      {item.old_price && <p>Preço antigo: R$ {item.old_price.toFixed(2)}</p>}
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Item;
