import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/BB.png';
// import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `(${BannerImage})` }}>
      <div className="headerContainer">
        <h2> Boulder Bagels </h2>
        <p> Made Fresh.</p>
        <Link to="/eats">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
