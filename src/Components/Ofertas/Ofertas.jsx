import React, { useState } from "react";
import "./Ofertas.css";
import ofertas_image1 from "../Assets/Assets/besimplebetrue.png";
import ofertas_image2 from "../Assets/Assets/image12.png";
import ofertas_image3 from "../Assets/Assets/Frame 83 1.png";

const ofertasData = [
  {
    id: 1,
    image: ofertas_image1,
    title: "É AMANHÃ",
    subtitle: "SIMPLE and TRUE lançamento da nova coleção Outono Inverno da Bebecê.❤️",
  },
  {
    id: 2,
    image: ofertas_image2,
    title: "NOVO LOGO, MESMA ESSÊNCIA.",
    subtitle:
      "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
  },
  {
    id: 3,
    image: ofertas_image3,
    title: "DESCUBRA O GLAMOUR EM CADA PASSO.",
    subtitle:
      "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨",
  },
];

const Ofertas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="ofertas">
      <p className="ofertas-title">Conheça mais</p>
      <p className="ofertas-subtitle">Fique por dentro de tudo que acontece no Bebecê</p>

      {/* Exibe apenas a oferta ativa */}
      <div className="ofertas-item active">
        <img src={ofertasData[currentIndex].image} alt={`Oferta ${currentIndex + 1}`} />
        <p className="ofertas-item-title">{ofertasData[currentIndex].title}</p>
        <p className="ofertas-item-subtitle">{ofertasData[currentIndex].subtitle}</p>
        <a href="#" className="saiba-mais">
          Saiba mais
        </a>
      </div>

      {/* Bolinhas de navegação */}
      <div className="navigation-dots">
        {ofertasData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
