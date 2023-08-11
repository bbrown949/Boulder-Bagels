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
        <div className="col-one">
          <Link to="./">
            <img className="bblogo" src={bbLogo} alt="logo"></img>
          </Link>
        </div>
        <div className="col-two">
          <Link to="./bagels">Bagels</Link>
          <Link to="./shmears">Shmear</Link>
          <Link to="./eats">Sandwiches</Link>
          <Link to="./drinks">Drinks</Link>
          <Link to="https://www.facebook.com/BoulderBagels/reviews">
            Reviews
          </Link>
          <Link to="./about">Press</Link>
          <Link to="./cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="./sign-in">
            <button type="button" className="sign-in-btn">
              Sign In
            </button>
          </Link>
          <Link to="./" onClick={handleSignOut}>
            <button type="button" className="sign-out-btn">
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
