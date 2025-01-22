import React, { useState } from 'react';
import './NewsLetter.css';
import logo from '../Assets/Assets/Logo.svg';
import instagram from '../Assets/Assets/instagram.png';
import facebook from '../Assets/Assets/facebook.png';
import pinterest from '../Assets/Assets/pinterest.png';
import twitter from '../Assets/Assets/twitter.png';
import tiktok from '../Assets/Assets/Vector.png';

const NewsLetter = () => {
  const [showCoupon, setShowCoupon] = useState(false); // Estado para controlar a exibição do cupom

  const handleEmailSubmit = () => {
    setShowCoupon(true); // Exibe o cupom ao clicar no botão
  };

  return (
    <div className="newsletter">
      {/* Seção Salmão */}
      <div className="newsletter-email">
        {showCoupon ? (
          // Exibe o cupom
          <div className="coupon-section">
            <p>Utilize o cupom abaixo e garanta seu desconto!</p>
            <div className="coupon-container">
              <span className="coupon-code">BEMVINDA</span>
              <button
                onClick={() => navigator.clipboard.writeText('BEMVINDA')}
                className="copy-button"
              >
                Copiar
              </button>
            </div>
          </div>
        ) : (
          // Exibe o campo de e-mail
          <>
            <p>Cadastre-se e receba 10% OFF na sua primeira compra!</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Digite seu e-mail" />
              <button onClick={handleEmailSubmit}>Enviar</button>
            </div>
          </>
        )}
      </div>

      {/* Seção Vermelha */}
      <div className="newsletter-footer">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={pinterest} alt="" />
            <img src={twitter} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#about">Quem somos</a>
            </li>
            <li>
              <a href="#policies">Políticas</a>
            </li>
            <li>
              <a href="#support">Suporte</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
