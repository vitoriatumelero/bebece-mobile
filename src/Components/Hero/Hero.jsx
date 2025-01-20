import React, { useState } from 'react';
import './Hero.css';
import banner_image1 from '../Assets/Assets/bannermobile2.png';
import banner_image2 from '../Assets/Assets/bannermobile1.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [banner_image1, banner_image2];

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }} // Define a imagem como fundo
    >
      <div className="hero-button-container">
        <button className="hero-button">Confira agora</button>
      </div>
      <div className="hero-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentImage === index ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
