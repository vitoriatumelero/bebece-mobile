import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";



import menuHamburguer from "../Assets/menu-hamburguer.png";
import closeIcon from "../Assets/close-icon.png";
import cartIcon from "../Assets/icone-carrinho.png";
import profileIcon from "../Assets/icone-conta.png";
import searchIcon from "../Assets/icone-search.png";
import logobranco from '../Assets/logo-branco.png';
import logopreta from '../Assets/logo-preto.png';
import imgmenu from '../Assets/fundo-menu.png'


const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      {/* Botão do menu hambúrguer */}
      <button className="hamburger-menu" onClick={() => setIsMenuOpen(true)}>
        <img src={menuHamburguer} alt="Abrir Menu" />
      </button>
      <div className="nav-search">
        <img src={searchIcon} alt="Pesquisa" className="nav-icon" />
</div>
      {/* Logo no centro */}
      <div className="nav-logo">
        <img src={logobranco} alt="Logo Bebecê" />
      </div>

       {/* Right Icons */}
       <div className="nav-right">
        <Link to="/perfil">
          <img src={profileIcon} alt="Perfil" className="nav-icon" />
        </Link>
        <Link to="/carrinho">
          <div className="nav-cart">
            <img src={cartIcon} alt="Carrinho" className="nav-icon" />
            <span className={`cart-count ${cartItems.length > 0 ? "show" : ""}`}>
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>


      {/* Menu lateral */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Botão para fechar */}
        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
          <img src={closeIcon} alt="Fechar Menu" />
        </button>

        {/* Logo preta no topo */}
        <img src={logopreta} alt="Logo Bebecê" className="menu-logo" />

        {/* Imagem de fundo do menu */}
        <img src={imgmenu} alt="Fundo Menu" className="menu-image" />

        {/* Opções do menu */}
        <ul className="menu-list">
          <li>Liquida</li>
          <li>Sapatos</li>
          <li>Sandálias</li>
          <li>Botas</li>
          <li>Tênis</li>
          <li>Outlet</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;