// src/components/Layout/Header.jsx
import React from 'react';
import desktopLogo from '../../assets/images/top-logo.png';
import mobileLogo from '../../assets/images/mobile-logo.png';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Layout.css';

const Header = () => {
  //call the hook and compute total quantity
  const { items } = useCart();
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);

  return (

    <header className="site-header">
      <div className="header-top">
        {/* Desktop logo hidden on small screens */}
        <img className="logo desktop-logo" src={desktopLogo} alt="Mystic Campers Logo" />
        {/* Mobile logo shown on small screens */}
        <img className="logo mobile-logo" src={mobileLogo} alt="Mystic Campers" />
        {/* Branding only visible on mobile */}
        <div className="branding">
          <h1>Mystic Campers</h1>
          <h3>Where the wild meets the weird.</h3>
        </div>
        <button className="menu-toggle" aria-label="Toggle menu">
          <span className="hamburger-icon">☰</span>
        </button>
      </div>
      <nav className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/hunt">The Hunt</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Cart ({totalQty})      {/* shows the badge count here */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );

};

  export default Header;
