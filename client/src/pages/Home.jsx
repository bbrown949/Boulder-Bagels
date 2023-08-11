import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <Container className="home-container">
      <div className="menu-header">
        <h2 className="eats-header">Welcome!</h2>
      </div>
      <div className="header-container">
        <Row className="test-row">
          <Col className="col-half">
            <div classsName="quote1">
              <i>
                "No bagel beats a New York bagel... except for a Boulder Bagel."
                <br></br> <br></br>Lane Faison - Boulder, Colorado
              </i>
            </div>
          </Col>

          <Col classname="col-half2">
            <Carousel className="carousel" />
          </Col>
        </Row>
        {/* <Row className="test-row">
          <Col classname="col-half">
            <img
              src="/images/homeImage.png"
              className="home-image"
              alt="productName"></img>
          </Col> */}
        {/* <Col className="col-half">
            <i>
              "These bagels remind me of my fav bagel shop in LA. They are super
              fresh, soft, and chewy! I cannot recommend them more!!!" - Laura
              Oakley, Erie, CO
            </i>
          </Col> */}
        {/* </Row> */}
        <div className="home-spacing"></div>
        {/* <Link to="/eats">
          <button className="home-order-btn"> ORDER NOW </button>
        </Link> */}
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
          <a
            href="https://www.facebook.com/BoulderBagels/reviews"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/reviews.png"
              className="reviews-image"
              alt="reviews"></img>
          </a>
          <a
            href="https://realestateraechel.wordpress.com/2019/12/10/featured-erie-business-boulder-bagels/"
            target="_blank"
            rel="noreferrer">
            <img
              src="/images/news.png"
              className="news-image"
              alt="press"></img>
          </a>
        </div>
        <div className="reviews"></div>
      </div>
    </Container>
  );
}

export default Home;
