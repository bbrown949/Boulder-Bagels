import { useEffect, useState } from 'react';
import { fetchCartItems } from '../../lib';

export default function CartPage() {
  const [cart, setCart] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    async function loadCart() {
      try {
        const cart = await fetchCartItems();
        setCart(cart);
        isLoading();
      } catch (e) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadCart();
  }, [cart, error, isLoading]);

  return <CartItem />;
}

async function CartItem({ product }) {
  const { productName, quantity, imageUrl } = product;
  return (
    <>
      <img className="cart-image" src={imageUrl} alt="placeholder" />
      <div className="product-name">
        <h3>{productName}</h3>
      </div>
      <div>
        <h4>{quantity}</h4>
      </div>
    </>
  );
}
