import React from 'react';
import './style.css';

type HeaderProps = {
  children: React.ReactNode; 
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <nav id="menu-h">
      <ul>
        <li><img src=".\src\imagens\logo_02.png" alt="Logo 1 - gatopreto" /></li>
        <li><a href="#">Quem Somos</a></li>
        <li><a href="#">Lojinha</a></li>
        <li><a href="#">{children}</a></li>
      </ul>
    </nav>
  );
};

export default Header;