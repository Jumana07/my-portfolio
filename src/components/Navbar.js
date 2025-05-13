import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="logo">WELCOME!</h1>
      <div className="menu-icon" onClick={toggleMenu}>
         ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button onClick={toggleDarkMode}>🌙</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
