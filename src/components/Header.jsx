import React from 'react';
import '../styles/Header.css';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  return (
    <header className="header">
      <h1>ArgFly</h1>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
