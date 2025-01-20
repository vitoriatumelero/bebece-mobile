import React from 'react';
import './lancamentos.css';
import data_product from '../Assets/Assets/data'; 
import Peças from '../Peças/Peças';

const Lancamentos = () => {
  return (
    <div id="lancamentos" className="lancamentos"> {/* Adicionado id="lancamentos" */}
      <p>Lançamentos</p>
      <div className="lancamentos-peças">
        {data_product.map((peças, i) => (
          <Peças
            key={i}
            id={peças.id}
            name={peças.name}
            image={peças.image}
            new_price={peças.new_price}
            old_price={peças.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Lancamentos;
