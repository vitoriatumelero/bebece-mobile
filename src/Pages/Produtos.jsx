import React from 'react';
import Hero from '../Components/Hero/Hero';
import Lancamentos from '../Components/Lancamentos/lancamentos';
import Ofertas from '../Components/Ofertas/Ofertas';
import HomePage from './Homepage';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Produtos = () => {
  return (
    <div>
      <Hero />
      <HomePage/>
      <Lancamentos />
      <Ofertas />
      <NewsLetter/>
    </div>
  );
};

export default Produtos;
