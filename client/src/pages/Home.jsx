import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="home-container">
      <div className="header-container">
        <h2 className="home-header-text"> Welcome to Boulder Bagels </h2>
        <p className="home-p-text"> Made Fresh.</p>
        <Row className="test-row">
          <Col className="col-half">
            <div classsName="quote1">
              <i>
                "Any bagel beats a New Jersey bagel, but no bagel beats a New
                York bagel, except for a Boulder Bagel." - Lane Faison, Boulder
                CO
              </i>
            </div>
          </Col>

          <Col classname="col-half">
            <img
              src="/images/homeImage.png"
              className="home-image1"
              alt="productName"></img>
          </Col>
        </Row>
        <Row className="test-row">
          <Col classname="col-half">
            <img
              src="/images/homeImage.png"
              className="home-image"
              alt="productName"></img>
          </Col>
          <Col className="col-half">
            <i>
              "These bagels remind me of my fav bagel shop in LA. They are super
              fresh, soft, and chewy! I cannot recommend them more!!!" - Laura
              Oakley, Erie, CO
            </i>
          </Col>
        </Row>
        <div className="home-spacing"></div>
        <Link to="/eats">
          <button className="home-order-btn"> ORDER NOW </button>
        </Link>
        <div className="social-row">
          <a
            href="https://www.facebook.com/BoulderBagels"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/facebook.png"
              className="fb-image"
              alt="facebook"></img>
          </a>
          <a
            href="https://www.instagram.com/boulderbagels/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/ig.png"
              className="ig-image"
              alt="instagram"></img>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Home;
