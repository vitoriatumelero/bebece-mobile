import React from 'react';
import './HomePage.css';

// Exemplo de imagens
import botaImage from '../Components/Assets/Assets/botaimage.png';
import scarpinImage from '../Components/Assets/Assets/scarpinimage.png';
import sapatilhaImage from '../Components/Assets/Assets/sapatilhaimage.png';
import sandaliaImage from '../Components/Assets/Assets/sandaliaimage.png';
import heroImage from '../Components/Assets/Assets/frame70.png';
import modelImage from '../Components/Assets/Assets/model.png';


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Categorias */}
      <div className="categorias">
        <h2>Categorias</h2>
        <div className="categorias-grid">
          <div className="categoria-item">
            <img src={botaImage} alt="Bota" />
            <a href="#" className="nome-cat">Botas</a>
          </div>
          <div className="categoria-item">
            <img src={scarpinImage} alt="Scarpin" />
            <a href="#" className="nome-cat">Scarpins</a>
          </div>
          <div className="categoria-item">
            <img src={sapatilhaImage} alt="Sapatilha" />
            <a href="#" className="nome-cat">Sapatilhas</a>
          </div>
          <div className="categoria-item">
            <img src={sandaliaImage} alt="Sandália" />
            <a href="#" className="nome-cat">Sandálias</a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="home-image" style={{ flex: 8 }}>
          <img src={heroImage} alt="Main" />
        </div>
        <div className="model-image" style={{ flex: 4 }}>
          <img src={modelImage} alt="Model" />
        </div>
      </div>
    </div>
    )
}
      


export default HomePage;
