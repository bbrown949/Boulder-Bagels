import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const data = [
  {
    id: 1,
    imgUrl: '/images/001.jpg',
  },
  {
    id: 2,
    imgUrl: '/images/002.jpg',
  },
  {
    id: 3,
    imgUrl: '/images/003.png',
  },
  {
    id: 4,
    imgUrl: '/images/004.png',
  },
  {
    id: 5,
    imgUrl: '/images/005.png',
  },
  {
    id: 6,
    imgUrl: '/images/006.png',
  },
];

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="text">
        <Link to="./shop">Shop</Link>
      </div>
      <Carousel data={data} />
    </div>
  );
}
