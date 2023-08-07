import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/BB.png';
import Container from 'react-bootstrap/Container';
import './Home.css';

function Home() {
  return (
    <Container className="home-container">
      <div className="home" style={{ backgroundImage: `(${BannerImage})` }}>
        <div className="headerContainer">
          <h2> Boulder Bagels </h2>
          <p> Made Fresh.</p>
          <img
            src="/images/001.png"
            className="image card-img-top"
            alt="productName"></img>
          <Link to="/eats">
            <button className="home-order-btn"> ORDER NOW </button>
          </Link>
          <div>FACEBOOK</div>
          <div>IG</div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
