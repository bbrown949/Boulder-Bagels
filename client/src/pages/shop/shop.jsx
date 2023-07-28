import React from 'react';
import { PRODUCTS } from '../../products';
// import { fetchProduct } from '../api';
import Product from './product';
import './shop.css';

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <p></p>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
