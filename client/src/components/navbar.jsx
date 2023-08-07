import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { ShoppingCart } from 'phosphor-react';
import bbLogo from '../assets/BB.png';
import AppContext from '../components/AppContext';
import { useContext } from 'react';

export default function Navbar() {
  const { handleSignOut } = useContext(AppContext);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="./eats">Eats</Link>
        <Link to="./drinks">Drinks</Link>
        <Link to="./about">About</Link>
        <img className="bblogo" src={bbLogo} alt="logo"></img>

        <Link to="./cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="./sign-in">
          <button type="button" className="entries-link white-text">
            Sign In
          </button>
        </Link>
        <Link to="./sign-out" onClick={handleSignOut}>
          <button type="button" className="entries-link white-text">
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
}
