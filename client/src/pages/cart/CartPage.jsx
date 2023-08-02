import { useEffect, useState } from 'react';
import { fetchCartItems, toDollars } from '../../lib';

import './CartPage.css';

export default function CartPage() {
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadCart() {
      try {
        const cart = await fetchCartItems();
        setCart(cart);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCart();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Cart: {error.message}</div>;
  return (
    <div className="container">
      <div className="menu-header">
        <h2>Your Cart Items</h2>
      </div>
      <div className="row">
        {cart?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <CartItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CartItem({ product }) {
  const { productName, quantity, price, imageUrl } = product;

  return (
    <div>
      <img src={imageUrl} className="image card-img-top" alt={productName} />

      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text text-secondary">{toDollars(price)}</p>
        <h4>{quantity}</h4>
      </div>
    </div>
  );
}
