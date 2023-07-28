import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { ShoppingCart } from 'phosphor-react';
import bbLogo from '../assets/BB.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <img className="bblogo" src={bbLogo} alt="logo"></img>
        <Link to="./">Shop</Link>
        <Link to="./cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}
