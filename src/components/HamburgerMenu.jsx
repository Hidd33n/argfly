import React, { useState } from 'react';
import '../styles/HamburgerMenu.css';

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${open ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {open && (
        <nav className="menu-nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca-de">Acerca de</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
